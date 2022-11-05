import Nav from "../../nav";
import Classes from "./classes";
import ConditionalOutput from "./conditional-output";
import Styles from "./styles";
import TodoList from "./todo/todo-list";
import React from "react";

function Assignment6() {
    return (
        <div>
            <Nav/>
            <h1>Assignment 6</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}

export default Assignment6;