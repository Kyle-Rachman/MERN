import React, { useState } from "react";
import StyledButton from "./styled_components/StyledButton";

const MakeTodo = (props) => {
    const [task,setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="task" value={task} onChange={(e) => setTask(e.target.value)}/>
            <br/>
            <StyledButton type="submit">Add Task</StyledButton>
        </form>
    );
};

export default MakeTodo