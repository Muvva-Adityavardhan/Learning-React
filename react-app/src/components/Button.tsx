interface ButtonProps {
	color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"; // Optional color prop with default value
	children: string;
	onClick: () => void; // Optional onClick handler
}
const Button = ({ color = "primary", children, onClick }: ButtonProps) => {
	return (
		<button className={`btn btn-${color}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
