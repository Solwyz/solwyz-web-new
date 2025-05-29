import React from 'react'
import Export from "../../../assets/AdminSideBar/Export.svg"

function WebsiteAudit() {

    const data = [
        {
            date: '14/05/2025',
            name: 'Affan Raj',
            email: 'affanraj1235@gmail.com',
            contact: '1122558866',
            business: 'Infosys Technologies',
            category: 'IT solutions',
            location: 'Trivandrum',
            website: 'pitssolutions.com',
            goals: 'Increase Traffic, Enhance SEO, Boost conversions',
        },
        // Repeat or map more entries as needed
    ];
    return (
        <div>
            <div className='flex justify-between items-center border-b pb-6 border-[#C1DBD8]'>
                <div>
                    <h1 className='text-[20px] font-semibold leading-6'>Website Audit Enquiries</h1>
                    <h1 className='text-base font-medium text-[#858585] mt-2'>See all enquiries</h1>
                </div>
                <div>
                    <button className='bg-[#2E77BC] hover:bg-[#1B5A96] duration-300 rounded-lg px-6 py-[10px] font-semibold text-base text-white flex items-center'>
                        Export
                        <img className='ml-1' src={Export} alt="" />
                    </button>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto mt-6">
                    <table className="min-w-full border border-gray-300 shadow-md">
                        <thead>
                            <tr className="bg-[#00a8a3] text-white text-sm">
                                <th className="py-3 pr-6 pl-3 border">Sl.no</th>
                                <th className="p-2 border">Date</th>
                                <th className="py-2 px-8 border">Name</th>
                                <th className="p-2 border">Email ID</th>
                                <th className="p-2 border">Contact</th>
                                <th className="p-2 border">Business Name</th>
                                <th className="p-2 border">Industry/Category</th>
                                <th className="p-2 border">Location</th>
                                <th className="p-2 border">Website URL</th>
                                <th className="p-2 border">Goals</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-700">
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                                >
                                    <td className="p-2 border text-center">{`0${index + 1}`}</td>
                                    <td className="p-2 border text-center">{item.date}</td>
                                    <td className="p-2 border text-center">{item.name}</td>
                                    <td className="p-2 border text-center">{item.email}</td>
                                    <td className="p-2 border text-center">{item.contact}</td>
                                    <td className="p-2 border text-center">{item.business}</td>
                                    <td className="p-2 border text-center">{item.category}</td>
                                    <td className="p-2 border text-center">{item.location}</td>
                                    <td className="p-2 border text-center">{item.website}</td>
                                    <td className="p-2 border text-center">{item.goals}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WebsiteAudit
