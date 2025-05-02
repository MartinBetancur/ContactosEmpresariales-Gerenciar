
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Company, SectorType } from '@/types';
import { Mail, Phone, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
  onContact: (companyId: string, name: string) => void;
}

const getSectorLabel = (sector: SectorType): string => {
  switch (sector) {
    case 'emergente': return 'Sectores Emergentes';
    case 'triple-impacto': return 'Triple Impacto';
    case 'ia-digitalizacion': return 'IA & Digitalización';
    default: return sector;
  }
};

const getSectorClass = (sector: SectorType): string => {
  switch (sector) {
    case 'emergente': return 'sector-emergente';
    case 'triple-impacto': return 'sector-triple-impacto';
    case 'ia-digitalizacion': return 'sector-ia-digitalizacion';
    default: return '';
  }
};

const CompanyCard: React.FC<CompanyCardProps> = ({ company, onContact }) => {
  const [contactorName, setContactorName] = useState('');
  const [showForm, setShowForm] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactorName.trim()) {
      onContact(company.id, contactorName.trim());
      setShowForm(false);
    }
  };

  return (
    <div className="company-card p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Company Info */}
        <div className="md:w-2/3">
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gerenciar-dark-blue mb-2">
              {company.name}
            </h3>
            <span className={`sector-badge inline-block mb-4 ${getSectorClass(company.sector)}`}>
              {getSectorLabel(company.sector)}
            </span>
            <p className="text-gray-600 mb-4">{company.description}</p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-3">
              {company.contactInfo.email && (
                <a 
                  href={`mailto:${company.contactInfo.email}`} 
                  className="flex items-center gap-1 text-gerenciar-blue hover:text-gerenciar-dark-blue transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              )}
              {company.contactInfo.phone && (
                <a 
                  href={`tel:${company.contactInfo.phone}`} 
                  className="flex items-center gap-1 text-gerenciar-blue hover:text-gerenciar-dark-blue transition-colors"
                  aria-label="Teléfono"
                >
                  <Phone className="h-5 w-5" />
                </a>
              )}
              {company.contactInfo.whatsapp && (
                <a 
                  href={`https://wa.me/${company.contactInfo.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gerenciar-blue hover:text-gerenciar-dark-blue transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              )}
              {company.contactInfo.instagram && (
                <a 
                  href={`https://instagram.com/${company.contactInfo.instagram}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gerenciar-blue hover:text-gerenciar-dark-blue transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {company.contactInfo.facebook && (
                <a 
                  href={`https://facebook.com/${company.contactInfo.facebook}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gerenciar-blue hover:text-gerenciar-dark-blue transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {company.contactInfo.linkedin && (
                <a 
                  href={`https://linkedin.com/in/${company.contactInfo.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gerenciar-blue hover:text-gerenciar-dark-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Contact Form or Already Contacted */}
          <div className="mt-4">
            {company.contactedBy ? (
              <div className="p-3 bg-gerenciar-light-blue/30 rounded-md text-gerenciar-dark-blue">
                Contactado por <span className="font-semibold">{company.contactedBy}</span>
              </div>
            ) : (
              showForm && (
                <form onSubmit={handleSubmit} className="contact-form-transition">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Nombre de GPGeño"
                      value={contactorName}
                      onChange={(e) => setContactorName(e.target.value)}
                      className="flex-grow"
                      required
                    />
                    <Button type="submit" className="bg-gerenciar-purple hover:bg-gerenciar-dark-purple">
                      Contactar
                    </Button>
                  </div>
                </form>
              )
            )}
          </div>
        </div>

        {/* Company Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-48 md:h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
