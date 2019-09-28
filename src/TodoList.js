import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import * as actions from './redux/actions'
import { connect } from 'react-redux'

const TodoList = ({todos, deleteTodo, toggleCompleted}) => {
  const listItems = todos.map((element, index)=>{
    return(
      <ListItem onClick = {()=> toggleCompleted(index)} button key={index}>
        <Checkbox checked = {element.completed}/>
        <ListItemText primary = {element.value}/>
        <ListItemSecondaryAction>
          <IconButton onClick = {deleteTodo.bind(this, index)}>
            <DeleteIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  })
  return(
    <List>
      {listItems}
    </List>
  )
}

const mapStateToProps = ({todoReducer}) => {
  const { todos } = todoReducer
  return { todos }
}

export default connect(
  mapStateToProps,
  actions
)(TodoList)
