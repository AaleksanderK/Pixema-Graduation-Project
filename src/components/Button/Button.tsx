import { FC } from "react";
import { IButton } from "../../type";
import "./button.scss";

export const Button: FC<IButton> = ({
	className,
	callback,
	content,
	isActive,
}) => {
	return (
		<button type="button" className={className} disabled={isActive} onClick={() => callback()}>
			{content}
		</button>
	);
};
