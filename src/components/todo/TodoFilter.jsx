import React, { useState } from "react";
import { data } from "../../data/data";

const TodoFilter = ({ user, setUser }) => {
	const [select, setSelect] = useState();
	const handleSelect = (e) => {
		const selected = e.target.value;
		setSelect(selected);
		if (selected === "all") {
			setUser(data);
		} else {
			const filteredUser = data.filter((item) => item.gender === selected);
			setUser(filteredUser);
		}
	};
	return (
		<div>
			<select value={select} onChange={handleSelect}>
				<option value="all">все</option>
				<option value="komedia">komedia</option>
				<option value="любовь">любовь</option>
				<option value="война">война</option>
			</select>
		</div>
	);
};

export default TodoFilter;
