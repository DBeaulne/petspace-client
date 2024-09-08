/** Dropdown Menu component */
import "./DropdownMenu.scss";

import "./DropdownMenu.scss";

const Dropdown = ({
	classname = "", // Default to empty string if not provided
	focus = "",
	error = "",
	defaultTxt = "Select", // Default placeholder text
	options = [],
	name = "",
	onChange = () => {} // Default to an empty function if not provided
}) => {
	const dropdownOptions = [
		{ value: defaultTxt, label: defaultTxt }, // The default placeholder option
		...options // Spread the array of options
	];

	return (
		<div className="dropdown">
			<select
				className={`dropdown__menu ${classname} ${focus} ${error}`}
				name={name}
				onChange={onChange}>
				{dropdownOptions.map((option, index) => (
					<option
						key={`${option.value}-${index}`}
						value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
