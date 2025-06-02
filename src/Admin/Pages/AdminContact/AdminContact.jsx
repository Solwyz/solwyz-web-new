import React, { useState } from "react";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // ✅ This attaches the plugin

import exportIcon from "../../../assets/export.svg";

function AdminContact() {
  const data = [
    {
      date: "14/05/2025",
      name: "Affan Raj",
      email: "affanraj1235@gmail.com",
      company: "Techversant Pvt Ltd",
      websiteLink: "www.infosys.com",
      service: "IT solutions",
      message:
        "Hi we are team from infosys, jjbacjchbbsjjabb hasbhc hbs h shhdj hbjbd b bsbsbxj ghd hsdhhxv hhsgdh hsggs is jbsj hvs hs hshv sgsvhs.",
    },
    {
      date: "14/05/2025",
      name: "Affan Raj",
      email: "affanraj1235@gmail.com",
      company: "Techversant Pvt Ltd",
      websiteLink: "www.infosys.com",
      service: "IT solutions",
      message:
        "Hi we are team from infosys, jjbacjchbbsjjabb hasbhc hbs h shhdj hbjbd b bsbsbxj ghd hsdhhxv hhsgdh hsggs is jbsj hvs hs hshv sgsvhs.",
    },
    // Add more entries as needed
  ];
  const [showExportModal, setShowExportModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleExportPDF = () => {
  const doc = new jsPDF();

  const tableColumn = ["Sl.no", "Date", "Name", "Email ID", "Company", "Website", "Service", "Message"];
  const tableRows = data.map((item, index) => [
    `0${index + 1}`,
    item.date,
    item.name,
    item.email,
    item.company,
    item.websiteLink,
    item.service,
    item.message,
  ]);

  // ✅ Use autoTable function and pass doc as first argument
  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [46, 119, 188] },
  });

  doc.save("contact-enquiries.pdf");
};


  return (
    <div className="">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-xl">Contact Enquiries</h1>
          <p className="font-medium text-base text-[#858585] leading-6 mt-2">
            See all enquiries
          </p>
        </div>
        <button
          onClick={() => setShowExportModal(true)}
          className="bg-[#2E77BC] flex items-center justify-center py-2 px-6 rounded-lg h-10 text-white text-base font-medium"
        >
          Export
          <img src={exportIcon} className="ml-1" alt="export" />
        </button>
         {/* Modal Dropdown Below Button */}
  {showExportModal && (
    <div className="absolute top-[150px] border right-6 mt-2 z-50  bg-white rounded-xl shadow-xl px-8 py-6">
      <h2 className="text-xs text-center font-medium ">Select date range </h2>
      <p className="border border-[#E1E1E1] mt-2 "></p>

      <div className="space-y-4 mt-6">
        <div className="flex gap-4 items-center text-center">
          <label className=" w-10 text-sm  font-normal">From </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full bg-[#EFEFEF] text-xs font-medium focus:outline-none px-4 py-2 "
          />
        </div>

        <div className="flex gap-4 items-center ">
          <label className="block w-10 text-sm  font-normal">To </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full bg-[#EFEFEF] text-xs font-medium focus:outline-none px-4 py-2 "
          />
        </div>
      </div>

      <div className="flex justify-between w-full space-x-3 mt-6">
        <button
          onClick={() => setShowExportModal(false)}
          className="w-full text-center py-2 font-semibold rounded-md text-xs h-8   border "
        >
          Cancel
        </button>
        <button
          onClick={handleExportPDF}
          disabled={!startDate || !endDate}
          className={` py-2 text-center rounded-md h-8 w-full text-white font-semibold text-xs transition-colors duration-300 ${
            !startDate || !endDate
              ? "bg-[#2E77BC] hover:bg-[#2E77BC]"
              : "bg-[#2E77BC] "
          }`}
        >
          Export
        </button>
      </div>
    </div>
  )}
      </div>

      {/* Divider */}
      <div className="border border-[#C1DBD8] w-full mt-6 "></div>

      {/* Scrollable Table */}
      <div className="mt-6 max-w-full overflow-x-auto">
        <table className="min-w-[900px] w-full text-left border border-[#D6D6D6]">
          <thead className="">
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
              <tr
                key={index}
                className="h-[100px]  font-normal border-b border-[#E6E6E7] text-sm"
              >
                <td className="px-4 py-2">{`0${index + 1}`}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.company}</td>
                <td className="px-4 py-2">{item.websiteLink}</td>
                <td className="px-4 py-2">{item.service}</td>
                <td className="px-4  py-2 w-[300px]">{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default AdminContact;
