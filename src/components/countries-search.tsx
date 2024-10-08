import { ChevronUp, Search } from 'lucide-react'
import React from 'react'

const CountriesSearch = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
      <span className='text-white text-lg font-semibold'>Countries</span>
      <ChevronUp color='#92929d' width={20} height={20} className='cur'/>
    </div>
      <div className="relative mt-[26px]">
        <input type="text" className="w-[248px] h-[32px] rounded-[10px] bg-cardColor text-sm text-neutralColor pl-7 font-medium" placeholder="Search  country" />
        <Search className="absolute top-2 left-2 text-neutralColor" width={15} height={15}/>
      </div>
    </div>
  )
}

export default CountriesSearch