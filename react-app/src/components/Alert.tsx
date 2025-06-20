import type { ReactNode } from "react";

interface AlertProps {
	children: ReactNode;
	onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
	return (
		<div className="alert alert-primary alert-dismissible">
			{children}
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
				onClick={onClose} // Call the onClose function passed as a prop
			></button>
		</div>
	);
};

export default Alert;
