function ListGroup() {
	const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

	// items.map(item => {
	//     return <li className="list-group-item">{item}</li>;
	// });
	return (
		<>
			<h1>ListGroup</h1>
			<ul className="list-group">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
