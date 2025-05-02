
import CompanyCard from './CompanyCard';
import { useCompanies } from '@/hooks/useCompanies';
import { Skeleton } from '@/components/ui/skeleton';

const CompanyList = () => {
  const { companies, loading, contactCompany } = useCompanies();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gerenciar-dark-blue">Empresas Objetivo</h2>
        {[1, 2, 3].map((index) => (
          <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-1/4 mb-6" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-8" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="md:w-1/3">
                <Skeleton className="h-48 w-full rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gerenciar-dark-blue">Empresas Objetivo</h2>
      
      {companies.length > 0 ? (
        companies.map(company => (
          <CompanyCard 
            key={company.id} 
            company={company} 
            onContact={contactCompany} 
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No hay empresas disponibles actualmente.</p>
      )}
    </div>
  );
};

export default CompanyList;
