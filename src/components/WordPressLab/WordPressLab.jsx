import { motion } from 'framer-motion';

// Comprehensive WordPress Stack
const themes = [
  { name: 'Astra', id: 'astra-sites' }, // Using Astra Sites for logo
  { name: 'Hello', id: 'elementor' }, // Using Elementor logo
  { name: 'OceanWP', id: 'ocean-extra' }, // Using Ocean Extra for logo
  { name: 'GeneratePress', id: 'generateblocks' }, // Using GenerateBlocks for logo
  { name: 'Kadence', id: 'kadence-blocks' }, // Using Kadence Blocks for logo
  { name: 'Divi', text: 'Divi', color: '#8300e9' },
  { name: 'Avada', text: 'Avada', color: '#4b7325' },
  { name: 'The7', text: 'The7', color: '#277ce2' },
  { name: 'WoodMart', text: 'Wood', color: '#83b735' },
  { name: 'Flatsome', text: 'Flat', color: '#444' },
  { name: 'BeTheme', text: 'Be', color: '#0083ff' },
  { name: 'Salient', text: 'Sal', color: '#13aff0' },
  { name: 'Newspaper', text: 'News', color: '#222' },
  { name: 'Enfold', text: 'Enf', color: '#563d7c' },
  { name: 'Oshine', text: 'Osh', color: '#ff0055' },
];

const plugins = [
  { name: 'Elementor', id: 'elementor' },
  { name: 'WooCommerce', id: 'woocommerce' },
  { name: 'Yoast', id: 'wordpress-seo' },
  { name: 'Rank Math', id: 'seo-by-rank-math' },
  { name: 'WPForms', id: 'wpforms-lite' },
  { name: 'Wordfence', id: 'wordfence' },
  { name: 'UpdraftPlus', id: 'updraftplus', ext: 'jpg' },
  { name: 'Smush', id: 'wp-smushit' },
  { name: 'ACF', id: 'advanced-custom-fields' },
  { name: 'Mailchimp', id: 'mailchimp-for-wp' },
  { name: 'BuddyBoss', id: 'buddyboss-platform' },
  { name: 'TablePress', id: 'tablepress' },
  { name: 'WP Mail SMTP', id: 'wp-mail-smtp' },
  { name: 'GS Sliders', id: 'gs-logo-slider' },
  { name: 'Migration', id: 'all-in-one-wp-migration' },
  { name: 'Contact Form 7', id: 'contact-form-7' },
  { name: 'WP Rocket', text: 'Rocket', color: '#f0552b' },
  { name: 'Slider Rev', text: 'Slider', color: '#5e35b1' },
  { name: 'WPBakery', text: 'WPB', color: '#005581' },
  { name: 'LearnDash', text: 'LMS', color: '#008ad0' },
  { name: 'MemberPress', text: 'MP', color: '#003e58' },
  { name: 'WPML', text: 'WPML', color: '#1a9a83' },
  { name: 'JetEngine', text: 'JET', color: '#c1334c' },
  { name: 'Gravity', text: 'GF', color: '#2b2b2b' },
  { name: 'SearchWP', text: 'SWP', color: '#f44336' },
];

const features = [
  {
    title: "Custom Theme Development",
    desc: "Pixel-perfect Figma to WordPress conversions.",
    icon: "🎨"
  },
  {
    title: "Plugin Architecture",
    desc: "Custom PHP solutions for business needs.",
    icon: "🔌"
  },
  {
    title: "Performance Optimization",
    desc: "Vitals-focused tuning for 90+ speeds.",
    icon: "⚡"
  },
  {
    title: "WooCommerce Scale",
    desc: "High-volume stores with payment integrations.",
    icon: "🛒"
  }
];

const ToolGrid = ({ tools, title }) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">{title}</h4>
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
      {tools.map((tool) => (
        <motion.div 
          key={tool.name}
          whileHover={{ y: -3, scale: 1.05 }}
          className="flex flex-col items-center gap-1.5 group cursor-default"
        >
          <div className="w-10 h-10 rounded-lg bg-[#252525] border border-[#333] p-1.5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-[#2a2a2a] transition-all overflow-hidden relative shadow-sm">
            
            {tool.id ? (
              <img 
                src={`https://ps.w.org/${tool.id}/assets/icon-128x128.${tool.ext || 'png'}`} 
                alt={tool.name} 
                className="w-full h-full object-contain rounded-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<span style="color: #888; font-weight: bold; font-size: 10px;">${tool.name.substring(0,2)}</span>`;
                }}
              />
            ) : (
              <span className="font-bold text-[10px]" style={{ color: tool.color }}>{tool.text}</span>
            )}
          </div>
          <span className="text-[9px] text-gray-400 text-center font-bold group-hover:text-gray-200 transition-colors w-full truncate px-0.5">
            {tool.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

const WordPressLab = () => {
  const handleMouseEnter = () => {
    const event = new CustomEvent('change-cursor-theme', {
      detail: { 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg',
        lock: true 
      }
    });
    window.dispatchEvent(event);
  };

  const handleMouseLeave = () => {
    const event = new CustomEvent('change-cursor-theme', {
      detail: { logo: null, lock: false }
    });
    window.dispatchEvent(event);
  };

  return (
    <section 
      id="wordpress-lab"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="py-24 relative overflow-hidden bg-bg-secondary/30"
    >
      {/* Background separation */}
      <div className="absolute inset-0 bg-blue-950/5 skew-y-3 transform origin-bottom-right" />
      
      {/* WordPress Feeling Background Watermark */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none select-none z-0">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" 
          alt="WordPress Watermark" 
          className="w-[600px] h-[600px] text-blue-500 fill-current"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest bg-blue-500/10 mb-6 inline-block"
            >
              CMS Architecture
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              The WordPress <span className="text-blue-500">Laboratory</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed"
            >
              Expert-level Development. <span className="text-white font-semibold">4+ years</span> of experience. 
              From high-performance themes to complex plugin architecture.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="shrink-0 bg-bg-card border border-blue-500/20 p-6 rounded-2xl text-center shadow-2xl shadow-blue-900/10"
          >
            <div className="text-3xl font-black text-blue-500 mb-1">100+</div>
            <div className="text-xs text-text-secondary uppercase tracking-wider font-bold">Projects</div>
          </motion.div>
        </div>

        {/* Content Top Row: Features + Terminal */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20 relative z-10">
          
          {/* Left: Interactive Feature List */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-bg-card border border-border hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
              >
                <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all filter">{feature.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: The "Terminal" Visual (Restored) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#1e1e1e] rounded-xl border border-[#333] shadow-2xl overflow-hidden self-center w-full"
          >
            {/* Fake Admin Header */}
            <div className="bg-[#2c2c2c] px-4 py-3 flex items-center justify-between border-b border-[#333]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-gray-500">wp-admin / dashboard</div>
            </div>

            {/* Content: System Info Only */}
            <div className="p-8">
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center text-gray-400 border-b border-[#333] pb-2">
                  <span>PHP Version</span>
                  <span className="text-green-400">8.2 (Latest)</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 border-b border-[#333] pb-2">
                  <span>Server</span>
                  <span className="text-blue-400">Nginx / LiteSpeed</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 border-b border-[#333] pb-2">
                  <span>Database</span>
                  <span className="text-purple-400">MySQL Optimized</span>
                </div>
                 <div className="flex justify-between items-center text-gray-400">
                  <span>Security Status</span>
                  <span className="text-green-400 font-bold">Hardened</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>
        
        </div>

        {/* The 2-Column Ecosystem Split - Fully Transparent as Requested */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 relative z-10">
          
          {/* Column 1: Themes & Frameworks */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-4 lg:p-0 flex flex-col h-full bg-transparent border-none"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
              <h3 className="text-lg font-bold text-white">Themes & Frameworks</h3>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4">
              {themes.map((tool) => (
                <motion.div 
                  key={tool.name}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2 group cursor-default"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 p-3 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 overflow-hidden relative shadow-lg backdrop-blur-sm">
                    {tool.id ? (
                      <img 
                        src={`https://ps.w.org/${tool.id}/assets/icon-128x128.${tool.ext || 'png'}`} 
                        alt={tool.name} 
                        className="w-full h-full object-contain rounded-lg filter drop-shadow-md"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span style="color: #888; font-weight: bold; font-size: 14px;">${tool.name.substring(0,2)}</span>`;
                        }}
                      />
                    ) : (
                      <span className="font-bold text-sm" style={{ color: tool.color }}>{tool.text}</span>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 text-center font-bold group-hover:text-blue-300 transition-colors w-full truncate px-1">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Plugins & Tools */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-4 lg:p-0 flex flex-col h-full bg-transparent border-none"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full" />
              <h3 className="text-xl font-bold text-white">Plugins & Tools</h3>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4">
              {plugins.map((tool) => (
                <motion.div 
                  key={tool.name}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2 group cursor-default"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 p-3 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300 overflow-hidden relative shadow-lg backdrop-blur-sm">
                    {tool.id ? (
                      <img 
                        src={`https://ps.w.org/${tool.id}/assets/icon-128x128.${tool.ext || 'png'}`} 
                        alt={tool.name} 
                        className="w-full h-full object-contain rounded-lg filter drop-shadow-md"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span style="color: #888; font-weight: bold; font-size: 14px;">${tool.name.substring(0,2)}</span>`;
                        }}
                      />
                    ) : (
                      <span className="font-bold text-sm" style={{ color: tool.color }}>{tool.text}</span>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 text-center font-bold group-hover:text-purple-300 transition-colors w-full truncate px-1">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WordPressLab;
