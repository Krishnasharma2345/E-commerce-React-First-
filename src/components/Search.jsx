import React, { useRef } from 'react';

const Search = () => {
    const search = useRef(null); // Initialize the ref with null

    // Function to handle focus on input
    const handleFocus = () => {
        if (search.current) {
            search.current.focus();
        }
    };

    return (
        <div className='flex items-center'>
            <input
                ref={search}
                className='rounded-md outline-none text-black mx-32 p-2'
                type="text"
                placeholder='Search'
            />
            <img
                onClick={handleFocus} 
                src="/system-regular-42-search.svg"
                alt="Search Icon"
                className='cursor-pointer ml-2'
            />
        </div>
    );
};

export default Search;
