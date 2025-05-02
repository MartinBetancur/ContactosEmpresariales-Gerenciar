
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/e1ff73c7-d6fa-404d-8acd-89d5eb75067d.png')` 
        }}
      />
      <div className="hero-overlay absolute inset-0 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <CountdownTimer />

        <div className="mt-8 mb-10 animate-pulse-light">
          {/* EXPO GERENCIAR Logo placeholder */}
          <div className="max-w-3xl mx-auto">
            <img 
              src="https://placehold.co/800x200/ffffff/5856D6?text=EXPO+GERENCIAR&font=montserrat" 
              alt="EXPO GERENCIAR" 
              className="w-full h-auto"
            />
            <h2 className="text-white text-xl md:text-3xl mt-4">TRANSFORMA IMPACTA INNOVA</h2>
            <p className="text-white text-sm mt-1">12ª VERSIÓN</p>
          </div>
        </div>

        <div className="mt-12 mb-4">
          <h2 className="text-white text-3xl md:text-5xl font-bold">22 - 23 de Mayo</h2>
        </div>

        <div className="mt-8 max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-xl">
          <p className="text-white text-base md:text-xl">
            ¡Es momento de actuar! Contactemos, vendamos y llevemos este evento al 
            <span className="font-bold"> SOLD OUT </span> 
            que todos queremos alcanzar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
