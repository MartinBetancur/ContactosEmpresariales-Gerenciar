import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#4f46e5]/100 to-[#9333ea]/50 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <h3 className="text-4xl font-bold mb-4">EXPO GERENCIAR 2025</h3>
            <p className="text-lg">
              <span className="font-bold">¡Sin Gerenciar, se acaba GPG!</span> Tu compromiso y esfuerzo son clave para lograr el <span className="font-bold">SOLD OUT</span> que merecemos. ¡Hagámoslo posible juntos!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
