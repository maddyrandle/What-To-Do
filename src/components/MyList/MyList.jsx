import React from 'react';
import PropTypes from 'prop-types';

const MyList = ({ userList, clearUserList, removeFromUserList }) => {
  const clearActivity = e => removeFromUserList(e.target.id);
  const clearMyList = e => clearUserList();

  const activities = userList.map(activity => {
    return (
      <div className="mylist-card" key={ activity.key }>
        <div>
          <p className="type">{ activity.type.toUpperCase() }</p>
          <p className="activity-name">{ activity.activity }</p>
          <p className="activity-details">Participants {activity.participants}</p>
        </div>
        <div>
          <button
            id={activity.key}
            className="close-btn"
            onClick={clearActivity}
          >
            X
          </button>
        </div>
      </div>
    )
  })

  return !userList.length
    ? (
        <section className="mylist">
          <p className="empty-userlist-msg">You haven't saved any activities to your list!</p>
        </section>
      )
    : (
        <section className="mylist">
          <div className="flex-mylist">
            {activities}
          </div>

          <button onClick={clearMyList}>Clear All</button>
        </section>
      )
}

export default MyList;

MyList.propTypes = {
  userList: PropTypes.array,
  clearUserList: PropTypes.func,
  removeFromUserList: PropTypes.func
};
