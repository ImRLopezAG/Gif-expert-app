import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ onNewCategory, onAddLimit }) => {
  const [inputValue, setInputValue] = useState('');
  const [limitState, setLimit] = useState(5);
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onLimitChange = ({ target }) => {
    setLimit(parseInt(target.value));
  };

  const onSubmit = (event) => {    
    event.preventDefault();
    const value = inputValue.trim();
    const limitValue = limitState;
    if (value <= 1) return;
    onNewCategory(value);
    onAddLimit(limitValue);
    setInputValue('');
    setLimit(5);
  };
  return (
    <section className=' mt-2 '>
      <form
        className='flex justify-center items-center'
        onSubmit={(event) => onSubmit(event)}
        aria-label='form'
      >
        <input
          className='search-input'
          type='text'
          placeholder='Search Your gif :)'
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        />
        <select
          className='number-gif'
          onChange={(event) => {
            onLimitChange(event);
          }}
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
        <button className='search-button' type='submit'>
          <i className='bi bi-search'></i>
        </button>
      </form>
    </section>
  );
};

AddCategory.PropTypes = {
  onAddLimit: PropTypes.func.isRequired,
  onNewCategory: PropTypes.func.isRequired,
};
