//  Parent component

import React, { Fragment} from "react";
import { Grid } from "@material-ui/core";
import Table from "./table";
import UserForm from "./form";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import { connect } from 'react-redux';
import { addUser } from './actions/user';

const App = (props) => {

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
        <UserForm onSubmit={user => {
          props.dispatch(addUser(user))
        }} />
        <Table />
      </Grid>
      </Fragment>
  );
};

export default connect()(App);
