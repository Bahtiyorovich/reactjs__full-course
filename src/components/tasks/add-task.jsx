import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <div className="d-flex gap-2">
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
        className='form-control w-50 '
      />
      <button 
        className="btn btn-primary"
        onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </div>
  )
}
