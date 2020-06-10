import React from 'react';
import MyList from './MyList';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MyList', () => {
  let mylistComponent, mockClearUserList, mockRemoveFromUserList;

  beforeEach(() => {
    mockClearUserList = jest.fn();
    mockRemoveFromUserList = jest.fn();
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
        clearUserList={mockClearUserList}
        removeFromUserList={mockRemoveFromUserList}
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

  it('Should send the correct data up to app via clearUserList', () => {
    const { getByText } = mylistComponent;
    const button = getByText('Clear All');

    fireEvent.click(button);

    expect(mockClearUserList).toHaveBeenCalledTimes(1);
  });

  it('Should send the correct data up to app via removeFromUserList', () => {
    const { getByText } = mylistComponent;
    const button = getByText('X');

    fireEvent.click(button);

    expect(mockRemoveFromUserList).toHaveBeenCalledTimes(1);
    expect(mockRemoveFromUserList).toHaveBeenCalledWith('7154873');
  });
});
