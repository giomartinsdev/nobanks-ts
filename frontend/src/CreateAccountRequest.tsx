import React, { useState } from 'react';
import useInput from './useInput';

const CreateAccountRequest = () => {
  const id = useInput('');
  const balance = useInput('');
  const [responseText, setResponseText] = useState(''); 

  const handleCreateAccount = async () => {
    const response = await fetch(`http://localhost:3000/clients/${id.value}/accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: id.value,
        balance: balance.value,
      }),
    });
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...id} placeholder="ID" />
      <input {...balance} placeholder="Balance" />
      <button onClick={handleCreateAccount}>Create Account</button>
      <p>{responseText}</p>
    </div>
  );
};

export default CreateAccountRequest;