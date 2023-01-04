import React from 'react'

function Header({ children = 'Título do header' }) {
  return (
    <header>
      <div className="bg-gray-100 mx-auto p-4">
        <h1 className="text-center font-semibold text-xl">{children}</h1>
      </div>
    </header>
  )
}

export default Header
