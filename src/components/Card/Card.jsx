import React from 'react';
import Activities from '../Activities/Activities';
import Form from '../Form/Form';

const Card = ({ activity, getNewActivity, updateActivityType }) => {
  return (
    <section className="card">
      <Activities activity={ activity.activity } />
      <Form
        type={ activity.type }
        getNewActivity={ getNewActivity }
        updateActivityType={ updateActivityType }
      />
    </section>
  )
}

export default Card;
