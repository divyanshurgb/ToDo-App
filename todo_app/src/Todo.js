import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText } from '@material-ui/core'


function Todo(props) {
    return (
        <List>
            <ListItem>
            <ListItemText primary={props.text} secondary = "Dummy Deadline  "/>
            </ListItem>
        </List>
    )
}

export default Todo
