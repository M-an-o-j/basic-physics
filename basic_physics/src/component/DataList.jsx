import React, { useState } from 'react';

const pageSize = 10;

const DataList = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const displayedData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / pageSize);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div>
            <ul>
                <div className='bg-slate-500 text-white rounded-md p-10 my-5'>
                    {displayedData.map((item, index) => (
                        <div className='my-3 bg-slate-200 text-black p-5 rounded-md' key={index}>
                            <li className='text-semibold' key={index}>{item.name}</li>
                            <li className='text-semibold' key={index}>{item.Age}</li>
                            <li className='text-semibold' key={index}>{item.Place}</li>
                        </div>
                    ))}
                </div>
            </ul>
            <div className='text-center'>
                <button className='bg-black text-white font-bold p-3 rounded-md ' onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                <span className='mx-10 font-bold '>Page {currentPage} of {totalPages}</span>
                <button className='bg-black text-white font-bold p-3 rounded-md ' onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
        </div>
    );
};

export default DataList;
