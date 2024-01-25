import React from "react";
import css from './TodoList.module.css'
const MovieList = ({ user }) => {
	return (
		<div className={css.Kino}>
			<div className={css.Kino}>
				{user.map(({ id, name, age, gender, img }) => (
					<div className={css.main} key={id}>
						<h1 >{name}</h1>
						<p>{age}</p>
						<p>{gender}</p>
						<img src={img} alt="" />
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieList;
