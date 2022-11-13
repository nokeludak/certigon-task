import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import axios from "axios"
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import "./Dashboard.css"



function Dashboard() {

   
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [customers, setCustomers] = useState([]);


    useEffect(() => {
        const getCustomers = async () => {
          try {
            const res = await axios.get("https://certigon-task.herokuapp.com/employees");
            setCustomers(res.data);
            console.log(res.data);
            console.log(res.data)
          } catch (error) {}
        };
        getCustomers();
      }, []);

      

    const handleEdit =  (id) => {
        try {
            const res =  axios.post("https://certigon-task.herokuapp.com/create", id);
            setSelectedEmployee(res);
            setIsEditing(true);
          } catch (error) {
            console.log(error);
          }
       
    }

   

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = customers.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setCustomers(customers.filter(employee => employee.id !== id));
            }
        });
    } 


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
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
    )
}

export default Dashboard;