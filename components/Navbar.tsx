'use client';

import { useState } from 'react';
import { BookOpen, GraduationCap, FileText, Gamepad2, Bot, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  activeSection?: string;
  onSectionChange?: (sectionId: string) => void;
}

export function Navbar({ activeSection = 'home', onSectionChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
    
    // For client-side navigation, scroll to element if it exists
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b-4 border-orange-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-orange-600 font-semibold">भारत शिक्षा पोर्टल</h1>
              <p className="text-xs text-gray-600">शिक्षा मंत्रालय, भारत सरकार</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('home')}
              className="gap-2"
            >
              <Bot className="w-4 h-4" />
              होम
            </Button>
            <Button
              variant={activeSection === 'quiz' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('quiz')}
              className="gap-2"
            >
              <BookOpen className="w-4 h-4" />
              प्रश्नोत्तरी
            </Button>
            <Button
              variant={activeSection === 'videos' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('videos')}
              className="gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              वीडियो व्याख्यान
            </Button>
            <Button
              variant={activeSection === 'pdfs' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('pdfs')}
              className="gap-2"
            >
              <FileText className="w-4 h-4" />
              पुस्तकें PDF
            </Button>
            <Button
              variant={activeSection === 'games' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('games')}
              className="gap-2"
            >
              <Gamepad2 className="w-4 h-4" />
              शैक्षिक खेल
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-2 pb-2">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('home')}
              className="gap-2 justify-start"
            >
              <Bot className="w-4 h-4" />
              होम
            </Button>
            <Button
              variant={activeSection === 'quiz' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('quiz')}
              className="gap-2 justify-start"
            >
              <BookOpen className="w-4 h-4" />
              प्रश्नोत्तरी
            </Button>
            <Button
              variant={activeSection === 'videos' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('videos')}
              className="gap-2 justify-start"
            >
              <GraduationCap className="w-4 h-4" />
              वीडियो व्याख्यान
            </Button>
            <Button
              variant={activeSection === 'pdfs' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('pdfs')}
              className="gap-2 justify-start"
            >
              <FileText className="w-4 h-4" />
              पुस्तकें PDF
            </Button>
            <Button
              variant={activeSection === 'games' ? 'default' : 'ghost'}
              onClick={() => scrollToSection('games')}
              className="gap-2 justify-start"
            >
              <Gamepad2 className="w-4 h-4" />
              शैक्षिक खेल
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

