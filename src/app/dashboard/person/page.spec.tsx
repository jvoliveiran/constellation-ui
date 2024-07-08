import { screen } from '@testing-library/react';
import renderWithProviders from '../../../utils/test-utils';
import Person from './page'

describe('Person page', () => {
  it('should show test data', async () => {
    renderWithProviders(<Person />);
    const text = await screen.findByText('person 1')
    expect(text).toBeInTheDocument();
  })
})