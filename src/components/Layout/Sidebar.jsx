import { Github, Linkedin } from 'lucide-react';

// Custom SVG icons for freelance platforms
const UpworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
  </svg>
);

const FiverrIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h1.527v1.316zm-6.786 1.501h-3.359c.088.546.48.955 1.1.955.41 0 .738-.117.879-.41l1.425.41c-.351.937-1.287 1.382-2.304 1.382-1.61 0-2.671-1.045-2.671-2.495s1.032-2.495 2.76-2.495c1.61 0 2.437 1.074 2.437 2.495 0 .118 0 .206-.03.293-.001.03-.148.075-.237-.135zm-1.61-.996c-.059-.44-.381-.82-.938-.82-.469 0-.85.264-.967.82h1.905zM8.727 15.44h-1.61v-4.874h1.61v4.874zm-.791-5.478a.911.911 0 1 1-.002-1.822.911.911 0 0 1 .002 1.822zM5.478 15.44H2.289V13.85h.235c.235 0 .323-.118.323-.264v-2.085H2.29v-1.287h.559v-.264c0-1.316.88-1.61 2.085-1.61h.733v1.287h-.498c-.44 0-.498.147-.498.469v.118h.996v1.287h-.996v1.591c0 .587-.117.879-.235.879h-.059v1.59h1.101v-.001zm-.821-6.946h-.235v-.001l.235.001z"/>
  </svg>
);

const Sidebar = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/javedevai', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/javedevai/', label: 'LinkedIn' },
    { icon: UpworkIcon, href: 'https://www.upwork.com/freelancers/~019ad417726620b494', label: 'Upwork', isCustom: true },
    { icon: FiverrIcon, href: 'https://www.fiverr.com/devjaved', label: 'Fiverr', isCustom: true },
  ];

  return (
    <>
      {/* Left Sidebar - Developer Style Email */}
      <div className="fixed left-6 lg:left-10 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50">
        {/* Code-style email with syntax highlighting */}
        <a
          href="mailto:portfolio.everybody053@passinbox.com"
          className="group relative"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="font-mono text-xs tracking-wider flex items-center gap-1">
            <span className="text-purple-400">const</span>
            <span className="text-accent"> email</span>
            <span className="text-white"> = </span>
            <span className="text-amber-400 group-hover:text-accent transition-colors">&quot;@javed&quot;</span>
          </span>
        </a>
        
        {/* Terminal cursor blink */}
        <div className="w-2 h-4 bg-accent animate-pulse" />
        
        <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent" />
      </div>

      {/* Right Sidebar - Social Icons with Code Comments */}
      <div className="fixed right-6 lg:right-10 bottom-0 hidden lg:flex flex-col items-center gap-4 z-50">
        {/* Code comment style label */}
        <div 
          className="font-mono text-[10px] text-text-muted tracking-wider mb-2"
          style={{ writingMode: 'vertical-rl' }}
        >
          { }
          {'// connect'}
        </div>
        
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-text-secondary hover:text-accent hover:-translate-y-1 transition-all"
            aria-label={social.label}
            title={social.label}
          >
            {/* Hover tooltip with code style */}
            <span className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs bg-bg-card px-2 py-1 rounded border border-border whitespace-nowrap">
              <span className="text-accent">import</span> {social.label}
            </span>
            {social.isCustom ? <social.icon /> : <social.icon size={20} />}
          </a>
        ))}
        
        {/* Git branch style line */}
        <div className="flex flex-col items-center gap-1 mt-2">
          <div className="w-2 h-2 rounded-full border-2 border-accent" />
          <div className="w-px h-20 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
