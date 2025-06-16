import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Api from "../../../Services/Api";
import exportIcon from "../../../assets/export.svg";
import rightArrow from "../../../assets/icons/rightArrow.svg";
import leftArrow from "../../../assets/icons/leftArrow.svg";

function AdminContact() {
  const [data, setData] = useState([]);
  const [showExportModal, setShowExportModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get("api/contact/all");
        console.log("API response:", response);
  
        const result = response?.data?.data || response?.data || [];
        setData(result.reverse()); // 👈 Reverse before setting state
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "Sl.no",
      "Date",
      "Name",
      "Email ID",
      "Company",
      "Website",
      "Service",
      "Message",
    ];

    const filteredData = data.filter((item) => {
      if (!item.createdAt) return false;
      const itemDate = new Date(item.createdAt).toISOString().split("T")[0];
      return itemDate >= startDate && itemDate <= endDate;
    });

    const tableRows = filteredData.map((item, index) => [
      `0${index + 1}`,
      item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "-",
      item.name,
      item.email,
      item.company,
      item.websiteLink,
      item.service,
      item.message,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [46, 119, 188] },
    });

    doc.save("contact-enquiries.pdf");
  };

  return (
    <div>
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

        {/* Export Modal */}
        {showExportModal && (
          <div className="absolute top-[150px] border right-6 mt-2 z-50 bg-white rounded-xl shadow-xl px-8 py-6">
            <h2 className="text-xs text-center font-medium">Select date range</h2>
            <p className="border border-[#E1E1E1] mt-2 "></p>

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
                  !startDate || !endDate ? "bg-[#2E77BC] opacity-70" : "bg-[#2E77BC]"
                }`}
              >
                Export
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border border-[#C1DBD8] w-full mt-6"></div>

      {/* Table Section */}
      <div className="mt-6 max-w-full overflow-x-auto">
        <table className="min-w-[900px] w-[1717px] text-left">
          <thead>
            <tr className="bg-[#00a8a3] h-[40px] text-left text-sm font-medium text-white">
              <th className="px-4 py-2 rounded-tl-lg font-normal">Sl.no</th>
              <th className="px-4 py-2 font-normal">Date</th>
              <th className="px-4 py-2 font-normal">Name</th>
              <th className="px-4 py-2 font-normal">Email ID</th>
              <th className="px-4 py-2 font-normal">Company</th>
              <th className="px-4 py-2 font-normal">Website Link</th>
              <th className="px-4 py-2 font-normal">Service</th>
              <th className="px-4 py-2 rounded-tr-lg font-normal">Message</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={item.id}
                className="h-[100px] font-normal border-b border-[#E6E6E7] text-sm"
              >
                <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                <td className="px-4 py-2">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "-"}
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.company}</td>
                <td className="px-4 py-2">{item.websiteLink}</td>
                <td className="px-4 py-2">{item.service}</td>
                <td className="px-4 py-2 w-[300px]">{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center mt-6 gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`p-2 ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <img src={leftArrow} alt="Previous" />
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md text-sm font-normal ${
              currentPage === i + 1 ? "text-[#373737]" : "text-[#C8C8C8]"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <img src={rightArrow} alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default AdminContact;
