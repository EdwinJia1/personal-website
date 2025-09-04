'use client';

import Image from 'next/image';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar = ({ size = 'md', className = '' }: AvatarProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto ${className}`}>
      <div className="w-full h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 p-1">
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
          <Image
            src="/profile.jpg"
            alt="Evan Lin"
            width={200}
            height={200}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;