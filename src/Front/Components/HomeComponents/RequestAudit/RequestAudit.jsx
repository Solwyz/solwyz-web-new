import React from 'react'
import forwardArrow from '../../../../assets/arrow_forward.svg'

function RequestAudit() {
    return (
        <div className='mt-[34px]'>
            <div className='flex gap-2 items-center w-fit mx-auto border-b pb-[10px]'>
                <div className='text-[16px] font-medium text-[#FFFFFF]'>Request a website audit</div>
                <img src={forwardArrow} alt='' className='w-[15px] h-[15px]'/>
            </div>
        </div>
    )
}

export default RequestAudit
