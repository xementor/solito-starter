import React from 'react'
import IconButtons from './IconButtons'
import SegmentButtons from './SegmentButtons'

function FABs() {
  return (
    <div>
      <p className="mb-3 text-sm tracking-[0.1px]">
        Floating Action buttons (Fabs)
      </p>
      {/* fabs */}{' '}
      <div className="mb-6 flex flex-wrap items-center gap-2 rounded py-4">
        {/* large */}{' '}
        <button className="fabs bg-primary-100 dark:bg-primary-700 dark:text-primary-100 relative flex h-24 w-24 flex-row items-center justify-center gap-x-2 overflow-hidden rounded-[28px] p-2 text-sm font-medium tracking-[.00714em] shadow-xl">
          <span
            className="material-symbols-outlined !text-4xl"
            style={{
              fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
            }}
          >
            edit
          </span>
        </button>
        {/* extended */}{' '}
        <button className="fabs bg-primary-100 dark:bg-primary-700 dark:text-primary-100 relative flex h-14 flex-row items-center justify-center gap-x-3 overflow-hidden rounded-2xl p-4 pr-8 text-sm font-medium tracking-[.00714em] shadow-lg">
          <span
            className="material-symbols-outlined"
            style={{
              fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
            }}
          >
            edit
          </span>
          Compose
        </button>
        {/* medium */}{' '}
        <button className="fabs bg-primary-100 dark:bg-primary-700 dark:text-primary-100 relative flex h-14 w-14 flex-row items-center justify-center gap-x-2 overflow-hidden rounded-2xl p-2 text-sm font-medium tracking-[.00714em] shadow-lg">
          <span
            className="material-symbols-outlined"
            style={{
              fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
            }}
          >
            edit
          </span>
        </button>
        {/* small */}{' '}
        <button className="fabs bg-primary-100 dark:bg-primary-700 dark:text-primary-100 relative flex h-10 w-10 flex-row items-center justify-center gap-x-2 overflow-hidden rounded-xl p-2 text-sm font-medium tracking-[.00714em] shadow-lg">
          <span
            className="material-symbols-outlined !text-lg"
            style={{
              fontFamily: "'Material Symbols Outlined', Bangla447, sans-serif",
            }}
          >
            edit
          </span>
        </button>
      </div>
      <p className="mb-3 text-sm tracking-[0.1px]">Icon buttons</p>
      <IconButtons />
      <p className="mb-6 text-sm tracking-[0.1px]">
        Segmented Buttons (Checkbox &amp; Radio)
      </p>
      <SegmentButtons />
    </div>
  )
}

export default FABs
