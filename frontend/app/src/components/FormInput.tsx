interface InputProps {
	type: string;
	name: string;
	text: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string; 
}

const FormInput: React.FC<InputProps> = ({ type, name, text, value, onChange, error }) => {
	return (
		<div className="input-holder">
			<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{text}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				required
				className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				aria-describedby={error ? `${name}-error` : undefined}
			/>
			{error && (
				<p id={`${name}-error`} className="mt-2 text-sm text-red-600">
					{error}
				</p>
			)}
		</div>
	);
};

export default FormInput;
