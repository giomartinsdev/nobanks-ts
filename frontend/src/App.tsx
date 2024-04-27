import React, { useState } from 'react';
import PingRequest from './PingRequest';
import GetClientRequest from './GetClientRequest';
import CreateClientRequest from './CreateClientRequest';
import UpdateClientRequest from './UpdateClientRequest';
import DeleteClientRequest from './DeleteClientRequest';
import CreateAccountRequest from './CreateAccountRequest';
import GetAccountRequest from './GetAccountRequest';

function App() {
  const [requestType, setRequestType] = useState('');

  const requestComponents: { [key: string]: React.ReactNode } = {
    ping: <PingRequest />,
    getClient: <GetClientRequest />,
    createClient: <CreateClientRequest />,
    updateClient: <UpdateClientRequest />,
    deleteClient: <DeleteClientRequest />,
    createAccount: <CreateAccountRequest />,
    getAccount: <GetAccountRequest />,
  };

  return (
    <div className="App">
      <select title='Dropbox requests' value={requestType} onChange={e => setRequestType(e.target.value)}>
        <option value="">Select a request</option>
        <option value="ping">Ping</option>
        <option value="getClient">Get Client</option>
        <option value="createClient">Create Client</option>
        <option value="updateClient">Update Client</option>
        <option value="deleteClient">Delete Client</option>
        <option value="createAccount">Create Account</option>
        <option value="getAccount">Get Account</option>
      </select>

      {requestComponents[requestType]}
    </div>
  );
}

export default App;