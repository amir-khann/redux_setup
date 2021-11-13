import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { usersList } from '../redux/actions/userActions';





 const Tablee = () => {
  const dispatch = useDispatch();
  const  rows = useSelector(state => state.users.users)

     useEffect(() => {
         dispatch(usersList())
     }, [dispatch])
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>RollNumber</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >FatherName</TableCell>
              <TableCell >Address</TableCell>
              <TableCell >Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.FatherName}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="success">
                      Update
                    </Button>
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default Tablee


