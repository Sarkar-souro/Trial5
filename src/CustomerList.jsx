// CustomerList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomPaginationActionsTable from './Table';
const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://hammerhead-app-tzlph.ondigitalocean.app/customers?pageNo=1&pageSize=20`, requestOptions);
        setCustomers(response.data.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
console.log(customers);
  return (
    <div>
      <h2>Customer List</h2>
      
      <CustomPaginationActionsTable data={customers} />
    </div>
  );
};

export default CustomerList;
