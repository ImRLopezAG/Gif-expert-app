export const GifItem = ({ title, url, category }) => {
  const name = title.length >= 1 ? title : category;
  return (
    <>
      <div className='card'>
        <div className='card-image'>
          <img src={url} alt={name} loading='lazy' />
        </div>
        <p className='card-title'>{name}</p>
      </div>
    </>
  );
};
