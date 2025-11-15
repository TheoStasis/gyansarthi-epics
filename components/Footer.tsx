import { GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold">भारत शिक्षा पोर्टल</h3>
          </div>
          <p className="text-orange-50 mb-4">
            शिक्षा मंत्रालय, भारत सरकार
          </p>
          <p className="text-sm text-orange-100">
            © 2024 भारत सरकार। सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
}

