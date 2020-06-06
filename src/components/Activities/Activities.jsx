import React from 'react';

const Activities = ({ activity, userList, updateUserList }) => {
  const saveToUserList = (e) => updateUserList();

  return (
    <section className="activities">
      <p className="card-title">YOU SHOULD</p>
      <div className="activity-card">
        <p className="activity-description">{activity.activity}</p>
      </div>
      <button className="save-activity-btn" onClick={saveToUserList}>
        Save For Later
      </button>
    </section>
  )
}

export default Activities;
