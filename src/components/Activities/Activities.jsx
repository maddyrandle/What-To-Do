import React from 'react';

const Activities = ({ activity, updateUserList }) => {
  const saveToUserList = (e) => updateUserList();

  return (
    <section className="activities-container">

      <section className="flex">
        <p className="you-should">YOU SHOULD</p>
        <div className="activity-card">
          <p className="description">{ activity.activity || activity.error }</p>
        </div>
      </section>

      <section className="flex">
        <button onClick={saveToUserList}>Save For Later</button>
      </section>

    </section>
  )
}

export default Activities;
