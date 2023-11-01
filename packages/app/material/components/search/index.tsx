import React from 'react'

function Search() {
  const fontStyle = {
    fontFamily: "'Material Symbols Outlined';, Bangla985, sans-serif;",
  }
  return (
    <div className="bg-surface-100 dark:bg-surfacedark-100 flex h-14 w-full flex-row items-center justify-between rounded-full p-2">
      <div className="flex flex-grow flex-row items-center">
        <button
          className="material-symbols-outlined hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400 relative !inline-flex h-12 w-12 !items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-center text-sm font-medium tracking-[.00714em]"
          style={fontStyle}
        >
          <span
            className="material-symbols-outlined !text-2xl"
            style={fontStyle}
          >
            search
          </span>
        </button>
        <input
          type="search"
          placeholder="Search..."
          className="w-full bg-transparent px-4 py-2 ring-0 focus:outline-none"
        />
        <button
          type="submit"
          className="material-symbols-outlined hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400 relative !inline-flex h-12 w-12 !items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-center text-sm font-medium tracking-[.00714em]"
          style={fontStyle}
        >
          keyboard_voice
        </button>
      </div>
    </div>
  )
}

export default Search
