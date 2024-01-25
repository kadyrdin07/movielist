import React, { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import { data } from "../../data/data";

const TodoMain = () => {
	const [user, setUser] = useState(data);
	return (
		<div>
			<TodoAdd user={user} setUser={setUser} />
			<TodoFilter user={user} setUser={setUser} />
			<TodoList user={user} />
		</div>
	);
};

export default TodoMain;
