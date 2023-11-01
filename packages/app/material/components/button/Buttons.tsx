import React from 'react'

function Buttons() {
  return (
    <div>
      <p className="mb-3 text-sm tracking-[0.1px]">Buttons</p>
      <div className="flex flex-col gap-2">
        {/* <!-- btn elevated  --> */}
        <div className="flex flex-wrap items-center gap-2 rounded py-4">
          <button className="btn-elevated bg-surface-100 hover:bg-surface-200 focus:bg-surface-400 text-primary-600 dark:bg-surfacedark-100 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400 dark:text-primary-200 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] shadow-lg">
            Elevated
          </button>

          <button className="btn-elevated bg-surface-100 hover:bg-surface-200 focus:bg-surface-400 text-primary-600 dark:bg-surfacedark-100 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400 dark:text-primary-200 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] shadow-lg">
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Icon
          </button>

          <button
            className="btn relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] hover:shadow-md"
            disabled={true}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Disabled
          </button>
        </div>
        {/* <!-- btn filled  --> */}
        <div className="flex flex-wrap items-center gap-2 rounded py-4">
          <button className="btn bg-primary-600 dark:bg-primary-200 dark:text-primary-800 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] text-white hover:shadow-md">
            Filled
          </button>

          <button className="btn bg-primary-600 dark:bg-primary-200 dark:text-primary-800 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] text-white hover:shadow-md">
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Icon
          </button>

          <button
            className="btn relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] hover:shadow-md"
            disabled={true}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Disabled
          </button>
        </div>
        {/* <!-- btn tonal --> */}
        <div className="flex flex-wrap items-center gap-2 rounded py-4">
          <button className="btn-tonal bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] hover:shadow">
            Tonal
          </button>

          <button className="btn-tonal bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] hover:shadow">
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Icon
          </button>

          <button
            className="btn relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] hover:shadow-md"
            disabled={true}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Disabled
          </button>
        </div>
        {/* btn outlined */}{' '}
        <div className="flex flex-wrap items-center gap-2 rounded py-4">
          <button className="btn-outline text-primary-600 dark:text-primary-200 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] border border-gray-500 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-gray-400">
            Outlined
          </button>

          <button className="btn-outline text-primary-600 dark:text-primary-200 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] border border-gray-500 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-gray-400">
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Icon
          </button>

          <button
            className="btn-outline relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] border border-neutral-200 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-neutral-400 dark:text-neutral-400"
            disabled={true}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Disabled
          </button>
        </div>
        {/* btn text */}{' '}
        <div className="flex flex-wrap items-center gap-2 rounded py-4">
          <button className="text-primary-600 hover:bg-surface-200 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em]">
            Text
          </button>

          <button className="text-primary-600 hover:bg-surface-200 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400 relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em]">
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Icon
          </button>

          <button
            className="relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] text-neutral-400"
            disabled={true}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              add
            </span>
            Disabled
          </button>
        </div>
      </div>
    </div>
  )
}

export default Buttons
