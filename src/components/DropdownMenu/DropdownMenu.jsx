/** Dropdown Menu component */
import "./DropdownMenu.scss";

const Dropdown = ({
	classname,
	focus,
	error,
	defaultTxt,
	option1,
	option2,
	option3,
	option4,
	option5,
	name,
	onChange
}) => {
	const options = [
		{ value: defaultTxt, label: defaultTxt },
		{ value: option1, label: option1 },
		{ value: option2, label: option2 },
		{ value: option3, label: option3 },
		{ value: option4, label: option4 },
		{ value: option5, label: option5 }
	];
	return (
		<div className="dropdown">
			<select
				className={`dropdown__menu ${classname} ${focus} ${error}`}
				name={name}
				onChange={onChange}>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};
export default Dropdown;
