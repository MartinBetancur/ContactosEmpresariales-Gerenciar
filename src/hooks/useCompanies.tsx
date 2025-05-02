
import { useState, useEffect } from 'react';
import { companies as initialCompanies } from '@/utils/companyData';
import { Company } from '@/types';
import { toast } from '@/components/ui/use-toast';

export const useCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompanies = () => {
      setLoading(true);
      try {
        // Check localStorage for companies data
        const storedCompanies = localStorage.getItem('gerenciarCompanies');
        
        if (storedCompanies) {
          setCompanies(JSON.parse(storedCompanies));
        } else {
          setCompanies(initialCompanies);
          localStorage.setItem('gerenciarCompanies', JSON.stringify(initialCompanies));
        }
      } catch (error) {
        console.error('Error loading companies data:', error);
        setCompanies(initialCompanies);
      } finally {
        setLoading(false);
      }
    };

    loadCompanies();
  }, []);

  const contactCompany = (companyId: string, contactorName: string) => {
    try {
      const updatedCompanies = companies.map(company => 
        company.id === companyId 
          ? { ...company, contactedBy: contactorName }
          : company
      );
      
      setCompanies(updatedCompanies);
      localStorage.setItem('gerenciarCompanies', JSON.stringify(updatedCompanies));
      
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
