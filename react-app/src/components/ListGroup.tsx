import { useState } from "react";

interface ListGroupProps {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
	const [selectedIndex, setSelectedIndex] = useState(-1); //Called as a Hook to manage state in a functional component
	//arr[0]; //This is the state variable, which holds the current selected index
	//arr[1]; //This is the function to update the state variable

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index ? "list-group-item active" : "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item); // Call the onSelectItem function passed as a prop
						}}
					>
						{/* Using the item as the key, which is acceptable here since items are unique */}
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
