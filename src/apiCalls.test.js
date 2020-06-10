import React from 'react';
import App from './components/App/App';
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

import { getActivityData } from './apiCalls';
jest.mock('./apiCalls.js');

describe('apiCalls', () => {


  it('when the App loads, we should see an activity idea', async () => {
    const mockGetActivityData = {
      accessibility: 0.1,
      activity: "Read a formal research paper on an interesting subject",
      key: "3352474",
      link: "",
      participants: 1,
      price: 0,
      type: "education"
    };

    // getActivityData.mockResolvedValueOnce(mockGetActivityData);
    //
    // const { getByText } = render(<App />);
    //
    // // const idea = await waitFor(() => getByText("Read a formal research paper on an interesting subject"));
    // //     expect(idea).toBeInTheDocument();
    //
    // const activityContainer = screen.getByTestId('activity-card');
    //
    // // const activity = await waitFor(getByText('Read a formal research paper on an interesting subject'));
    // // expect(activity).toBeInTheDocument();
    // expect(activityContainer).toBeInTheDocument();

  });
});
