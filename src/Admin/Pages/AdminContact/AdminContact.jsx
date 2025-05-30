import React from 'react';
import exportIcon from "../../../assets/export.svg";

function AdminContact() {
    const data = [
        {
            date: '14/05/2025',
            name: 'Affan Raj',
            email: 'affanraj1235@gmail.com',
            company: 'Techversant Pvt Ltd',
            websiteLink: 'www.infosys.com',
            service: 'IT solutions',
            message: 'Hi we are team from infosys, jjbacjchbbsjjabb hasbhc hbs h shhdj hbjbd b bsbsbxj ghd hsdhhxv hhsgdh hsggs is jbsj hvs hs hshv sgsvhs.',
        },
        {
            date: '14/05/2025',
            name: 'Affan Raj',
            email: 'affanraj1235@gmail.com',
            company: 'Techversant Pvt Ltd',
            websiteLink: 'www.infosys.com',
            service: 'IT solutions',
            message: 'Hi we are team from infosys, jjbacjchbbsjjabb hasbhc hbs h shhdj hbjbd b bsbsbxj ghd hsdhhxv hhsgdh hsggs is jbsj hvs hs hshv sgsvhs.',
        },
        // Add more entries as needed
    ];

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-semibold text-xl">Contact Enquiries</h1>
                    <p className="font-medium text-base text-[#858585] leading-6 mt-2">See all enquiries</p>
                </div>
                <button className="bg-[#2E77BC] flex items-center justify-center py-2 px-6 rounded-lg h-10 text-white text-base font-medium">
                    Export
                    <img src={exportIcon} className="ml-1" alt="export" />
                </button>
            </div>

            {/* Divider */}
            <div className="border border-[#C1DBD8] w-full mt-6 mb-4"></div>

            {/* Scrollable Table */}
<div className="mt-6  overflow-x-auto">
    <table className="min-w-[1400px] border border-[#D6D6D6]">
        <thead className=''>
            <tr className="bg-[#00a8a3]  h-[40px] text-left text-sm font-medium text-white">
                <th className="px-4 py-2 rounded-tl-lg font-normal">Sl.no</th>
                <th className="px-4 py-2  font-normal">Date</th>
                <th className="px-4 py-2  font-normal">Name</th>
                <th className="px-4 py-2  font-normal">Email ID</th>
                <th className="px-4 py-2  font-normal">Company</th>
                <th className="px-4 py-2  font-normal">Website Link</th>
                <th className="px-4 py-2  font-normal">Service</th>
                <th className="px-4 py-2 rounded-tr-lg font-normal">Message</th>
            </tr>
        </thead>
        <tbody className="">
            {data.map((item, index) => (
                <tr key={index} className="h-[100px]  font-normal border-b border-[#E6E6E7] text-sm">
                    <td className="px-4 py-2">{`0${index + 1}`}</td>
                    <td className="px-4 py-2">{item.date}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2">{item.company}</td>
                    <td className="px-4 py-2">{item.websiteLink}</td>
                    <td className="px-4 py-2">{item.service}</td>
                    <td className="px-4  py-2 w-[397px]">
                        {item.message}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

        </div>
    );
}

export default AdminContact;
