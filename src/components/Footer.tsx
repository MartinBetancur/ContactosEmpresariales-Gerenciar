
import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">EXPO GERENCIAR 2025</h3>
            <p className="text-gray-400">22 - 23 de Mayo</p>
            <p className="text-gray-400 mt-4">TRANSFORMA · IMPACTA · INNOVA</p>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Inicio</a>
              </li>
              <li>
                <a href="#empresas" className="text-gray-400 hover:text-white">Empresas</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Acerca del evento</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Contacto</h4>
            <div className="flex items-center space-x-4">
              <a href="mailto:info@gerenciar.co" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/gerenciar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="tel:+573001234567" className="text-gray-400 hover:text-white">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} EXPO GERENCIAR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
