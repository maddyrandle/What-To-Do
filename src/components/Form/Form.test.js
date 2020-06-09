import React from 'react';
import Form from './Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('should render the correct form inputs', () => {
    const { getByLabelText, getByText, getByDisplayValue } = render(<Form />)

    const typeInput = getByLabelText('Type');
    const initialTypeValue = getByDisplayValue('Education');
    const maxBudgetInput = getByLabelText('Max. Budget');
    const anotherIdeaBtn = getByText('Give me another idea');
  })


})
