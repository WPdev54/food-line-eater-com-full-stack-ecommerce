import React from 'react';

const SharedTitle = ({subtitle , title}) => {
    return (
        <div className='mb-12'>
            <hr className='py-[.5px] bg-amber-400 w-[350px] mx-auto'/>
            <p className='text-center text-transparent pt-2 font-bold bg-clip-text bg-gradient-to-br text-xl from-yellow-400 to-orange-600'>------   {subtitle} ------</p>
            <h1 className='text-center mt-3 text-2xl pb-2 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-amber-900 to-orange-900'>{title}</h1>
            <hr className='w-[350px] bg-amber-900 py-[.5px] mx-auto'/>
        </div>
    );
};

export default SharedTitle;