import React, { useState } from 'react';
import useInput from './useInput';

const GetClientRequest = () => {
  const id = useInput('');
  const [responseText, setResponseText] = useState(''); 

  const handleGetClient = async () => {
    const response = await fetch(`http://localhost:3000/clients/${id.value}`);
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...id} placeholder="ID" />
      <button onClick={handleGetClient}>Get Client</button>
      <p>{responseText}</p>
    </div>
  );
};

export default GetClientRequest;