
import { useState, useEffect } from 'react';
import { companies as initialCompanies } from '@/utils/companyData';
import { Company } from '@/types';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const useCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompaniesData = async () => {
      setLoading(true);
      try {
        // Obtener los datos iniciales de las empresas
        const companyList = [...initialCompanies];
        
        // Obtener los contactos guardados en Supabase
        const { data: contactsData, error } = await supabase
          .from('company_contacts')
          .select('*');

        if (error) {
          console.error('Error fetching contacts:', error);
          throw error;
        }

        // Actualizar las empresas con la información de quién las contactó
        if (contactsData) {
          // Crear un mapa para buscar rápidamente por ID de empresa
          const contactsByCompanyId = contactsData.reduce((acc, contact) => {
            acc[contact.company_id] = contact.contacted_by;
            return acc;
          }, {} as Record<string, string>);

          // Actualizar las empresas con la información de contacto
          companyList.forEach(company => {
            if (contactsByCompanyId[company.id]) {
              company.contactedBy = contactsByCompanyId[company.id];
            }
          });
        }

        setCompanies(companyList);
      } catch (error) {
        console.error('Error loading companies data:', error);
        // Fallback a los datos locales si hay un error
        setCompanies(initialCompanies);
      } finally {
        setLoading(false);
      }
    };

    loadCompaniesData();
  }, []);

  const contactCompany = async (companyId: string, contactorName: string) => {
    try {
      // Insertar el nuevo contacto en Supabase
      const { error } = await supabase
        .from('company_contacts')
        .insert([
          { company_id: companyId, contacted_by: contactorName }
        ]);

      if (error) {
        console.error('Error contacting company:', error);
        throw error;
      }
      
      // Actualizar el estado local
      const updatedCompanies = companies.map(company => 
        company.id === companyId 
          ? { ...company, contactedBy: contactorName }
          : company
      );
      
      setCompanies(updatedCompanies);
      
      toast({
        title: "¡Empresa contactada!",
        description: `Has registrado tu interés en esta empresa como ${contactorName}`,
      });
      
      return true;
    } catch (error) {
      console.error('Error contacting company:', error);
      toast({
        title: "Error",
        description: "No se pudo registrar el contacto, intenta de nuevo",
        variant: "destructive",
      });
      
      return false;
    }
  };

  return { companies, loading, contactCompany };
};
