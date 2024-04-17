// App.js

import React from 'react';
import CustomerList from './CustomerList';
import Create from './Create'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditForm from './Editform';
import { Update } from '@mui/icons-material';

const App = () => {
  return (
    <div>
      <Router>
            <Routes>
                <Route path="/" element={<CustomerList />} />
                <Route path="/add" element={<Create />} />
                <Route path="/edit/:id" element={<Update />} />
            </Routes>
        </Router>
    </div>
  );
};

export default App;
