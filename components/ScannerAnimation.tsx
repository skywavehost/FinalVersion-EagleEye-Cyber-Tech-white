
import React, { useEffect, useRef } from 'react';

const ScannerAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let scanY = 0;
    const particles: { x: number; y: number; size: number; speed: number; opacity: number; label: string }[] = [];

    const labels = ['NODE_AUTH', 'SSL_VALID', 'IP_ENC', 'THREAT_NULL', 'PACKET_IN', 'SEC_DNS'];

    const initParticles = () => {
      particles.length = 0;
      const count = Math.floor(canvas.width / 50);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 1,
          speed: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.15 + 0.05,
          label: labels[Math.floor(Math.random() * labels.length)]
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background scanlines
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.03)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.height; i += 6) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Scanning Beam
      scanY += 1.8;
      if (scanY > canvas.height + 100) scanY = -100;

      const beamGradient = ctx.createLinearGradient(0, scanY - 80, 0, scanY);
      beamGradient.addColorStop(0, 'transparent');
      beamGradient.addColorStop(0.5, 'rgba(2, 132, 199, 0.02)');
      beamGradient.addColorStop(1, 'rgba(2, 132, 199, 0.06)');

      ctx.fillStyle = beamGradient;
      ctx.fillRect(0, scanY - 80, canvas.width, 80);

      // Beam Line
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      // Nodes / Particles
      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;

        const distanceToBeam = Math.abs(p.y - scanY);
        const inBeamRange = distanceToBeam < 100;
        const intensity = inBeamRange ? Math.max(0, 1 - distanceToBeam / 100) : 0;
        
        ctx.fillStyle = `rgba(2, 132, 199, ${p.opacity + intensity * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (intensity > 0.7) {
          ctx.font = '800 9px Inter';
          ctx.fillStyle = `rgba(2, 132, 199, ${intensity * 0.6})`;
          ctx.fillText(p.label, p.x + 12, p.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
       <div className="absolute inset-0 bg-radial-gradient from-white/20 via-white/80 to-white z-10" />
       <canvas 
         ref={canvasRef} 
         className="absolute inset-0 opacity-100 w-full h-full z-20"
       />
    </div>
  );
};

export default ScannerAnimation;
