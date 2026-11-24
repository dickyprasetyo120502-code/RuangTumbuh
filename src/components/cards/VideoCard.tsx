import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock } from 'lucide-react';
import { VideoItem } from '../../types';

interface VideoCardProps {
  video: VideoItem;
  className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, className = "" }) => {
  return (
    <Link
      to={`/video?v=${video.slug}`}
      className={`group bg-white rounded-3xl border border-[#E8E2D5] overflow-hidden hover:border-forest-500/50 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Video Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden bg-forest-50">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-forest-700/85 backdrop-blur-sm text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-forest-700 transition-all shadow-md">
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-medium text-white flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{video.duration}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="mb-2">
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-forest-50 text-forest-700 border border-forest-100">
              {video.category}
            </span>
          </div>
          <h4 className="font-heading font-bold text-sm sm:text-base text-forest-900 group-hover:text-forest-700 transition-colors line-clamp-2 leading-snug">
            {video.title}
          </h4>
          <p className="text-xs text-forest-700/70 mt-1.5 line-clamp-2">
            {video.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
