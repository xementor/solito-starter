import React, { ReactNode } from 'react'
import SectionContainer from './container/SectionContainer'
import Buttons from './button/Buttons'
import FABs from './button/FABs'

function ButtonSection() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl leading-tight">Actions</h2>
        <BlackContainer>
          <div className="flex flex-wrap gap-4 md:gap-12">
            <Buttons />
            <FABs />
          </div>
        </BlackContainer>
      </div>
    </SectionContainer>
  )
}

export default ButtonSection

export function BlackContainer({ children }: { children: ReactNode }) {
  return (
    <div className="bg-neutral-10 rounded-2xl border border-gray-200 p-6 dark:border-gray-700 dark:bg-neutral-900 md:p-8">
      {children}
    </div>
  )
}
