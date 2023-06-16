import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

<<<<<<< HEAD
const Task = ({id, title, isComplete }) => {
  const [complete, setComplete] = useState(isComplete);
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
=======
const Task = ({ id, title, isComplete, setComplete, removeTask  }) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
>>>>>>> be1c6316cf57edcb2c2cea8c751d818ad84afbee

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(id)}
      >
        {title}
      </button>
      <button onClick = {() => removeTask(id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  setComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
};

export default Task;
