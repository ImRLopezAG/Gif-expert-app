/** @jest-environment jsdom */
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../../src/components/AddCategory';

describe('Test AddCategory', () => {
  test('should change the value of the text box and a limit', () => {
    render(<AddCategory onNewCategory={() => {}} onAddLimit={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Venom' } });

    expect(input.value).toBe('Venom');
  });
  test('should change the value of the combobox', () => {
    render(<AddCategory onNewCategory={() => {}} onAddLimit={() => {}} />);
    const select = screen.getByRole('combobox');

    fireEvent.select(select, { target: { value: 10 } });

    expect(select.value).toBe('10');
  });
  test('should call onSubmit if the input has an value', () => {
    const inputValue = 'Dragon Ball';

    render(<AddCategory onNewCategory={() => {}} onAddLimit={() => {}} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
  });
});
