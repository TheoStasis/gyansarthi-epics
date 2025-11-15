'use client';

import { useState } from 'react';
import { Play, Clock, Eye, BookOpen } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Video {
  id: number;
  title: string;
  subject: string;
  duration: string;
  views: string;
  thumbnail: string;
  teacher: string;
  class: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'बीजगणित का परिचय - समीकरण और चर',
    subject: 'गणित',
    duration: '15:30',
    views: '12.5K',
    thumbnail: 'https://images.unsplash.com/photo-1587691592099-24045742c181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzYzMDQyNzkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    teacher: 'प्रो. राजेश कुमार',
    class: 'कक्षा 8',
  },
  {
    id: 2,
    title: 'प्रकाश संश्लेषण की प्रक्रिया',
    subject: 'विज्ञान',
    duration: '20:15',
    views: '18.2K',
    thumbnail: 'https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjI5NTYyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    teacher: 'डॉ. प्रिया शर्मा',
    class: 'कक्षा 10',
  },
  {
    id: 3,
    title: 'भारतीय स्वतंत्रता संग्राम - 1857 से 1947',
    subject: 'इतिहास',
    duration: '25:45',
    views: '22.8K',
    thumbnail: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHN0dWRlbnRzJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzA0Mjc5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    teacher: 'प्रो. अनिल वर्मा',
    class: 'कक्षा 12',
  },
  {
    id: 4,
    title: 'ज्यामिति - त्रिभुज के गुण और प्रमेय',
    subject: 'गणित',
    duration: '18:20',
    views: '15.6K',
    thumbnail: 'https://images.unsplash.com/photo-1580699228119-7be487b3137f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHN0dWR5fGVufDF8fHx8MTc2MzAwNTAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    teacher: 'श्रीमती मीना पटेल',
    class: 'कक्षा 9',
  },
  {
    id: 5,
    title: 'भारत की नदियाँ और जल संसाधन',
    subject: 'भूगोल',
    duration: '22:10',
    views: '20.3K',
    thumbnail: 'https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjI5NTYyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    teacher: 'डॉ. संजीव गुप्ता',
    class: 'कक्षा 11',
  },
  {
    id: 6,
    title: 'रासायनिक अभिक्रियाएँ और समीकरण',
    subject: 'विज्ञान',
    duration: '19:30',
    views: '17.9K',
    thumbnail: 'https://images.unsplash.com/photo-1572847748080-bac263fae977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHN0dWRlbnRzJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzA0Mjc5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    teacher: 'प्रो. विकास सिंह',
    class: 'कक्षा 10',
  },
];

const subjects = ['सभी', 'गणित', 'विज्ञान', 'इतिहास', 'भूगोल'];

export function VideoSection() {
  const [selectedSubject, setSelectedSubject] = useState('सभी');

  const filteredVideos = selectedSubject === 'सभी' 
    ? videos 
    : videos.filter(v => v.subject === selectedSubject);

  return (
    <div>
      {/* Subject Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {subjects.map((subject) => (
          <Button
            key={subject}
            variant={selectedSubject === subject ? 'default' : 'outline'}
            onClick={() => setSelectedSubject(subject)}
            className={selectedSubject === subject ? 'bg-gradient-to-r from-green-500 to-green-600' : ''}
          >
            {subject}
          </Button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="relative aspect-video overflow-hidden bg-gray-200">
              <ImageWithFallback
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 text-green-600 ml-1" fill="currentColor" />
                </div>
              </div>
              <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                {video.duration}
              </Badge>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {video.subject}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {video.class}
                </Badge>
              </div>

              <h4 className="text-gray-800 mb-3 line-clamp-2 min-h-[3em]">
                {video.title}
              </h4>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{video.teacher}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{video.duration}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-4">
          नोट: यह डेमो वीडियो हैं। वास्तविक शैक्षिक सामग्री के लिए वीडियो एम्बेड करने की आवश्यकता होगी।
        </p>
        <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
          और वीडियो देखें
        </Button>
      </div>
    </div>
  );
}