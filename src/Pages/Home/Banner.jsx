import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-center mx-auto py-8 items-center overflow-y-hidden'>
            <div className="container bg-banner-bg py-20  bg-cover overflow-y-hidden bg-blend-saturation object-contain">
                <div className="box flex justify-items-center justify-center items-center mx-auto">
                    <div className="content text-center bg-white px-24 py-12  ">
                        <div className="heading py ">
                              <h1 className='font-black text-[45px] text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-600'>EATER</h1>
                        </div>
                        <div className="text">
                            <p className='max-w-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt <br  className='hidden md:block'/> magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt <br  className='hidden md:block'/>quibusdam nemo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;