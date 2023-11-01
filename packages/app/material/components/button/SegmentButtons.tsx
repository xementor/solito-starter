import React from 'react'

function SegmentButtons() {
  return (
    <div className="flex flex-col flex-wrap gap-6 rounded">
      {/* btn segmented checkbox */}{' '}
      <div className="btn-segmented inline-flex flex-row items-center">
        <div className="segmented-item active [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 btn-outline text-primary-600 dark:text-primary-200 relative inline-flex h-10 flex-row items-center justify-center gap-x-2 border border-gray-500 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-gray-400">
          <input
            id="check1"
            type="checkbox"
            className="absolute inset-0 z-10 opacity-0"
            value="1"
            checked={true}
          />
          <label className="flex items-center gap-3" htmlFor="check1">
            <span
              className="material-symbols-outlined check-icon"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              check
            </span>
            Red
          </label>
        </div>
        <div className="segmented-item [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 btn-outline text-primary-600 dark:text-primary-200 relative inline-flex h-10 flex-row items-center justify-center gap-x-2 border border-gray-500 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-gray-400">
          <input
            id="check2"
            type="checkbox"
            className="absolute inset-0 z-10 opacity-0"
            value="1"
          />
          <label className="flex items-center gap-3" htmlFor="check2">
            <span
              className="material-symbols-outlined check-icon"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              check
            </span>
            Green
          </label>
        </div>
        <div className="segmented-item [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 btn-outline text-primary-600 dark:text-primary-200 relative inline-flex h-10 flex-row items-center justify-center gap-x-2 border border-gray-500 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-gray-400">
          <input
            id="check3"
            type="checkbox"
            className="absolute inset-0 z-10 opacity-0"
            value="1"
          />
          <label className="flex items-center gap-3" htmlFor="check3">
            <span
              className="material-symbols-outlined check-icon"
              style={{
                fontFamily:
                  "'Material Symbols Outlined', Bangla447, sans-serif",
              }}
            >
              check
            </span>
            Yellow
          </label>
        </div>
      </div>
      {/* btn segmented radio */} <SegmentButtonRadio />
    </div>
  )
}

export default SegmentButtons

export const SegmentButtonRadio = () => {
  return (
    <div className="btn-segmented inline-flex flex-row items-center">
      <div className="segmented-item active [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 btn-outline text-primary-600 dark:text-primary-200 relative inline-flex h-10 flex-row items-center justify-center gap-x-2 border border-gray-500 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-gray-400">
        <input
          id="check4"
          type="radio"
          name="radios"
          className="absolute inset-0 z-10 opacity-0"
          value="1"
          checked={true}
        />
        <label className="flex items-center gap-3" htmlFor="check1">
          <span
            className="material-symbols-outlined check-icon"
            style={{
              fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
            }}
          >
            check
          </span>
          Small
        </label>
      </div>
      <div className="segmented-item [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 btn-outline text-primary-600 dark:text-primary-200 relative inline-flex h-10 flex-row items-center justify-center gap-x-2 border border-gray-500 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-gray-400">
        <input
          id="check5"
          type="radio"
          name="radios"
          className="absolute inset-0 z-10 opacity-0"
          value="2"
        />
        <label className="flex items-center gap-3" htmlFor="check2">
          <span
            className="material-symbols-outlined check-icon"
            style={{
              fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
            }}
          >
            check
          </span>
          Medium
        </label>
      </div>
      <SegmentButtonRadioItem />
    </div>
  )
}

const SegmentButtonRadioItem = () => {
  return (
    <div className="segmented-item [&.active]:bg-secondary-100 dark:[&.active]:bg-secondary-700 btn-outline text-primary-600 dark:text-primary-200 relative inline-flex h-10 flex-row items-center justify-center gap-x-2 border border-gray-500 px-6 py-2.5 text-sm font-medium tracking-[.00714em] dark:border-gray-400">
      <input
        id="check6"
        type="radio"
        name="radios"
        className="absolute inset-0 z-10 opacity-0"
        value="3"
      />
      <label className="flex items-center gap-3" htmlFor="check3">
        <span
          className="material-symbols-outlined check-icon"
          style={{
            fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
          }}
        >
          check
        </span>
        Big
      </label>
    </div>
  )
}
