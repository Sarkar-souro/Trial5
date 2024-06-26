// App.js

import React from 'react';
import CustomerList from './CustomerList';
import Create from './Create'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditCustomer from './EditCustomer';
import "./Table.css";
import EditForm from './Editform';


const App = () => {
  return (
    <div>
      <Router>
            <Routes>
                <Route path="/" element={<CustomerList />} />
                <Route path="/add" element={<EditForm />} />
                <Route path="/edit/:id" element={<EditCustomer />} />
            </Routes>
        </Router>
    </div>
  );
};

export default App;
