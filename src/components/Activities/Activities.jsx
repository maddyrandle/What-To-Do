import React from 'react';
import PropTypes from 'prop-types';

const Activities = ({ activity, updateUserList }) => {
  const saveToUserList = e => updateUserList();

  return (
    <section data-testid="activity-card" className="activities-container">
      <section className="activity-card">
        <p className="you-should">YOU SHOULD</p>
        <div className="description">
          { activity.activity || activity.error }
        </div>
      </section>

      <section className="flex">
        <button onClick={saveToUserList}>
          Save For Later
        </button>
      </section>
    </section>
  )
}

export default Activities;

Activities.propTypes = {
  activity: PropTypes.object,
  updateUserList: PropTypes.func
};
