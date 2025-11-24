"use client";
import { useState } from 'react';
import Header from '../components/header';
import ProfileCard from '../components/profilecard';
import Projects from '../components/projects';
import ContactForm from '../components/contactform';
import Skills from '../components/skills';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [aboutVariant, setAboutVariant] = useState('default');

  function handleNavigate(section) {
    setActiveSection(section);
    setAboutVariant(section === 'about' ? 'alternate' : 'default');
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <div className="lava-embers" aria-hidden="true" />
      <div className="rock">
        <main className="appContainer">
          <Header onNavClick={handleNavigate} />

          {activeSection === 'about' && (
            <ProfileCard variant={aboutVariant} />
          )}
          
          {activeSection === 'skills' && (
            <Skills />
          )}

          {activeSection === 'projects' && (
            <Projects />
          )}

          {activeSection === 'contact' && (
            <ContactForm />
          )}
        </main>
      </div>
    </div>
  );
}