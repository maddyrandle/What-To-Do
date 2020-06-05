import React from 'react';
import Activities from '../Activities/Activities';
import Form from '../Form/Form';

const Card = ({ activity }) => {
  return (
    <section className="card">
      <Activities
        activity={ activity }
      />
      <Form />
    </section>
  )
}

export default Card;
