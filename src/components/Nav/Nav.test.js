import React from 'react';
import Nav from './Nav';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom';


describe('Nav default values', () => {
  let navComponent;

  beforeEach(() => {
    navComponent = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    )
  });

  afterEach( () => cleanup );

  it('Should have a link to default Activities view', () => {
    const { getByText } = navComponent;
    const activities = getByText('Activities');

    expect(activities).toBeInTheDocument();
  });

  it('Should have a link to My List view', () => {
    const { getByText } = navComponent;
    const myList = getByText('My List');

    expect(myList).toBeInTheDocument();
  });
});
