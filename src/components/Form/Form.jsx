import React from 'react';

const Form = ({ type, getNewActivity, updateActivityType }) => {

  const updateFormState = (e) => {
    updateActivityType(e.target.value)
  }

  const getAnotherIdea = (e) => {
    getNewActivity();
  }

  return (
    <section className="form">
    <label className="label">Type</label>

    <select className="type" name="type" onChange={updateFormState}>
      <option value="education">Education</option>
      <option value="recreational">Recreational</option>
      <option value="social">Social</option>
      <option value="diy">DIY</option>
      <option value="charity">Charity</option>
      <option value="cooking">Cooking</option>
      <option value="music">Music</option>
      <option value="busywork">Busywork</option>
    </select>

    <button
      className="another"
      onClick={getAnotherIdea}
    >
      Give me another idea
    </button>

    </section>
  )

}

export default Form;
