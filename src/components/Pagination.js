import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className=' pt-4 m-4 flex justify-between w-3/4 mx-auto align-center'>
            <button data-testid='prev'
                className={`p-2 font-semibold text-white hover:bg-violet-400 ${currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-violet-900'}`}
                disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>prev</button>
            <p>page {currentPage} of {totalPages}</p>
            <button data-testid='next' className='p-2 bg-violet-900 font-semibold text-white hover:bg-violet-400' disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}>next</button>
        </div>
    )
}

export default Pagination