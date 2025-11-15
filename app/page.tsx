'use client';

import { LLMChatbot } from '@/components/LLMChatbot';
import { PdfSection } from '@/components/PdfSection';
import { QuizSection } from '@/components/QuizSection';
import { VideoSection } from '@/components/VideoSection';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <LLMChatbot />
      <PdfSection />
      <QuizSection />
      <VideoSection />
      </main>
  );
}
