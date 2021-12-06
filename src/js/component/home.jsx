import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const [inputField, setInputField] = useState("");

	const [tasks, SetTasks] = useState([]);

	const [visible, setVisible] = useState("invisible");

	const [taskCount, setTaskCount] = useState(0);

	const handleKeyPress = event => {
		if (event.key === "Enter") {
			const newTasks = [...tasks];
			newTasks.push(inputField);
			setInputField("");

			SetTasks(newTasks);

			setTaskCount[tasks.length];
		}
	};

	function removeTaskHandler(indx) {
		const newTasks = [...tasks];
		newTasks.splice(indx, 1);
		SetTasks(newTasks);
	}

	function taskCountComp(arr) {
		if (arr.length != 0) {
			if (arr.length === 1) {
				let showText = arr.length.toString() + " task left";
				return (
					<li className="list-group-item d-flex justify-content-between align-items-center h-25">
						<p className="taskCountText">{showText}</p>
					</li>
				);
			} else {
				let showText = arr.length.toString() + " tasks left";
				return (
					<li className="list-group-item d-flex justify-content-between align-items-center h-25">
						<p className="taskCountText">{showText}</p>
					</li>
				);
			}
		}
	}

	const inputChangeHandler = evento => {
		setInputField(evento.target.value);
	};

	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<h1 className="col-lg-2 align-self-center">todos</h1>
			</div>
			<div className="row d-flex justify-content-center">
				<ul className="col-lg-4 list-group">
					<input
						className="list-group-item d-flex justify-content-between align-items-center"
						onKeyPress={handleKeyPress}
						onChange={inputChangeHandler}
						type="text"
						placeholder="What needs to be done?"
						value={inputField}
					/>
					{tasks.map((elementoActual, indice) => {
						return (
							<div key={indice}>
								<li
									className="list-group-item d-flex justify-content-between align-items-center"
									key={indice}
									/*onMouseEnter={() => setVisible("visible")}
									onMouseLeave={() =>
										setVisible("invisible")
									}*/
								>
									<p className="listText col-lg-5 d-flex">
										{elementoActual}
									</p>
									<button
										/*className={visible}*/
										className="col-lg-7 d-flex justify-content-end"
										onClick={() => {
											removeTaskHandler(indice);
										}}>
										X
									</button>
								</li>
							</div>
						);
					})}
					{taskCountComp(tasks)}
				</ul>
			</div>
		</div>
	);
};

export default Home;
