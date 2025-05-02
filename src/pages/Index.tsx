
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import CompanyList from '@/components/CompanyList';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to companies section if URL has #empresas hash
  useEffect(() => {
    if (window.location.hash === '#empresas') {
      const element = document.getElementById('empresas');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      <section id="empresas" className="py-12 bg-gray-100">
        <CompanyList />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
