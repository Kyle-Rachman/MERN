import React, { useState } from "react";
import DeleteButton from "./styled_components/DeleteButton";
import TodoItem from "./styled_components/TodoItem";

const Todos = (props) => {
    const buildTodo = (todo, index) => {
        if (todo.completed) {
            return (
                <TodoItem key={index}>
                    <div className="task">
                        <input type="checkbox" checked id={index} value={index} onChange={(e) => {props.onUpdateTodo(e.target.value)}}></input>
                        <label htmlFor={index} style={{color: "gray"}}> <s>{todo.task}</s></label>
                    </div>
                    <DeleteButton value={index} onClick={(e) => {props.onRemoveTodo(e.target.value)}}>Delete</DeleteButton>
                </TodoItem>
            );
        } else {
            return (
                <TodoItem key={index}>
                    <div className="task">
                        <input type="checkbox" id={index} value={index} onChange={(e) => {props.onUpdateTodo(e.target.value)}}></input>
                        <label htmlFor={index}> {todo.task}</label>
                    </div>
                    <DeleteButton value={index} onClick={(e) => {props.onRemoveTodo(e.target.value)}}>Delete</DeleteButton>
                </TodoItem>
            );
        };
    };

    let todos = props.todos.map((todo, index) => buildTodo(todo, index));

    return (
        <div>
            {todos}
        </div>
    );
};

export default Todos