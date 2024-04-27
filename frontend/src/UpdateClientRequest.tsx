import React, { useState } from 'react';
import useInput from './useInput';

const UpdateClientRequest = () => {
  const id = useInput('');
  const table = useInput('');
  const column = useInput('');
  const inputData = useInput('');
  const [responseText, setResponseText] = useState(''); 

  const handleUpdateClient = async () => {
    const response: Response = await fetch(`http://localhost:3000/clients/${id.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id.value,
        table: table.value,
        column: column.value,
        data: inputData.value,
      }),
    });
    const data = await response.text();
    setResponseText(data);
  };

  return (
    <div>
      <input {...id} placeholder="ID" />
      <input {...table} placeholder="Table" />
      <input {...column} placeholder="Column" />
      <input {...inputData} placeholder="Data" />
      <button onClick={handleUpdateClient}>Update Client</button>
      <p>{responseText}</p> 
    </div>
  );
};

export default UpdateClientRequest;