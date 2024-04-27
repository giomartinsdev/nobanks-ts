import React, { useState } from 'react';
import useInput from './useInput';

const DeleteClientRequest = () => {
  const id = useInput('');
  const [responseText, setResponseText] = useState(''); 

  const handleDeleteClient = async () => {
    const response = await fetch(`http://localhost:3000/clients/${id.value}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id.value,
      }),
    });
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...id} placeholder="ID" />
      <button onClick={handleDeleteClient}>Delete Client</button>
      <p>{responseText}</p>
    </div>
  );
};

export default DeleteClientRequest;