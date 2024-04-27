import React, { useState } from 'react';
import useInput from './useInput';

const GetAccountRequest = () => {
  const id = useInput('');
  const [responseText, setResponseText] = useState(''); 

  const handleGetAccount = async () => {
    const response = await fetch(`http://localhost:3000/clients/${id.value}/accounts`);
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...id} placeholder="ID" />
      <button onClick={handleGetAccount}>Get Account</button>
      <p>{responseText}</p>
    </div>
  );
};

export default GetAccountRequest;