import React, { ReactNode } from 'react'

function MainContainer({ children }: { children: ReactNode }) {
  return (
    // <div>MainContainer</div>
    <div
      className="flex flex-row gap-4 px-2 pt-20 md:pl-24 md:pr-0 md:pt-0"
      style={{ fontFamily: 'Roboto, Bangla259, sans-serif' }}
    >
      {children}
    </div>
  )
}

export default MainContainer
