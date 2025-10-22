import Button from '../ui/Button';
import ProgressBar from './ProgressBar';

export default function CourseCard({ 
  title, 
  description, 
  instructor, 
  duration, 
  image, 
  progress, 
  enrolled = false,
  price 
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-4xl">📚</span>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>👨‍🏫 {instructor}</span>
          <span>⏱️ {duration}</span>
        </div>
        
        {enrolled && progress !== undefined && (
          <div className="mb-4">
            <ProgressBar progress={progress} label="Progress" />
          </div>
        )}
        
        <div className="flex justify-between items-center">
          {price && !enrolled && (
            <span className="text-2xl font-bold text-blue-600">${price}</span>
          )}
          
          <Button 
            className={enrolled ? "ml-auto" : "w-full"}
            variant={enrolled ? "secondary" : "primary"}
          >
            {enrolled ? "Continue Learning" : "Enroll Now"}
          </Button>
        </div>
      </div>
    </div>
  );
}