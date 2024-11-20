import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('/api/employees', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      setEmployees(res.data);
    }).catch(err => {
      alert('Error fetching employees');
    });
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            {emp.name} - {emp.position} - {emp.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
