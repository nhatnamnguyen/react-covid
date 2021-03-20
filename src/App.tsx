import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import Country from './country/Country';
import Global from './global/Global';
import CovidToolBar from './toolbar/CovidToolBar';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <CovidToolBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className='App'>
            <Route exact path="/global" component={Global} />
            <Route path="/countries" component={Country} />
            <Redirect exact from="/" to="/global" />
          </div>
        </main>
      </Router>
    </div>
  );
}