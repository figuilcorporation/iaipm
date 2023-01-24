import React from 'react';
import { MdHourglassEmpty } from 'react-icons/md'

export default function Empty(props: any) {
    const { title = 'No data.' } = props;

    return (
        <div className='flex flex-col justify-center items-center text-slate-400 pb-4'>
            <MdHourglassEmpty className='w-10 h-10' />
            <p className='text-slate-400'>{title}</p>
        </div>
    )
}
