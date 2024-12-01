import React from 'react'

type InputBoxProps = {
  type: InputType,
  value: string,
  name: string,
  keyProp: 'checkIn' | 'checkOut' | 'guests',
  handleChange: React.Dispatch<React.SetStateAction<Inputs>>;
  classNames?: string,
  placeholder?: string,
}

export default function InputBox({ type, name, keyProp, value, placeholder, handleChange, classNames }: InputBoxProps) {
  return (
    <div className='flex flex-col gap-1 text-sm w-56 maxScreen:w-full'>
      <label htmlFor={name} className='font-medium'>{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange((prev) => ({ ...prev, [keyProp]: e.target.value }))}
        className={`${classNames} border border-gray-400 rounded focus:outline-none focus:ring-0 placeholder:text-gray-400 p-2 text-xs w-full`}
      />
    </div>
  )
}