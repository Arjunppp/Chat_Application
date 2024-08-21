import React from 'react'

export const Input = (props) => {
  return (
    <div className='flex flex-col gap-3'>
        <label htmlFor={props.id} >{props.name}</label>
        <input type={props.type} name={props.id} className='p-2 focus:ring-2 border border-orange-300 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-600' />
    </div>
  )
}
