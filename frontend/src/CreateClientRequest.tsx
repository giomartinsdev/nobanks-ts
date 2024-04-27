import React, { useState } from 'react';
import useInput from './useInput';

const CreateClientRequest = () => {
  const name = useInput('');
  const document = useInput('');
  const password = useInput('');
  const cell = useInput('');
  const email = useInput('');
  const [responseText, setResponseText] = useState(''); 


  const handleCreateClient = async () => {
    const response = await fetch('http://localhost:3000/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        document: document.value,
        password: password.value,
        cell: cell.value,
        email: email.value,
      }),
    });
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...name} placeholder="Name" />
      <input {...document} placeholder="Document" />
      <input {...password} placeholder="Password" />
      <input {...cell} placeholder="Cell" />
      <input {...email} placeholder="Email" />
      <button onClick={handleCreateClient}>Create Client</button>
      <p>{responseText}</p>
    </div>
  );
};

export default CreateClientRequest;