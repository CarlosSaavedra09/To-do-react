import React, { useState } from 'react';
import './Todolist.css';

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleAddTodo = () => {
		if (inputValue.trim()) {
			setTodos([...todos, inputValue]);
			setInputValue('');
		}
	};

	const handleDeleteTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	const handleEditTodo = (index) => {
		const newTodos = todos.map((todo, i) => {
			if (i === index) {
				return prompt('Edit task', todo);
			}
			return todo;
		});
		setTodos(newTodos);
	};

	return (
		<div className="todo-list">
			<h1>LKMX - Front-end</h1>
			<div className="todo-box">
				<h2>To Do List</h2>
				<input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add a new task" />
				<button onClick={handleAddTodo}>Add</button>
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>
							{todo}
							<button onClick={() => handleEditTodo(index)}>Edit</button>
							<button onClick={() => handleDeleteTodo(index)}>Delete</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
