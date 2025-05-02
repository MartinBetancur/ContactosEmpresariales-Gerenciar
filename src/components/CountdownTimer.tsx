import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-05-22T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-9 left-0 right-0 z-50 px-4">
      <div
        className="text-white py-9 px-6 rounded-full max-w-3xl mx-auto flex items-center justify-center text-center shadow-lg"
        style={{
          background: 'linear-gradient(90deg, #2D3FE6 0%, #9F4DBA 50%, #E15670 100%)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{timeLeft.days}</span>
            <span className="text-xs md:text-sm">días</span>
          </div>

          <span className="text-2xl md:text-4xl font-bold">:</span>

          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="text-xs md:text-sm">horas</span>
          </div>

          <span className="text-2xl md:text-4xl font-bold">:</span>

          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="text-xs md:text-sm">minutos</span>
          </div>

          <span className="text-2xl md:text-4xl font-bold">:</span>

          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="text-xs md:text-sm">segundos</span>
          </div>
        </div>
        <div className="ml-4 text-xs md:text-sm mt-2">para GERENCIAR 2025</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
