import React from 'react'

interface PaginationProps {
    totalLinks: number,
    linksPerPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    currentPage: number
}

export default function Pagination({ totalLinks, linksPerPage, setCurrentPage, currentPage }: PaginationProps) {
    const pages = []

    for(let i = 1; i<=Math.ceil(totalLinks/linksPerPage); i++){
        pages.push(i)
    }
  return (
    <div className='flex justify-center mt-5'>
        {
            pages.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} className={`mx-2 px-4 py-2 border border-white rounded-lg font-bold ${page == currentPage ? 'text-black bg-white  duration-200' : 'text-white' } cursor-pointer shadow hover:shadow-2xl`}>{page}</button>
            })
        }
    </div>
  )
}
