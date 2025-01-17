import React, { useState } from 'react';
import './Todolist.css';
import trash from './icon-trash.svg';
import edit from './icon-pen.svg';
import save from './icon-disk.svg';

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [editIndex, setEditIndex] = useState(null);
	const [editValue, setEditValue] = useState('');

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
		setEditIndex(index);
		setEditValue(todos[index]);
	};

	const handleEditChange = (e) => {
		setEditValue(e.target.value);
	};

	const handleEditConfirm = (index) => {
		const newTodos = todos.map((todo, i) => (i === index ? editValue : todo));
		setTodos(newTodos);
		setEditIndex(null);
		setEditValue('');
	};

	return (
		<div className="todo-list">
			<h1>LKMX - Front-end</h1>
			<div className="todo-box">
				<h2>To Do List</h2>
				<input type="text" value={inputValue} onChange={handleInputChange} placeholder="Escribe una tarea" />
				<button onClick={handleAddTodo}>Agregar</button>
				<ul>
					{todos.length === 0 && <li>No hay tareas</li>}
					{todos.map((todo, index) => (
						<li key={index} className="todo-item">
							{editIndex === index ? (
								<>
									<input
										type="text"
										value={editValue}
										onChange={handleEditChange}
										onBlur={() => handleEditConfirm(index)}
										autoFocus
									/>
									<button>
										<img src={save} alt="save task" />
									</button>
								</>
							) : (
								<>
									<span>{todo}</span>
									<button onClick={() => handleEditTodo(index)}>
										<img src={edit} alt="edit task" />
									</button>
									<button onClick={() => handleDeleteTodo(index)}>
										<img src={trash} alt="delete task" />
									</button>
								</>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
