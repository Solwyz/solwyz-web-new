import React from 'react'
import downloadblue from '../../../assets/icons/download.svg'

function ApplicationsTable() {
    return (
        <div>
            <div className='flex items-center justify-between border-b border-[#C1DBD8] pb-6'>
                <div>
                    <div className='text-[20px] text-[#000000] font-semibold'>Digital Marketing</div>
                    <div className='text-[16px] text-[#858585] font-medium'>See all job applications for digital marketing department</div>
                </div>
            </div>

            <div className='mt-6 overflow-hidden rounded-t-lg'>
                <table className='w-full'>
                    <thead className='text-[14px] bg-[#04A391] text-left text-[#FFFFFF]'>
                        <th className='font-semibold py-3 pl-4'>Sl.no</th>
                        <th className='font-semibold py-3'>Applied Date</th>
                        <th className='font-semibold py-3'>Name</th>
                        <th className='font-semibold py-3'>Email ID</th>
                        <th className='font-semibold py-3'>Contact</th>
                        <th className='font-semibold py-3'>Date of Birth</th>
                        <th className='font-semibold py-3'>Qualification</th>
                        <th className='font-semibold py-3'>Resume</th>
                    </thead>
                    <tbody className='text-[14px] font-medium'>
                        <tr className='border border-[#E6E6E7]'>
                            <td className='pl-4 py-4'>01</td>
                            <td className='py-4'>14/05/2025</td>
                            <td className='py-4'>Affan Raj</td>
                            <td className='py-4'>affanraj1235@gmail.com</td>
                            <td className='py-4'>9652554784</td>
                            <td className='py-4'>25/08/1997</td>
                            <td className='py-4'>B.Tech</td>
                            <td className='py-4 flex items-center gap-1 cursor-pointer'>
                                <div className='text-[#4D78BA]'>Download resume</div>
                                <img src={downloadblue} className='w-4 h-4'></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ApplicationsTable
