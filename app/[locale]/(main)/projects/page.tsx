import CardProject from '@/components/card-project'
import React from 'react'

const Page = () => {
    return (
        <div className='flex flex-wrap items-center justify-center w-auto px-10 m-10 ' >
            
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
        </div>
    )
}

export default Page