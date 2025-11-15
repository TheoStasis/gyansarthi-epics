'use client';

import { useState } from 'react';
import { LLMChatbot } from '@/components/LLMChatbot';
import { PdfSection } from '@/components/PdfSection';
import { QuizSection } from '@/components/QuizSection';
import { VideoSection } from '@/components/VideoSection';
import { GamesSection } from '@/components/GamesSection';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookOpen, GraduationCap, FileText, Gamepad2 } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main>
        {/* Hero Section with LLM Chatbot */}
        <section id="home" className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              AI शिक्षा सहायक के साथ सीखें
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              भारत सरकार का शिक्षा पोर्टल - छात्रों और शिक्षकों के लिए डिजिटल शिक्षा का माध्यम। 
              AI सहायक से प्रश्न पूछें, प्रश्नोत्तरी खेलें, वीडियो देखें और अधिक जानें।
            </p>
          </div>
          <LLMChatbot />
        </section>

        {/* Quiz Section */}
        <section id="quiz" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-orange-600 mb-3">इंटरएक्टिव प्रश्नोत्तरी</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                अपने ज्ञान का परीक्षण करें और मजेदार प्रश्नोत्तरी के माध्यम से सीखें
              </p>
            </div>
            <QuizSection />
          </div>
        </section>

        {/* Video Section */}
        <section id="videos" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-600 mb-3">वीडियो व्याख्यान</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                विभिन्न विषयों पर शिक्षकों द्वारा तैयार किए गए वीडियो व्याख्यान
              </p>
            </div>
            <VideoSection />
          </div>
        </section>

        {/* PDF Section */}
        <section id="pdfs" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-blue-600 mb-3">डिजिटल पुस्तकें</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                NCERT और अन्य शैक्षिक पुस्तकों की PDF डाउनलोड करें
              </p>
            </div>
            <PdfSection />
          </div>
        </section>

        {/* Games Section */}
        <section id="games" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Gamepad2 className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-purple-600 mb-3">शैक्षिक खेल</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                खेल-खेल में सीखें - मजेदार और शैक्षिक खेलों का आनंद लें
              </p>
            </div>
            <GamesSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
