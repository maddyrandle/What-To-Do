import React from 'react';

const MyList = ({ userList, clearUserList }) => {
  const clearMyList = e => clearUserList();

  const displayPriceKey = price => {
    return (
      price !== 0 && price < 0.5
        ? <p>$</p>
        : price !== 0 && price <= 1 && <p>$$</p>
    )
  }


  const activities = userList.map(activity => {
    let price = displayPriceKey(activity.price)

    return (
      <div className="mylist-card" key={ activity.key }>
        <p>{ activity.type.toUpperCase() }</p>
        <p>{ activity.activity }</p>
        { activity.link && <a href={activity.link} target='_blank' rel="noopener noreferrer">Open Website</a> }
        { price }
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
