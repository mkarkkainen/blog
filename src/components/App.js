import React from "react";
import PostList from "./PostList";
import Header from "./Header";
import UserHeader from "./UserHeader";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const App = () => {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main className={classes.mainGrid}>
          <UserHeader />
          <PostList />
        </main>
      </Container>
    </>
  );
};

export default App;
