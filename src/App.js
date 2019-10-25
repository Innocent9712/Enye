//  Parent component

import React, { Fragment, useState} from "react";
import { Grid } from "@material-ui/core";
import Table from "./table";
import UserForm from "./form";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

const App = () => {
  const UserState = [{}]
  const [users, setUser] = useState(UserState);

  const addUser = user => {
    setUser([...UserState, user]);
  };

  return (
    <Fragment>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <TypoGraphy variant="title" color="inherit">
            User Profile
          </TypoGraphy>
        </Toolbar>
      </AppBar>
      <Grid container>
        <UserForm addUser={addUser} />
        <Table users={users}/>
      </Grid>
      </Fragment>
  );
};

export default App;
