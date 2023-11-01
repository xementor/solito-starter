import React from 'react'

function List() {
  const fontStyle = {
    fontFamily: "'Material Symbols Outlined';, Bangla985, sans-serif;",
  }
  return (
    <li className="relative">
      <a
        href="#"
        className="hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 flex flex-row items-center gap-3 rounded-full py-4 pl-4 pr-6 hover:bg-opacity-30 dark:hover:bg-opacity-30"
      >
        <span className="material-symbols-outlined" style={fontStyle}>
          outgoing_mail
        </span>
        Sent
      </a>
    </li>
  )
}

export default List
