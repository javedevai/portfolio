import { useEffect } from 'react';
import About from './components/About/About';
import CodeMagicBackground from './components/Background/CodeMagicBackground';
import Contact from './components/Contact/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import WordPressLab from './components/WordPressLab/WordPressLab';

function App() {
  useEffect(() => {
    // Add Dialogflow script
    const script = document.createElement('script');
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased relative">
      <CustomCursor />
      <CodeMagicBackground />
      <Navbar className="relative z-10" />
      <Sidebar className="relative z-10" />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <WordPressLab />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
      
      {/* Dialogflow Messenger */}
      <df-messenger
        chat-icon="https://img.freepik.com/premium-vector/robot-chat-chat-bot-logo-modern-conversation-automatic-technology-logo-design-vector-template_148524-1362.jpg"
        intent="WELCOME"
        chat-title="Javed Bot"
        agent-id="a2a26835-f030-4fca-97da-2df9961da3e0"
        language-code="en"
      ></df-messenger>
    </div>
  );
}

export default App;
