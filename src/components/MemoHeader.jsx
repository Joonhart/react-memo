import React from 'react'

export default function MemoHeader() {
  return (
    <div className='bg-slate-300'>
      <ul className='flex p-5 gap-10'>
        <li>Save</li>
        <li>Undo</li>
        <li>Redo</li>
      </ul>
    </div>
  )
}
