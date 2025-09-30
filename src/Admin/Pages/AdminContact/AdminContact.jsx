import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Api from "../../../Services/Api";
import exportIcon from "@assets/export.svg";
import rightArrow from "@assets/icons/rightArrow.svg";
import leftArrow from "@assets/icons/leftArrow.svg";

function AdminContact() {
  const [data, setData] = useState([]);
  const [showExportModal, setShowExportModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeTab, setActiveTab] = useState("All Enquiries");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ✅ Fetch API based on active tab
  const fetchData = async (tab) => {
    try {
      let response;
      if (tab === "All Enquiries" || tab === "Contact enquiry") {
        response = await Api.get("api/contact/all");
      } else if (tab === "Services") {
        response = await Api.get("api/service/all");
      } else if (tab === "Location") {
        response = await Api.get("api/location/all");
      }

      const result = response?.data?.data || response?.data || [];
      setData(result.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  // ✅ Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  // ✅ Export to PDF
  const handleExportPDF = () => {
    const doc = new jsPDF();
    let tableColumn = [];
    let tableRows = [];

    const filteredData = data.filter((item) => {
      if (!item.createdAt) return false;
      const itemDate = new Date(item.createdAt).toISOString().split("T")[0];
      return itemDate >= startDate && itemDate <= endDate;
    });

    if (activeTab === "All Enquiries" || activeTab === "Contact enquiry") {
      tableColumn = [
        "Sl.no",
        "Date",
        "Name",
        "Email",
        "Company",
        "Website",
        "Service",
        "Message",
      ];
      tableRows = filteredData.map((item, i) => [
        i + 1,
        new Date(item.createdAt).toLocaleDateString(),
        item.name,
        item.email,
        item.company,
        item.websiteLink,
        item.service,
        item.message,
      ]);
    } else if (activeTab === "Services") {
      tableColumn = [
        "Sl.no",
        "Date",
        "Name",
        "Email",
        "Company",
        "Website",
        "Service",
        "Phone",
        "Message",
      ];
      tableRows = filteredData.map((item, i) => [
        i + 1,
        new Date(item.createdAt).toLocaleDateString(),
        item.name,
        item.email,
        item.companyName,
        item.websiteUrl,
        item.service,
        item.phoneNumber,
        item.message,
      ]);
    } else if (activeTab === "Location") {
      tableColumn = [
        "Sl.no",
        "Date",
        "Name",
        "Email",
        "Company",
        "Service",
        "Phone",
        "Business",
      ];
      tableRows = filteredData.map((item, i) => [
        i + 1,
        new Date(item.createdAt).toLocaleDateString(),
        item.name,
        item.email,
        item.companyName,
        item.service,
        item.phoneNumber,
        item.businessName,
      ]);
    }

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [4, 163, 145] },
      margin: { top: 20 },
    });

    doc.save(`${activeTab.toLowerCase()}-enquiries.pdf`);
  };

  // ✅ Reusable Table renderer per tab
  const renderTable = () => {
    if (activeTab === "All Enquiries" || activeTab === "Contact enquiry") {
      return (
        <table className="min-w-[900px] w-[1717px] text-left">
          {" "}
          <thead>
            <tr className="bg-[#00a8a3] h-[40px] text-left text-sm font-medium text-white">
              <th className="px-4 py-2 rounded-tl-lg font-normal">Sl.no</th>
              <th className="px-4 py-2 font-normal">Date</th>{" "}
              <th className="px-4 py-2 font-normal">Name</th>{" "}
              <th className="px-4 py-2 font-normal">Email ID</th>{" "}
              <th className="px-4 py-2 font-normal">Company</th>{" "}
              <th className="px-4 py-2 font-normal">Website Link</th>{" "}
              <th className="px-4 py-2 font-normal">Service</th>{" "}
              <th className="px-4 py-2 rounded-tr-lg font-normal">Message</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, i) => (
              <tr
                key={item.id}
                className="h-[100px] hover:bg-[#E6E6E7] duration-200 font-normal border border-[#E6E6E7] text-sm"
              >
                <td className="px-4 py-2">{indexOfFirstItem + i + 1}</td>
                <td className="px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.company}</td>
                <td className="px-4 py-2">{item.websiteLink}</td>
                <td className="px-4 py-2">{item.service}</td>
                <td className="px-4 py-2 text-[#4D78BA] w-[300px]">
                  {item.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    if (activeTab === "Services") {
      return (
        <table className="min-w-[900px] w-[1717px] text-left">
          {" "}
          <thead>
            <tr className="bg-[#00a8a3] h-[40px] text-left text-sm font-medium text-white">
              <th className="px-4 py-2 rounded-tl-lg font-normal">Sl.no</th>
              <th className="px-4 py-2 font-normal">Date</th>{" "}
              <th className="px-4 py-2 font-normal">Name</th>{" "}
              <th className="px-4 py-2 font-normal">Email ID</th>{" "}
              <th className="px-4 py-2 font-normal">Company</th>{" "}
              <th className="px-4 py-2 font-normal">Website Link</th>{" "}
              <th className="px-4 py-2 font-normal">Service</th>{" "}
              <th className="px-4 py-2 font-normal">Phone</th>
              <th className="px-4 py-2 rounded-tr-lg font-normal">Message</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, i) => (
              <tr
                key={item.id}
                className="h-[100px] hover:bg-[#E6E6E7] duration-200 font-normal border border-[#E6E6E7] text-sm"
              >
                <td className="px-4 py-2">{indexOfFirstItem + i + 1}</td>
                <td className="px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.companyName}</td>
                <td className="px-4 py-2">{item.websiteUrl}</td>
                <td className="px-4 py-2">{item.service}</td>
                <td className="px-4 py-2">{item.phoneNumber}</td>
                <td className="px-4 py-2 text-[#4D78BA] w-[300px]">
                  {item.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    if (activeTab === "Location") {
      return (
        <table className="min-w-[900px] w-[1717px] text-left">
          {" "}
          <thead>
            <tr className="bg-[#00a8a3] h-[40px] text-left text-sm font-medium text-white">
              <th className="px-4 py-2 rounded-tl-lg font-normal">Sl.no</th>
              <th className="px-4 py-2 font-normal">Date</th>{" "}
              <th className="px-4 py-2 font-normal">Name</th>{" "}
              <th className="px-4 py-2 font-normal">Email ID</th>{" "}
              <th className="px-4 py-2 font-normal">Company</th>{" "}
              <th className="px-4 py-2 font-normal">Service</th>{" "}
              <th className="px-4 py-2 font-normal">Phone</th>
              <th className="px-4 py-2 font-normal">Business</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, i) => (
              <tr
                key={item.id}
                className="h-[100px] hover:bg-[#E6E6E7] duration-200 font-normal border border-[#E6E6E7] text-sm"
              >
                <td className="px-4 py-2">{indexOfFirstItem + i + 1}</td>
                <td className="px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.companyName}</td>
                <td className="px-4 py-2">{item.service}</td>
                <td className="px-4 py-2">{item.phoneNumber}</td>
                <td className="px-4 py-2">{item.businessName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          {" "}
          <h1 className="font-semibold text-xl">Contact Enquiries</h1>{" "}
          <p className="font-medium text-base text-[#858585] leading-6 mt-2">
            {" "}
            See all enquiries{" "}
          </p>{" "}
        </div>
        <button
          onClick={() => setShowExportModal(true)}
          className="bg-[#2E77BC] flex items-center px-6 py-2 text-white rounded-lg"
        >
          Export <img src={exportIcon} alt="export" className="ml-1" />
        </button>
      </div>
      <div className="border-b border-[#C1DBD8] w-full mt-6"></div>
      {/* Tabs */}
      <div className="flex gap-6 mt-6 text-sm font-medium">
        {["All Enquiries", "Services", "Location", "Contact enquiry"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              className={`pb-2 ${
                activeTab === tab
                  ? "text-[#0C45C7] border-b-2 text-sm font-bold border-[#0C45C7]"
                  : "text-[#A4A4A4] font-semibold"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">{renderTable()}</div>

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

export default AdminContact;
