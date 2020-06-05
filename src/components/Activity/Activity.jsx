import React from 'react';

const Activity = ({ activity }) => {

  return (
    <div className="activity-card">
      <p className="description">{activity.activity}</p>
    </div>
  )
}

export default Activity;
