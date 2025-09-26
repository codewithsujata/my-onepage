'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [dogImages, setDogImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // Add loading state
  const [error, setError] = useState<string | null>(null);  // Add error state

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random/19');
        if (!res.ok) {
          throw new Error('Failed to fetch dog images');
        }
        const data = await res.json();
        setDogImages(data.message);
        setLoading(false);
      } catch (error) {
        setError('Failed to load dog images.');
        setLoading(false);
      }
    };

    fetchDogImages();
  }, []);

  // if (loading) {
  //   return <div className="text-center text-lg text-gray-600">Loading...</div>;
  // }

  if (error) {
    return <div className="text-center text-lg text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-orange-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          Dog Gallery
        </motion.h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dogImages.map((imageUrl, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="w-full h-full relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={imageUrl}
                  alt={`Dog ${index + 1}`}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
