import React from 'react'

// @TODO: Make "in-line" button order
// @TODO: Add Button sizing options

const Button = ({ children, order, onClick }) => {
  let buttonClasses =
    'mt-4 py-4 px-8 text-xl font-bold rounded-3xl lg:py-4 focus:outline-none shadow-xl'

  if (order === 'primary') {
    buttonClasses += ' bg-indigo-600 text-gray-100 hover:bg-yellow-500 hover:text-slate-800'
  } else if (order === 'secondary') {
    buttonClasses += ' bg-gray-300 text-gray-700 hover:bg-gray-400'
  } else if (order === 'tertiary') {
    buttonClasses += ' text-blue-500 hover:text-blue-600 hover:underline'
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
