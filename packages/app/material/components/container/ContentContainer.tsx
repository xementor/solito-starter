import React, { ReactNode } from 'react'

function ContentContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-12 overflow-hidden md:gap-2">
      <div className="bg-surface-100 dark:bg-surfacedark-100 flex w-full flex-col flex-wrap gap-8 rounded-2xl  md:p-10">
        {children}
      </div>
    </div>
  )
}

export default ContentContainer
