import React from 'react'

function IconButtons() {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 rounded py-4">
      <button
        className="material-symbols-outlined hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400 relative !inline-flex h-12 w-12 !items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-center text-sm font-medium tracking-[.00714em]"
        style={{
          fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
        }}
      >
        settings
      </button>

      <button
        className="material-symbols-outlined btn bg-primary-600 dark:bg-primary-200 dark:text-primary-800 relative !inline-flex h-12 w-12 !items-center items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] text-white hover:shadow-md"
        style={{
          fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
        }}
      >
        settings
      </button>

      <button
        className="material-symbols-outlined btn-tonal bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100 relative !inline-flex h-12 w-12 !items-center items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] hover:shadow"
        style={{
          fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
        }}
      >
        settings
      </button>

      <button
        className="material-symbols-outlined btn-outline text-primary-600 dark:text-primary-200 relative !inline-flex h-12 w-12 !items-center items-center justify-center gap-x-2 rounded-[6.25rem] border border-gray-500 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-gray-400"
        style={{
          fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
        }}
      >
        settings
      </button>
    </div>
  )
}

export default IconButtons
