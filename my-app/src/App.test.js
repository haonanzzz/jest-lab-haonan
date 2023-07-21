import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

test('Class: checking checkbox function', () => {
  render(<App />);

  //event: click on the checkbox
  userEvent.click(screen.getByTestId('checkbox'));
 // checking if checkbox is not checked.
  expect(screen.getByTestId('checkbox')).toBeInChecked();
});

test('Individual: checking text information', () => {
  render(<App />);

  screen.debug();

  expect(screen.getByText('This checkbox is now set to false')).toBeInTheDocument();
});



