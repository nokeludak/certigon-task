import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import './Dashboard.css';

function Dashboard() {
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/employees');
        setCustomers(res.data);
        console.log(res.data);
        console.log(res.data);
      } catch (error) {}
    };
    getCustomers();
  }, []);

  const handleEdit = async (id) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/employee',
        id
      );
      setSelectedEmployee(res);
      setIsEditing(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(
        `http://localhost:5000/employees/${customers._id}`,
        id
      );
      setCustomers(data);
      console.log('Ovo je greska u delete try');
      console.log(data);
    } catch (error) {
      console.log(error);
      console.log('Ovo je greska u delete');
    }
  };

  return (
    <div className='container'>
      {/* List */}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            customers={customers}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* Add */}
      {isAdding && (
        <Add
          customers={customers}
          setCustomers={setCustomers}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Edit */}
      {isEditing && (
        <Edit
          customers={customers}
          selectedEmployee={selectedEmployee}
          setCustomers={setCustomers}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Dashboard;