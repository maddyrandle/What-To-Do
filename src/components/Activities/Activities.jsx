import React from 'react';
import Activity from '../Activity/Activity';

const Activities = ({ activity }) => {
  return (
    <section className="activities">
      <p className="card-title">YOU SHOULD</p>

      <Activity
        activity={ activity }
      />

      <button className="save-activity">Save For Later</button>
    </section>
  )

}

export default Activities;
