// App.js

import React from 'react';
import CustomerList from './CustomerList';
import Create from './Create'
import Update from './Update';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <CustomerList />
      <Create />
      <Update />
    </div>
  );
};

export default App;
