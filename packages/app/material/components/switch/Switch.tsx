import React from 'react'

function Switch() {
  return (
    <div className="toggle-switch relative mb-6 inline-flex h-8 w-[52px]">
      <input className="toggle-checkbox hidden" type="checkbox" />
      <label className="toggle-default transition-color relative block h-8 w-12 rounded-full duration-150 ease-out"></label>
    </div>
  )
}

export default Switch
