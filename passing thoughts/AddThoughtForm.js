import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

const [text, setText] = useState('');

handleTextChange(e){
  setText(e.target.value);
}

handleSubmit(e){
e.preventDefault()

 const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }
     if (text.length > 0) {
      props.addThought(thought);
      setText('');
    }
}

export function AddThoughtForm(props) {
  return (
<form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
