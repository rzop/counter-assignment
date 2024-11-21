import { render, screen,fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterhead = screen.getByText(/Counter/i); //heavily inspired App.test.js
  expect(counterhead).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const dispcount = screen.getByText('0');
  expect(dispcount).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  const increm = screen.getByRole('button', { name: '+' }); //heavily referenced an example of the React Testing Library link provided
  fireEvent.click(increm);
  const neocount = await screen.findByText('1'); 
  expect(neocount).toBeInTheDocument();
});

test('clicking - decrements the count', async () => {
  const decre = screen.getByRole('button', { name: '-' }); //heavily referenced an example of the React Testing Library link provided
  fireEvent.click(decre);
  const neocount2 = await screen.findByText('-1');
  expect(neocount2).toBeInTheDocument();
});

