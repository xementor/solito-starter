import React from 'react'

function PreLoader() {
  return (
    <div
      className="preloader loaded-success bg-neutral-10 fixed inset-0 z-50 dark:bg-neutral-900"
      style={{ fontFamily: 'Roboto, Bangla521, sans-serif' }}
    >
      <div className="flex h-screen w-full items-center justify-center">
        <svg className="circular-loader relative h-[100px] w-[100px]">
          <circle
            className="path stroke-primary-600 dark:stroke-primary-200"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="5"
            strokeMiterlimit="10"
          ></circle>
        </svg>
      </div>
    </div>
  )
}

export default PreLoader
