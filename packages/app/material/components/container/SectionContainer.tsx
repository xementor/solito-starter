import React, { ReactNode } from 'react'

function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <div className="bg-surface-100 dark:bg-surfacedark-100 flex w-full flex-col flex-wrap gap-8 rounded-2xl  md:p-10">
      {children}
    </div>
  )
}

export default SectionContainer
