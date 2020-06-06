import React from 'react';

const MyList = ({ myList, userList, clearUserList }) => {

  const clearMyList = (e) => {
    clearUserList()
  }

  const activities = userList.map(activity => {
    return (
      <div className="mylist-card">
        <p>{ activity.activity }</p>
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
