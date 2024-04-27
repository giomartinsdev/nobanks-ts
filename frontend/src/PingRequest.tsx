import React from 'react';

const PingRequest = () => {
  
  const handlePing = async () => {
    const response = await fetch('http://localhost:3000/ping');
    const data = await response.text();
    console.log(data);
  };

  return <button onClick={handlePing}>Ping</button>;
};

export default PingRequest;