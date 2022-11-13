import React, { useState } from 'react'
import Swal from 'sweetalert2';
import "./Edit.css"
function Edit({ customers, selectedEmployee, setCustomers, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [department, setDepartment] = useState(selectedEmployee.department);
    const [country, setCountry] = useState(selectedEmployee.country);
    const [address, setAddress] = useState(selectedEmployee.address);
    const [active, setActive] = useState(selectedEmployee.active);
    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !department || !country || !address || !active) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            department,
            address,
            country,
            active
        };

        for (let i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                customers.splice(i, 1, employee);
                break;
            }
        }

        setCustomers(customers);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="login-container">
            <form className="form-log" onSubmit={handleUpdate}>
                <h1 className="login-h1">Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input className="login-input"
                    placeholder="First Name"
                    id="name"
                    type="text"
                   
                    name="name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                className="login-input"
                    placeholder="Last Name"
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Department</label>
                <input
                className="login-input"
                   placeholder="Department"
                   id="department"
                   type="text"
                   name="department"
                   value={department}
                    onChange={e => setDepartment(e.target.value)}
                />
                <label htmlFor="country">Country</label>
                    <input
                    className="login-input"
                    placeholder="Country"
                        id="country"
                        type="text"
                        name="country"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                 <label htmlFor="address">Address</label>
                    <input
                    className="login-input"
                    placeholder="Address"
                        id="address"
                        type="text"
                        name="address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <label htmlFor="active">Active/Inactive</label>
                    <input
                    label="Inactive"
                        id="true"
                        type="checkbox"
                       
                        value={active}
                        onChange={e => setActive(e.target.value)}
                    />
                    <input
                    label="Active"
                        id="false"
                        type="checkbox"
                       
                        value={active}
                        onChange={e => setActive(e.target.value)}
                       
                    />
                <div style={{ marginTop: '30px' }}>
                    <button type="submit" value="Update">Update</button>
                    <button
                    style={{ marginLeft: '12px' }}
                    className="muted-button"
                    type="button"
                    value="Cancel"
                    onClick={() => setIsEditing(false)}>Cancel</button>
                   
                </div>
            </form>
        </div>
    );
}

export default Edit