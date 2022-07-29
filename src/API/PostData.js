import React, { useState } from 'react';

function Post() {
 
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
 

  let data = { author, setAuthor };
  function Save() {
    debugger;
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((reponse) => {
      console.log(reponse);
    });
  }
  return (
    <div className='App'>
      
      <input
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        name='author'
      />
      <br />
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name='title'
      />
      <br />
     
      <button onClick={Save}>Submit</button>
    </div>
  );
}

export default Post;
