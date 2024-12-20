import React from 'react'

const Loader = () => {
    return (
        <div className='fixed left-0 top-0 w-full h-full flex items-center justify-center z-50 bg-[#1b1b1b]'>
            <span className='loader'></span>
        </div>
    )
}

export default Loader