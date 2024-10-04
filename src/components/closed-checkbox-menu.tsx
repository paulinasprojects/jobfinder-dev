import { ChevronDown } from 'lucide-react';

interface ClosedCheckboxMenuProps {
  title: string;
}

const ClosedChecboxMenu = ({title}: ClosedCheckboxMenuProps) => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <span className='text-white text-lg font-semibold'>{title}</span>
        <ChevronDown color='#92929d' width={20} height={20} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default ClosedChecboxMenu