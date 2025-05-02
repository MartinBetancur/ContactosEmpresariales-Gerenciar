
export type ContactInfo = {
  email?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  phone?: string;
};

export type SectorType = 'emergente' | 'triple-impacto' | 'ia-digitalizacion';

export type Company = {
  id: string;
  name: string;
  description: string;
  sector: SectorType;
  image: string;
  contactedBy: string | null;
  contactInfo?: ContactInfo;
};
