import { useFetchGif } from '../hook/useFetchGif';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);

  return (
    <section className='mt-3'>
      <h2 className='font-bold text-2xl my-2 '>{category}</h2>
      {isLoading && <h3>loading</h3>}
      <div className='grid grid-card'>
        {images.map((img) => (
          <GifItem key={img.id} {...img} category={category} />
        ))}
      </div>
    </section>
  );
};
