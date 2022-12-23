import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = ({}) => {
  const [categories, setCategories] = useState(['Welcome']);
  const onAddCategory = (newCategory) => {
    const validate = categories.some(
      (category) => category.toLowerCase() !== newCategory.toLowerCase()
    );
    if (validate) setCategories([newCategory, ...categories]);
    else return;
  };
  return (
    <div className='flex flex-col p-5'>
      <h1 className='flex justify-center text-black text-3xl font-bold'>
        Gif Expert App
      </h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <section>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </section>
    </div>
  );
};
