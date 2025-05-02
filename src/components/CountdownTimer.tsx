
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

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
    // Set target date to May 22, 2025
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
    <div className="countdown-container w-full max-w-4xl mx-auto px-4 py-3 mt-4 mb-8">
      <div className="text-center">
        <p className="text-white mb-1">Faltan</p>
        <div className="flex items-center justify-center space-x-2 md:space-x-4 text-white">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{timeLeft.days}</span>
            <span className="text-xs md:text-sm">días</span>
          </div>
          
          <span className="text-2xl md:text-4xl font-bold">:</span>
          
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{timeLeft.hours}</span>
            <span className="text-xs md:text-sm">horas</span>
          </div>
          
          <span className="text-2xl md:text-4xl font-bold">:</span>
          
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{timeLeft.minutes}</span>
            <span className="text-xs md:text-sm">minutos</span>
          </div>
          
          <span className="text-2xl md:text-4xl font-bold">:</span>
          
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{timeLeft.seconds}</span>
            <span className="text-xs md:text-sm">segundos</span>
          </div>
        </div>
        <p className="text-white text-sm md:text-base mt-1">para GERENCIAR 2025</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
