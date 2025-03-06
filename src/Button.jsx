import React from 'react'

function Button(props) {
  return (
    <div>

<div className='float-right '> 
<button type="button" className={`focus:outline-none text-${props.Text} bg-${props.Bg}-100 
        hover:bg-${props.Bg}-700 focus:ring-4 focus:ring-${props.Bg}-300 font-medium 
        rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-300 
        dark:bg-${props.Bg}-800 dark:hover:bg-${props.Bg}-700 dark:focus:ring-${props.Bg}-900 shadow-md`}>{props.name}</button>
</div>
    </div>
  )
}

export default Button
