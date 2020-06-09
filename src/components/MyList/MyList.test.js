import React from 'react';
import MyList from './MyList';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MyList', () => {
  let mylistComponent;

  beforeEach(() => {
    mylistComponent = render(
      <MyList
        userList={[
          {
            accessibility: 0,
            activity: 'Watch a Khan Academy lecture on a subject of your choosing',
            key: '7154873',
            link: '',
            participants: 1,
            price: 0,
            type: 'education'
          }
        ]}
        clearUserList={jest.fn()}
        removeFromUserList={jest.fn()}
      />
    )
  });

  afterEach( () => cleanup );

  it('Should indicate to a user when they have no saved activities', () => {
    const { getByText } = render(<MyList userList={ [] } />);
    const message = getByText('You haven\'t saved any activities to your list!');

    expect(message).toBeInTheDocument();
  });

  it('Should show activities the user has saved for later', () => {
    const { getByText } = mylistComponent;
    const activity = getByText('Watch a Khan Academy lecture on a subject of your choosing');

    expect(activity).toBeInTheDocument();
  });

  it('Should have a clear all button', () => {
    const { getByText } = mylistComponent;
    const button = getByText('Clear All');

    expect(button).toBeInTheDocument();
  });

  it('Should invoke the clearUserList method', () => {
    const { getByText } = mylistComponent;
    const button = getByText('Clear All');

    fireEvent.click(button);
  });

  it('Should invoke the removeFromUserList method', () => {
    const { getByText } = mylistComponent;
    const button = getByText('X');

    fireEvent.click(button);
  });
});
