import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('/assets/logistica-gerenciar.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#4f46e5]/85 via-[#9333ea]/60 to-[#f9fafb]/50 z-10" />

      {/* Temporizador (parte superior) */}
      <div className="absolute top-0 left-0 w-full pt-6 md:pt-10 z-9999">
        <CountdownTimer />
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="mt-28 mb-8">
          <img 
            src="/assets/logo.png" 
            alt="Gerenciar 2025 Logo" 
            className="mx-auto max-h-44 md:max-h-52"
          />
        </div>

        <h2 className="text-xl md:text-4xl font-semibold mb-6">
          22 - 23 de Mayo
        </h2>

        <div className="mt-8 max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-xl">
          <p className="text-xl md:text-2xl font-medium">
            ¡Es momento de actuar! Contactemos, vendamos y llevemos este evento al 
            <strong> SOLD OUT </strong> que todos queremos alcanzar.
          </p>
        </div>
      </div>

      {/* Gradiente inferior para efecto visual */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
