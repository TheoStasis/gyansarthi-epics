'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function LLMChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'नमस्ते! मैं आपका AI शिक्षा सहायक हूँ। मैं आपको गणित, विज्ञान, इतिहास, भूगोल और अन्य विषयों में मदद कर सकता हूँ। आप मुझसे कोई भी प्रश्न पूछ सकते हैं।',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const mockResponses = [
    'बहुत अच्छा प्रश्न! इस विषय के बारे में मैं आपको बता सकता हूँ कि यह बहुत महत्वपूर्ण है। आइए इसे विस्तार से समझें।',
    'आपके प्रश्न का उत्तर देते हुए मुझे खुशी हो रही है। यह एक दिलचस्प विषय है जो आपकी पढ़ाई में बहुत उपयोगी होगा।',
    'यह एक बेहतरीन प्रश्न है! मैं आपको इसके बारे में सरल शब्दों में समझाता हूँ ताकि आप आसानी से समझ सकें।',
    'मैं आपकी मदद करने के लिए यहाँ हूँ। आपके प्रश्न का उत्तर है: यह विषय विभिन्न पहलुओं से महत्वपूर्ण है और इसे समझना आपकी शिक्षा के लिए आवश्यक है।',
    'बहुत बढ़िया! आप सही दिशा में सोच रहे हैं। इस विषय को और अच्छे से समझने के लिए, मैं आपको कुछ महत्वपूर्ण बिंदु बताता हूँ।',
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-orange-200 overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-green-600 p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              AI शिक्षा सहायक
            </h3>
            <p className="text-sm text-orange-50">आपके सभी प्रश्नों का उत्तर</p>
          </div>
        </div>
      </div>

      <div className="h-[400px] overflow-y-auto p-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user'
                    ? 'bg-orange-500'
                    : 'bg-gradient-to-br from-green-500 to-green-600'
                }`}
              >
                {message.role === 'user' ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>
              <div
                className={`max-w-[70%] rounded-2xl p-4 ${
                  message.role === 'user'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-green-500 to-green-600">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="max-w-[70%] rounded-2xl p-4 bg-gray-100">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-4 border-t bg-gray-50">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="अपना प्रश्न यहाँ लिखें..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          नोट: यह एक डेमो AI सहायक है। वास्तविक उपयोग के लिए API कनेक्शन की आवश्यकता होगी।
        </p>
      </div>
    </Card>
  );
}