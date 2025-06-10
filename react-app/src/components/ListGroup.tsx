import type { MouseEvent } from "react";

function ListGroup() {
	let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

	const handleClick = (event: MouseEvent) => console.log(event);
	//Event handler to log the event when an item is clicked
	//This function can be used to handle click events on the list items

	return (
		<>
			<h1>ListGroup</h1>
			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li className="list-group-item" key={item} onClick={handleClick}>
						{/* Using the item as the key, which is acceptable here since items are unique */}
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
