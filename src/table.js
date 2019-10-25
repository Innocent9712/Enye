// Table

import React from "react";
import {
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { connect } from 'react-redux';


const Table = props => {
  return (
    <Paper style={{ padding: 30, margin: 30, width: 500 }}>
      <TableHead>
        <TableRow>
          <TableCell>First Nane</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Hobby</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.users.map(item => {
          return (
            <TableRow>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.birthday}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.hobby}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Table);
