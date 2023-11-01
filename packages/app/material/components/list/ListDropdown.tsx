import clsx from 'clsx'

function ListDropdown() {
  const fontStyle = {
    fontFamily: "'Material Symbols Outlined';, Bangla985, sans-serif;",
  }

  return (
    <li className="relative">
      <a
        href="#"
        className={clsx(
          'hover-icon hover:bg-secondary-100 dark:hover:bg-secondary-700 flex flex-row items-center gap-3 rounded-full py-4 pl-4 pr-6 hover:bg-opacity-30 dark:hover:bg-opacity-30',
          'justify-between'
        )}
      >
        Sent
        <span className="material-symbols-outlined">expand_more</span>
      </a>
    </li>
  )
}

export default ListDropdown
