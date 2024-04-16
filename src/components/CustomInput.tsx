import { useState } from 'react';

interface InputProps {
  onEnterPress: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ onEnterPress, placeholder }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value.trim() === '') {
      setError('The field cannot be empty');
    } else {
      setError('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value.trim() !== '') {
      onEnterPress(value);
      setValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        style={{ border: error ? '1px solid red' : '1px solid #B6B5B5'}}
        className='w-full px-4 py-3 rounded-lg focus:outline-none'
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Input;
