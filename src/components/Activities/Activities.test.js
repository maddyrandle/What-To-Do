import React from 'react';
import Activities from './Activities';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Activities', () => {
  let activityComponent, mockUpdateUserList;

  beforeEach(() => {
    mockUpdateUserList = jest.fn();
    activityComponent = render(
      <Activities
        activity={
          {
            activity: "Paint the first thing you see",
            participants: 1,
            key: "1162360"
          }
        }
        updateUserList={mockUpdateUserList}
      />
    )
  });

  afterEach( () => cleanup );

  it('Should indicate that a user should do an activity', () => {
    const { getByText } = activityComponent;
    const message = getByText('YOU SHOULD');

    expect(message).toBeInTheDocument();
  });

  it('Should have the correct activity description', () => {
    const { getByText } = activityComponent;
    const activity = getByText('Paint the first thing you see');

    expect(activity).toBeInTheDocument();
  });

  it('Should have the correct participants associated with an activity', () => {
    const { getByText } = activityComponent;
    const participants = getByText('Participants 1');

    expect(participants).toBeInTheDocument();
  });

  it('Should have a save button', () => {
    const { getByText } = activityComponent;
    const button = getByText('Save For Later');

    expect(button).toBeInTheDocument();
  });

  it('Should invoke the updateUserList method', () => {
    const { getByText } = activityComponent;
    const button = getByText('Save For Later');

    fireEvent.click(button);

    expect(mockUpdateUserList).toHaveBeenCalledTimes(1);
    expect(mockUpdateUserList).toHaveBeenCalledWith({"activity": "Paint the first thing you see", "key": "1162360", "participants": 1});
  });
});
