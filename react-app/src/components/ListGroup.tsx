function ListGroup() {
	let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
	//items = []; // Uncomment this line to test the "No items found" case

	const message = items.length === 0 ? <p>No items found</p> : null;

	const getMessage = () => {
		return items.length === 0 ? <p>No items found</p> : null;
	};

	return (
		<>
			<h1>ListGroup</h1>
			{getMessage()}
			{message}
			{items.length === 0 ? <p>No items found</p> : null}

            {/* The above three lines are equivalent and demonstrate different ways to conditionally render content */}

			<ul className="list-group">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
