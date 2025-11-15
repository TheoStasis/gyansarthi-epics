'use client';

import { useState } from 'react';
import { FileText, Download, Eye, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface PdfBook {
  id: number;
  title: string;
  subject: string;
  class: string;
  pages: number;
  size: string;
  downloadCount: string;
  publishDate: string;
  publisher: string;
}

const pdfBooks: PdfBook[] = [
  {
    id: 1,
    title: 'NCERT गणित पाठ्यपुस्तक',
    subject: 'गणित',
    class: 'कक्षा 10',
    pages: 324,
    size: '8.5 MB',
    downloadCount: '45.2K',
    publishDate: '2024',
    publisher: 'NCERT',
  },
  {
    id: 2,
    title: 'NCERT विज्ञान पाठ्यपुस्तक',
    subject: 'विज्ञान',
    class: 'कक्षा 10',
    pages: 298,
    size: '12.3 MB',
    downloadCount: '52.8K',
    publishDate: '2024',
    publisher: 'NCERT',
  },
  {
    id: 3,
    title: 'भारत का इतिहास - स्वतंत्रता आंदोलन',
    subject: 'इतिहास',
    class: 'कक्षा 12',
    pages: 256,
    size: '6.8 MB',
    downloadCount: '38.5K',
    publishDate: '2024',
    publisher: 'NCERT',
  },
  {
    id: 4,
    title: 'भूगोल - भारत और समकालीन विश्व',
    subject: 'भूगोल',
    class: 'कक्षा 9',
    pages: 189,
    size: '10.2 MB',
    downloadCount: '41.3K',
    publishDate: '2024',
    publisher: 'NCERT',
  },
  {
    id: 5,
    title: 'हिंदी - क्षितिज भाग 2',
    subject: 'हिंदी',
    class: 'कक्षा 10',
    pages: 178,
    size: '5.4 MB',
    downloadCount: '56.7K',
    publishDate: '2024',
    publisher: 'NCERT',
  },
  {
    id: 6,
    title: 'सामाजिक विज्ञान - लोकतांत्रिक राजनीति',
    subject: 'राजनीति विज्ञान',
    class: 'कक्षा 11',
    pages: 234,
    size: '7.9 MB',
    downloadCount: '33.9K',
    publishDate: '2024',
    publisher: 'NCERT',
  },
  {
    id: 7,
    title: 'रसायन विज्ञान - भाग 1',
    subject: 'विज्ञान',
    class: 'कक्षा 11',
    pages: 312,
    size: '14.6 MB',
    downloadCount: '48.1K',
    publishDate: '2024',
    publisher: 'NCERT',
  },
  {
    id: 8,
    title: 'जीव विज्ञान - मानव शरीर',
    subject: 'विज्ञान',
    class: 'कक्षा 12',
    pages: 289,
    size: '11.7 MB',
    downloadCount: '44.6K',
    publishDate: '2024',
    publisher: 'NCERT',
  },
];

const classes = ['सभी', 'कक्षा 9', 'कक्षा 10', 'कक्षा 11', 'कक्षा 12'];

export function PdfSection() {
  const [selectedClass, setSelectedClass] = useState('सभी');

  const filteredBooks = selectedClass === 'सभी'
    ? pdfBooks
    : pdfBooks.filter(book => book.class === selectedClass);

  const handleDownload = (book: PdfBook) => {
    // Mock download functionality
    alert(`"${book.title}" डाउनलोड शुरू हो रहा है...\n\nनोट: यह डेमो है। वास्तविक कार्यान्वयन में PDF फ़ाइल डाउनलोड होगी।`);
  };

  const handlePreview = (book: PdfBook) => {
    // Mock preview functionality
    alert(`"${book.title}" का पूर्वावलोकन...\n\nनोट: यह डेमो है। वास्तविक कार्यान्वयन में PDF व्यूअर खुलेगा।`);
  };

  return (
    <div>
      {/* Class Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {classes.map((classLevel) => (
          <Button
            key={classLevel}
            variant={selectedClass === classLevel ? 'default' : 'outline'}
            onClick={() => setSelectedClass(classLevel)}
            className={selectedClass === classLevel ? 'bg-gradient-to-r from-blue-500 to-blue-600' : ''}
          >
            {classLevel}
          </Button>
        ))}
      </div>

      {/* PDF Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="overflow-hidden hover:shadow-xl transition-all group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
              <FileText className="w-16 h-16 mb-4 relative z-10" />
              <Badge className="bg-white/20 text-white border-0 relative z-10">
                {book.class}
              </Badge>
            </div>

            <div className="p-4">
              <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-700">
                {book.subject}
              </Badge>

              <h4 className="text-gray-800 mb-3 line-clamp-2 min-h-[3em]">
                {book.title}
              </h4>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center justify-between">
                  <span>प्रकाशक:</span>
                  <span>{book.publisher}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>पृष्ठ:</span>
                  <span>{book.pages}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>आकार:</span>
                  <span>{book.size}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-500 mb-4 pb-4 border-b">
                <Download className="w-4 h-4" />
                <span>{book.downloadCount} downloads</span>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-50"
                  onClick={() => handlePreview(book)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  देखें
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  onClick={() => handleDownload(book)}
                >
                  <Download className="w-4 h-4 mr-1" />
                  डाउनलोड
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-4">
          सभी पुस्तकें NCERT द्वारा प्रकाशित हैं और शैक्षिक उद्देश्यों के लिए निःशुल्क उपलब्ध हैं।
        </p>
        <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
          सभी पुस्तकें देखें
        </Button>
      </div>
    </div>
  );
}