import React from 'react';

const MyList = ({ userList, clearUserList }) => {
  const clearMyList = e => clearUserList();

  const displayPriceKey = price =>
    price !== 0 && price < 0.5
      ? <p>$</p>
      : price !== 0 && price <= 1 && <p>$$</p>;

  const activities = userList.map(activity => {
    return (
      <div className="mylist-card" key={ activity.key }>
        <p className="type">{ activity.type.toUpperCase() }</p>
        <p className="activity-name">{ activity.activity }</p>
        <div className="activity-details">
          <p>Participants {activity.participants}</p>
          {displayPriceKey(activity.price)}
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
          { activities }
          <button className="clear-all-btn" onClick={clearMyList}>
            Clear All
          </button>
        </section>
      )

}

export default MyList;

// { activity.link && <a href={activity.link} target='_blank' rel="noopener noreferrer">Open Website</a> }
