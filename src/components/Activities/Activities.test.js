import React from 'react';
import Activities from './Activities';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Activities', () => {
  let activityComponent;

  beforeEach(() => {
    activityComponent = render(
      <Activities
        activity={
          {
            activity: "Paint the first thing you see",
            participants: 1,
            key: "1162360"
          }
        }
        updateUserList={jest.fn()}
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
  });
});
