import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import "./Add.css";
import axios from "axios";

function Add({ customers, setCustomers, setIsAdding }) {
  const [create, setCreate] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [active, setActive] = useState(true);

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name || !lastName || !department || !country || !address || !active) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    const data = { name, lastName, department, country, address, active };

    try {
      const res = await axios.post("https://certigon-task.herokuapp.com/create", data);
      setCreate(res.data);
    } catch (error) {
      console.log(error);
    }
    const id = customers.length + 1;
    const newEmployee = {
      id,
      name,
      lastName,
      department,
      address,
      country,
      active,
    };
    customers.push(newEmployee);
    setCustomers(customers);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${name} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="login-container">
      <div>
        <form className="form-log" onSubmit={handleAdd}>
          <h1 className="login-h1">Add Employee</h1>
          <label htmlFor="name">First Name</label>
          <input
            className="login-input"
            placeholder="First Name"
            id="name"
            type="text"
            ref={textInput}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            className="login-input"
            placeholder="Last Name"
            id="lastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="department">Department</label>
          <input
            className="login-input"
            placeholder="Department"
            id="department"
            type="text"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <label htmlFor="country">Country</label>
          <input
            className="login-input"
            placeholder="Country"
            id="country"
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label htmlFor="address">Address</label>
          <input
            className="login-input"
            placeholder="Address"
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="active">Active/Inactive</label>

          <input
            label="Active"
            id="false"
            type="checkbox"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          />

          <input
            label="Inactive"
            id="true"
            type="checkbox"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          />

          <div style={{ marginTop: "30px" }}>
            <input className="btn" type="submit" value="Add" />
            <input
              style={{ marginLeft: "12px" }}
              className="btn"
              type="button"
              value="Cancel"
              onClick={() => setIsAdding(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
