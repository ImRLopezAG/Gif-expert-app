import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = ({}) => {
  const [categories, setCategories] = useState(['Welcome']);
  const [limit, setLimit] = useState(5);
  const onAddCategory = (newCategory) => {
    const validate = categories.some(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    );
    if (!validate) setCategories([newCategory, ...categories]);
    else return;
  };
  const onAddLimit = (limit) => {
    setLimit(limit);
  };
  return (
    <div className='flex flex-col p-3'>
      <h1 className='title'>
        Gif Expert App
      </h1>
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        onAddLimit={(value) => onAddLimit(value)}
      />
      <section>
        {categories.map((category) => (
          <GifGrid key={category} category={category} limit={limit} />
        ))}
      </section>
    </div>
  );
};
