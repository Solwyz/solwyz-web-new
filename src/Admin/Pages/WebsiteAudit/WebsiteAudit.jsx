import React, { useEffect, useState } from 'react'
import Export from "@assets/AdminSideBar/Export.svg"
import Api from '../../../Services/Api';


function WebsiteAudit() {
    const [audits, setAudits] = useState([]);

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

    useEffect(() => {
        Api.get('api/audit/all')
            .then(response => {
                if (response && response.status === 200) {
                    console.log("Audits fetched successfully:", response.data.data);
                    setAudits(response.data.data.reverse())
                } else {
                    console.error("Error fetching audits:", response);
                }
            })
    },[])

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
                    <table className="min-w-full shadow-md">
                        <thead>
                            <tr className="bg-[#04A391] text-white text-[14px] font-medium">
                                <th className="py-3 pr-6 pl-3 rounded-tl-lg ">Sl.no</th>
                                <th className="p-2 ">Date</th>
                                <th className="py-2 px-8 ">Name</th>
                                <th className="p-2 ">Email ID</th>
                                <th className="p-2 ">Company</th>
                                <th className="p-2 ">Website Link</th>
                                <th className="p-2 ">Service</th>
                                <th className="p-2 rounded-tr-lg ">Message</th>
                               
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-700">
                            {audits.map((item, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                                >
                                    <td className="p-2 border text-center">{`${index + 1}`}</td>
                                    <td className="p-2 border text-center">{item.createdAt
                                    ? new Date(item.createdAt).toLocaleDateString('en-GB')
                                    : ''}</td>
                                    <td className="p-2 border text-center">{item.name}</td>
                                    <td className="p-2 border text-center">{item.email}</td>
                                    <td className="p-2 border text-center">{item.phoneNo}</td>
                                    <td className="p-2 border text-center">{item.businessName}</td>
                                    <td className="p-2 border text-center">{item.industry}</td>
                                    <td className="p-2 border text-center">{item.location}</td>
                                    <td className="p-2 border text-center">{item.websiteUrl}</td>
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
