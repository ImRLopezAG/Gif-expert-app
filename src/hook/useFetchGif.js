import { useEffect, useState } from 'react';
import { getGif } from '../api/getGif';

export const useFetchGif = (category,limit) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGif(category,limit);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return { images, isLoading };
};
