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
      {showExportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Export by Date</h2>
            <div className="flex flex-col gap-4">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded px-4 py-2"
                placeholder="Start Date"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded px-4 py-2"
                placeholder="End Date"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowExportModal(false)}
                  className="text-[#2E77BC] font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleExportPDF}
                  className="bg-[#2E77BC] text-white px-4 py-2 rounded"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminContact;
