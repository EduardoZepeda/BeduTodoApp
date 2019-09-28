import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TodoForm from './todoForm'
import TodoList from './TodoList'

function App() {
  return (
    <Fragment>
      <Typography variant="h2" align="center" gutterBottom>Todo list</Typography>
      <Grid container justify="center">
        <Grid item>
          <TodoForm/>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item md={8}>
          <TodoList />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
