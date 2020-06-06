import React from 'react';
import Activities from '../Activities/Activities';
import Form from '../Form/Form';

const Card = ({ activity, getNewActivity, updateUserList }) => {

  return (
    <section className="card">
      <Activities
        activity={ activity }
        updateUserList={ updateUserList }
      />
      <Form
        getNewActivity={ getNewActivity }
      />
    </section>
  )
}

export default Card;
