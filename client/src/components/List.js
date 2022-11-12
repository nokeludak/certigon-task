import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./List.css"
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';




export default function List({ employees, handleEdit, handleDelete }) {
    
  return (
    <div className="contain-table">
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, i) => (
            <TableRow
              key={employee.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employee.firstName}
              </TableCell>
              <TableCell align="right">{employee.lastName}</TableCell>
              <TableCell align="right">{employee.department}</TableCell>
              <TableCell align="right">{employee.country}</TableCell>
              <TableCell align="right">{employee.address}</TableCell>
              <TableCell align="right">{employee.active}</TableCell>
              <td className="text-right">
                  <button   onClick={() => handleEdit(employee.id)}
                    className="button-edit"
                  >
                    Edit
                  </button>
                  
                </td>
                <td className="text-left">
                <Stack direction="row" alignItems="center" spacing={1}>
     
     <IconButton aria-label="delete" size="large"
     onClick={() => handleDelete(employee.id)}>
       <DeleteIcon fontSize="inherit" />
     </IconButton>
   </Stack>
                </td>
            </TableRow>
          ))}
         
        </TableBody>
        
      </Table>
      
    </TableContainer>
    </div>
  );
}