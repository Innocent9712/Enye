// Form

import React, { useState } from "react";
import { Grid, TextField, Paper, Button } from "@material-ui/core";


const UserForm = props => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    birthday: "",
    age: "",
    hobby: ""
  };
  const [user, setUser] = useState(initialFormState);
  const [error, setError ]= useState({error:''})


  const handleInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.birthday) {
      setUser(initialFormState);
      props.onSubmit({
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
        age: user.age,
        hobby: user.hobby
      })
    } else {
      setError({error: 'Please Fill all required input'})
    }
  };

    return (
      <Paper style={{ margin: 30, padding: 30, width: 500 }}>
        <p style={{ color: 'red' }}>{error.error}</p>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid>
            <TextField
              label="First Name"
              placeholder="John"
              style={{}}
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleInput}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              label="Last Name"
              placeholder="Doe"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleInput}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              type="date"
              label="Date Of Birth"
              placeholder="mm/dd/yyyy"
              InputLabelProps={{ shrink: true }}
              name="birthday"
              value={user.birthday}
              onChange={handleInput}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              label="Age"
              type="number"
              placeholder="20"
              name="age"
              value={user.age}
              onChange={handleInput}
            ></TextField>
          </Grid>
          <Grid>
            <TextField
              label="Hobby"
              placeholder="e.g Movies"
              type="text"
              name="hobby"
              value={user.hobby}
              onChange={handleInput}
            ></TextField>
          </Grid>
          <Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UserForm;
