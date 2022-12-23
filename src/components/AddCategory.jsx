import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value <= 1) return;
    onNewCategory(value);
    setInputValue('');
  };
  return (
    <section className=' mt-2 '>
      <form
        className='flex justify-center items-center'
        onSubmit={(event) => onSubmit(event)}
      >
        <input
          className='search-input' 
          type='text'
          placeholder=''
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        />
      </form>
    </section>
  );
};
