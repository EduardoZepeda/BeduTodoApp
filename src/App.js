import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TodoForm from './todoForm'

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
          {/* <ListItems
            todos = {this.state.todos}
            toggleCompleted = {this.toggleCompleted}
            deleteTodo = {this.deleteTodo}
          /> */}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
