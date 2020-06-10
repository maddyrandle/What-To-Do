import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { getActivityData } from './apiCalls';
jest.mock('./apiCalls.js');

describe('apiCall', () => {
  it('When the App loads, we should see an activity idea', async () => {
    const mockActivityData = {
      accessibility: 0.1,
      activity: "Read a formal research paper on an interesting subject",
      key: "3352474",
      link: "",
      participants: 1,
      price: 0,
      type: "education"
    };

    getActivityData.mockResolvedValueOnce(mockActivityData);

    const { getByText } = render(<App />);
    const activityContainer = screen.getByTestId('activity-card');
    const activity = await waitFor( () => getByText('Read a formal research paper on an interesting subject') );

    expect(activityContainer).toBeInTheDocument();
    expect(activity).toBeInTheDocument();
  });
});
