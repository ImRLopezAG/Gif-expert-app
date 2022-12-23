import { useFetchGif } from '../hook/useFetchGif';
import { GifItem } from './GifItem';

export const GifGrid = ({ category, limit }) => {
  const { images, isLoading } = useFetchGif(category, limit);

  return (
    <section className='mt-3'>
      <h2 className='font-bold text-2xl my-2 '>{category}</h2>
      {isLoading && (
        <h3>
          loading <i className='bi bi-cloud-download'></i>
        </h3>
      )}
      {images.length === 0 && (
        <h3>
          not found <i className='bi bi-emoji-frown-fill'></i>
        </h3>
      )}
      <div className='grid grid-card'>
        {images.map((img) => (
          <GifItem key={img.id} {...img} category={category} />
        ))}
      </div>
    </section>
  );
};
