import React from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../actions/taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newDescription = prompt('Enter new description:', task.description);
    if (newDescription && newDescription.trim() !== '') {
      dispatch(editTask({ ...task, description: newDescription }));
    }
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};