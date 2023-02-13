import React from 'react'

export default function IndexPage() {
    const items = new Array(30).fill(0);
    return (
    <div className='bg-slate-50 md:px-4 lg:px-8'>
        <h1 align='center' className='text-3xl my-3'>Homepage</h1>
        <div id='stays' className='p-2 px-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {items.map((item, index) => (
                <div className="bg-gray-300 w-full h-32 rounded-md max-w-sm mx-auto">SExy div</div>
            ))}
        </div>
    </div>
    )
}