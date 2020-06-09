import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
// import { getActivityData } from '../../apiCalls';
// jest.mock('../../apiCalls.js');


describe('App', () => {

  it('renders without crashing', () => {
    const main = document.createElement('main');
    ReactDOM.render(<App />, main);
    ReactDOM.unmountComponentAtNode(main);
  });

  it('should render the navigation', () => {
    const { getByText } = render(<App />);
    expect(getByText("Activities")).toBeInTheDocument();
    expect(getByText("My List")).toBeInTheDocument();
  })

  it("Should render the details form", () => {
    const { getByLabelText, getByText } = render(<App />);
    const selectElement = screen.getByDisplayValue('Education')
    expect(getByLabelText("Type")).toBeInTheDocument();
    expect(getByLabelText("Max. Budget")).toBeInTheDocument();
    expect(getByText("Give me another idea")).toBeInTheDocument();
  });

  it('should render the activities section', () => {
    const { getByText } = render(<App />);
    expect(getByText("YOU SHOULD")).toBeInTheDocument();
    expect(getByText("Save For Later")).toBeInTheDocument();
  })

  it('Should be able to view activity card', async () => {
    render(<App />);
    const element = screen.getByTestId('card-element')
  });

  // it('when the App loads, we should see an activity idea', async () => {
  //   getActivityData.mockResolvedValueOnce({
  //     accessibility: 0.1,
  //     activity: "Read a formal research paper on an interesting subject",
  //     key: "3352474",
  //     link: "",
  //     participants: 1,
  //     price: 0,
  //     type: "education"
  //   });
  //
  //   const { getByText } = render(<App />);
  //
  //   const activityContainer = screen.getByTestId('activity-card');
  //
  //   // const activity = await waitFor(() => getByText('Read a formal research paper on an interesting subject'));
  //
  //   expect(activityContainer).toBeInTheDocument();
  //   // expect(activity).toBeInTheDocument();
  // });


})
