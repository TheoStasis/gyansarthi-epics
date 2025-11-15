'use client';

import { useState } from 'react';
import { Gamepad2, Play, Trophy, Star, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface Game {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  players: string;
  rating: number;
  icon: string;
  color: string;
}

const games: Game[] = [
  {
    id: 1,
    title: 'गणित की पहेली',
    description: 'गणितीय समस्याओं को हल करके अंक अर्जित करें',
    category: 'गणित',
    difficulty: 'मध्यम',
    players: '15.2K',
    rating: 4.5,
    icon: '🔢',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 2,
    title: 'विज्ञान प्रयोगशाला',
    description: 'आभासी प्रयोग करें और विज्ञान सीखें',
    category: 'विज्ञान',
    difficulty: 'कठिन',
    players: '12.8K',
    rating: 4.7,
    icon: '🔬',
    color: 'from-green-400 to-teal-500',
  },
  {
    id: 3,
    title: 'इतिहास यात्रा',
    description: 'भारतीय इतिहास की यात्रा पर जाएं',
    category: 'इतिहास',
    difficulty: 'आसान',
    players: '18.5K',
    rating: 4.3,
    icon: '🏛️',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 4,
    title: 'भूगोल खोज',
    description: 'विश्व के देशों और राजधानियों को खोजें',
    category: 'भूगोल',
    difficulty: 'मध्यम',
    players: '14.3K',
    rating: 4.4,
    icon: '🌍',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 5,
    title: 'शब्दावली बिल्डर',
    description: 'हिंदी और अंग्रेजी शब्दावली बढ़ाएं',
    category: 'भाषा',
    difficulty: 'आसान',
    players: '22.1K',
    rating: 4.6,
    icon: '📚',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 6,
    title: 'तर्क पहेली',
    description: 'तार्किक सोच और समस्या समाधान का अभ्यास करें',
    category: 'तर्कशक्ति',
    difficulty: 'कठिन',
    players: '9.7K',
    rating: 4.8,
    icon: '🧩',
    color: 'from-red-400 to-rose-500',
  },
];

export function GamesSection() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const handlePlayGame = (game: Game) => {
    setSelectedGame(game.id);
    alert(`"${game.title}" खेल शुरू हो रहा है...\n\n${game.description}\n\nनोट: यह डेमो है। वास्तविक खेल यहाँ लोड होगा।`);
    setTimeout(() => setSelectedGame(null), 2000);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card
            key={game.id}
            className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
            onClick={() => handlePlayGame(game)}
          >
            <div className={`bg-gradient-to-br ${game.color} p-6 text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {game.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-white/20 text-white border-0">
                    {game.category}
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0">
                    {game.difficulty}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h4 className="text-gray-800 mb-2">{game.title}</h4>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {game.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm">{game.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{game.players}</span>
                </div>
              </div>

              <Button
                className={`w-full bg-gradient-to-r ${game.color} hover:opacity-90`}
                disabled={selectedGame === game.id}
              >
                {selectedGame === game.id ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    लोड हो रहा है...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" fill="currentColor" />
                    खेलें
                  </>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Featured Game Section */}
      <Card className="mt-12 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
            
            <div className="relative z-10">
              <Trophy className="w-16 h-16 mb-4" />
              <h3 className="mb-3">साप्ताहिक चुनौती</h3>
              <p className="text-purple-100 mb-6">
                प्रतिदिन नए प्रश्न हल करें और लीडरबोर्ड में शीर्ष पर आएं।
                पुरस्कार और प्रमाण पत्र जीतें!
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl">🏆</div>
                  <p className="text-sm text-purple-200 mt-1">पुरस्कार</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl">📜</div>
                  <p className="text-sm text-purple-200 mt-1">प्रमाण पत्र</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl">⭐</div>
                  <p className="text-sm text-purple-200 mt-1">बैज</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-gray-800 mb-4">इस सप्ताह की चुनौती</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span>1</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm">प्रतिदिन 10 प्रश्न हल करें</p>
                </div>
                <Badge className="bg-green-100 text-green-700">पूर्ण</Badge>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span>2</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm">5 दिन लगातार अभ्यास करें</p>
                </div>
                <Badge className="bg-blue-100 text-blue-700">3/5</Badge>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span>3</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm">लीडरबोर्ड में टॉप 100 में आएं</p>
                </div>
                <Badge className="bg-gray-200 text-gray-700">प्रगति में</Badge>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
              <Trophy className="w-4 h-4 mr-2" />
              चुनौती शुरू करें
            </Button>
          </div>
        </div>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          खेलते समय सीखें - सभी खेल शैक्षिक विशेषज्ञों द्वारा डिज़ाइन किए गए हैं
        </p>
      </div>
    </div>
  );
}
