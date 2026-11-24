import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface TopicCardProps {
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  illustration?: React.ReactNode;
  imageUrl?: string;
  categoryName: string;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  title,
  description,
  bgColor,
  borderColor,
  illustration,
  imageUrl,
  categoryName,
}) => {
  return (
    <Link
      to={`/jelajahi?kategori=${encodeURIComponent(categoryName)}`}
      className={`group rounded-3xl p-4 sm:p-5 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 flex flex-col justify-between border ${borderColor}`}
      style={{ backgroundColor: bgColor }}
    >
      <div>
        {/* Top Image or Illustration Area */}
        <div className="h-28 sm:h-32 rounded-2xl overflow-hidden mb-4 transition-transform group-hover:scale-105 duration-300 bg-white/60 flex items-center justify-center border border-black/5 shadow-xs">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            illustration
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-base sm:text-lg text-forest-900 mb-1.5">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-forest-700/80 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Action Icon */}
      <div className="mt-4 flex items-center justify-end">
        <div className="w-8 h-8 rounded-full bg-white/90 border border-forest-200/60 flex items-center justify-center text-forest-700 group-hover:bg-forest-700 group-hover:text-white transition-all shadow-sm">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};
