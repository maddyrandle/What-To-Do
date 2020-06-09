import React from 'react';
import Form from './Form';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form default values', () => {
  let formComponent;

  beforeEach(() => {
    formComponent = render(<Form />)
  });

  afterEach( () => cleanup );

  it('Should have a type field with unique activity options', () => {
    const { getByLabelText, getByText, getByDisplayValue } = formComponent;
    const label = getByLabelText('Type');
    const defaultValue = getByDisplayValue('Education');
    const recreational = getByText('Recreational');
    const social = getByText('Social');
    const diy = getByText('DIY');
    const charity = getByText('Charity');
    const cooking = getByText('Cooking');
    const music = getByText('Music');
    const busywork = getByText('Busywork');

    expect(label).toBeInTheDocument();
    expect(defaultValue).toBeInTheDocument();
    expect(recreational).toBeInTheDocument();
    expect(social).toBeInTheDocument();
    expect(diy).toBeInTheDocument();
    expect(charity).toBeInTheDocument();
    expect(cooking).toBeInTheDocument();
    expect(music).toBeInTheDocument();
    expect(busywork).toBeInTheDocument();
  });

  it('Should have a max budget field', () => {
    const { getByLabelText, getByText } = formComponent;
    const label = getByLabelText('Max. Budget');
    const minBudget = getByText('Cheap');
    const maxBudget = getByText('Expensive');

    expect(label).toBeInTheDocument();
    expect(minBudget).toBeInTheDocument();
    expect(maxBudget).toBeInTheDocument();
  });

  it('Should have a button to get another idea', () => {
    const { getByText } = formComponent;
    const button = getByText('Give me another idea');

    expect(button).toBeInTheDocument();
  });
});

describe('Form event testing', () => {
  let formComponent;

  beforeEach(() => {
    formComponent = render(
      <Form getNewActivity={jest.fn()} />
    )
  });

  afterEach( () => cleanup );

  it('Should update activity type on user selection', () => {
    const { getByLabelText, getByDisplayValue  } = formComponent;
    const label = getByLabelText('Type');
    const defaultValue = getByDisplayValue('Education');

    fireEvent.change(label, { target: { value: 'recreational' } });

    expect(defaultValue.value).toBe('recreational');
  });

  it('Should update max budget on user input', () => {
    const { getByLabelText } = formComponent;
    const label = getByLabelText('Max. Budget');

    expect(label.value).toBe('0.5');
    fireEvent.change(label, { target: { value: 0.8 } });
    expect(label.value).toBe('0.8');
  });

  it('Should invoke getNewActivity method', () => {
    const { getByText } = formComponent;
    const button = getByText('Give me another idea');

    fireEvent.click(button);
  });
});
