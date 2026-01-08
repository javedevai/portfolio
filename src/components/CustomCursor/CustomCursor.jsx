import { useEffect, useState } from 'react';

// Tech logos for cursor
const techLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
];

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentLogo, setCurrentLogo] = useState(() => 
    techLogos[Math.floor(Math.random() * techLogos.length)]
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Handle custom cursor overrides (e.g. from WordPress section)
  useEffect(() => {
    const handleCursorChange = (e) => {
      const { logo, lock } = e.detail;
      if (logo) {
        setCurrentLogo(logo);
        window.cursorLocked = lock; 
      } else {
        window.cursorLocked = false;
        // Immediately pick a random logo when unlocked to reset state
        const randomIndex = Math.floor(Math.random() * techLogos.length);
        setCurrentLogo(techLogos[randomIndex]);
      }
    };

    window.addEventListener('change-cursor-theme', handleCursorChange);
    return () => window.removeEventListener('change-cursor-theme', handleCursorChange);
  }, []);

  // Rotate logo every 20-100 seconds randomly
  useEffect(() => {
    const getRandomInterval = () => Math.floor(Math.random() * 80000) + 20000; // 20-100 seconds

    const rotateLogo = () => {
      if (window.cursorLocked) return; // Skip if locked by a section
      const randomIndex = Math.floor(Math.random() * techLogos.length);
      setCurrentLogo(techLogos[randomIndex]);
    };

    let timeoutId = setTimeout(function rotate() {
      rotateLogo();
      timeoutId = setTimeout(rotate, getRandomInterval());
    }, getRandomInterval());

    return () => clearTimeout(timeoutId);
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Custom cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer ring */}
        <div className="absolute -inset-2 rounded-full border border-accent/30 animate-ping" style={{ animationDuration: '2s' }} />
        
        {/* Logo container */}
        <div className="relative w-8 h-8 bg-bg-secondary/80 backdrop-blur-sm rounded-full p-1.5 border border-accent/50 shadow-lg shadow-accent/20">
          <img 
            src={currentLogo} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
