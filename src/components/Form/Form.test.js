import React from 'react';
import Form from './Form';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('should render the correct form inputs', () => {
    const { getByLabelText, getByDisplayValue } = render(<Form />)

    const label = getByLabelText('Type');
    const education = screen.getByDisplayValue('Education');

  })

})
