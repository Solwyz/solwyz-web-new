import React, { useEffect, useState } from "react";
import Export from "@assets/AdminSideBar/Export.svg";
import Api from "../../../Services/Api";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import rightArrow from "@assets/icons/rightArrow.svg";
import leftArrow from "@assets/icons/leftArrow.svg";

function WebsiteAudit() {
  const [audits, setAudits] = useState([]);
  const [showExportModal, setShowExportModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 👈 change this to set rows per page

  useEffect(() => {
    Api.get("api/audit/all").then((response) => {
      if (response && response.status === 200) {
        setAudits(response.data.data.reverse());
      } else {
        console.error("Error fetching audits:", response);
      }
    });
  }, []);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = audits.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(audits.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const handleExportPDF = () => {
    const from = new Date(startDate);
    const to = new Date(endDate);
    to.setHours(23, 59, 59, 999); // include full day

    const filteredData = audits.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return itemDate >= from && itemDate <= to;
    });

    const doc = new jsPDF();

    autoTable(doc, {
      head: [["Sl.No", "Date", "Name", "Email", "Contact", "Business"]],
      body: filteredData.map((item, index) => [
        index + 1,
        new Date(item.createdAt).toLocaleDateString("en-GB"),
        item.name,
        item.email,
        item.phoneNo,
        item.businessName,
        item.websiteUrl
      ]),
      styles: { fontSize: 8 },
      headStyles: { fillColor: [4, 163, 145] },
      margin: { top: 20 },
    });

    doc.save(`Website_Audit_Export_${startDate}_to_${endDate}.pdf`);
    setShowExportModal(false); // Close modal after export
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-6 border-[#C1DBD8]">
        <div>
          <h1 className="text-[20px] font-semibold leading-6">
            Website Audit Enquiries
          </h1>
          <h1 className="text-base font-medium text-[#858585] mt-2">
            See all enquiries
          </h1>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowExportModal(true)}
            className="bg-[#2E77BC] hover:bg-[#1B5A96] duration-300 rounded-lg px-6 py-[10px] font-semibold text-base text-white flex items-center"
          >
            Export
            <img className="ml-1" src={Export} alt="Export" />
          </button>

          {/* Export Modal */}
          {showExportModal && (
            <div className="absolute top-[60px] right-0 z-50 bg-white rounded-xl shadow-xl px-8 py-6 w-64">
              <h2 className="text-xs text-center font-medium">
                Select date range
              </h2>
              <p className="border border-[#E1E1E1] mt-2"></p>

              <div className="space-y-4 mt-6">
                <div className="flex gap-4 items-center text-center">
                  <label className="w-10 text-sm font-normal">From</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-[#EFEFEF] text-xs font-medium focus:outline-none px-4 py-2"
                  />
                </div>

                <div className="flex gap-4 items-center">
                  <label className="w-10 text-sm font-normal">To</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-[#EFEFEF] text-xs font-medium focus:outline-none px-4 py-2"
                  />
                </div>
              </div>

              <div className="flex justify-between w-full space-x-3 mt-6">
                <button
                  onClick={() => setShowExportModal(false)}
                  className="w-full text-center py-2 font-semibold rounded-md text-xs h-8 border"
                >
                  Cancel
                </button>
                <button
                  onClick={handleExportPDF}
                  disabled={!startDate || !endDate}
                  className={`py-2 text-center rounded-md h-8 w-full text-white font-semibold text-xs transition-colors duration-300 ${
                    !startDate || !endDate
                      ? "bg-[#2E77BC] hover:bg-[#1B5A96]  opacity-70"
                      : "bg-[#2E77BC] hover:bg-[#1B5A96] "
                  }`}
                >
                  Export
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6 ">
        <table className="w-full shadow-md">
          <thead>
            <tr className="bg-[#04A391] text-white  text-left text-[14px] font-medium">
              <th className="py-3 pr-6 pl-3 rounded-tl-lg">Sl.no</th>
              <th className="p-2">Date</th>
              <th className="py-2 px-8">Name</th>
              <th className="p-2">Email ID</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Business Name</th>
              <th className="p-2 rounded-tr-lg ">Website Url</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className="h-[60px] hover:bg-[#E6E6E7] duration-200 font-medium border border-[#E6E6E7] text-sm"
              >
                <td className="p-2 text-left">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="p-2 text-left">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString("en-GB")
                    : ""}
                </td>
                <td className="p-2  text-left">{item.name}</td>
                <td className="p-2 text-left">{item.email}</td>
                <td className="p-2 text-left">{item.phoneNo}</td>
                <td className="p-2 text-left">{item.businessName}</td>
                <td className="p-3 text-left w-[300px]">{item.websiteUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-6 gap-2">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          <img src={leftArrow} alt="Previous" />
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === i + 1 ? "text-[#373737]" : "text-[#C8C8C8]"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <img src={rightArrow} alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default WebsiteAudit;
