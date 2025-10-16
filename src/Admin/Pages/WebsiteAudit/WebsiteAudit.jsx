import React, { useEffect, useState } from "react";
import Export from "@assets/AdminSideBar/Export.svg";
import Api from "../../../Services/Api";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import rightArrow from "@assets/icons/rightArrow.svg";
import leftArrow from "@assets/icons/leftArrow.svg";
import axios from "axios";

function WebsiteAudit() {
  const [audits, setAudits] = useState([]);
  const [showExportModal, setShowExportModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [downloading, setDownloading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const itemsPerPage = 10;

  const API_KEY = import.meta.env.VITE_PAGESPEED_API_KEY;

  useEffect(() => {
    Api.get("api/audit/all").then((response) => {
      if (response && response.status === 200) {
        setAudits(response.data.data.reverse());
      } else {
        console.error("Error fetching audits:", response);
      }
    });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = audits.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(audits.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const handleExportPDF = () => {
    const from = new Date(startDate);
    const to = new Date(endDate);
    to.setHours(23, 59, 59, 999);

    const filteredData = audits.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return itemDate >= from && itemDate <= to;
    });

    const doc = new jsPDF();
    autoTable(doc, {
      head: [["Sl.No", "Date", "Name", "Email", "Contact", "Business Name", "Website URL"]],
      body: filteredData.map((item, index) => [
        index + 1,
        new Date(item.createdAt).toLocaleDateString("en-GB"),
        item.name,
        item.email,
        item.phoneNo,
        item.businessName,
        item.websiteUrl,
      ]),
      styles: { fontSize: 8 },
      headStyles: { fillColor: [4, 163, 145] },
      margin: { top: 20 },
    });

    doc.save(`Website_Audit_${startDate}_to_${endDate}.pdf`);
    setShowExportModal(false);
  };

  const LIGHTHOUSE_METRICS = [
    { key: "first-contentful-paint", label: "first-contentful-paint" },
    { key: "largest-contentful-paint", label: "largest-contentful-paint" },
    { key: "cumulative-layout-shift", label: "cumulative-layout-shift" },
    { key: "total-blocking-time", label: "total-blocking-time" },
  ];

  const handleDownloadReport = async (url) => {
    try {
      if (!url) return alert("No URL provided");
      if (!API_KEY) return alert("Missing Google PageSpeed API key. Check .env");

      setDownloading(true);
      setDownloadUrl(url);

      const encodedUrl = encodeURIComponent(url);
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodedUrl}&key=${API_KEY}`
      );

      const data = response.data.lighthouseResult;

      const doc = new jsPDF("p", "mm", "a4");
      doc.setFontSize(14);
      doc.text("Website Performance Audit Report", 14, 15);
      doc.setFontSize(10);
      doc.text(`Website: ${url}`, 14, 25);
      doc.text(`Date: ${new Date().toLocaleString()}`, 14, 32);

      const metricsBody = LIGHTHOUSE_METRICS.map((metric) => {
        const value = data.audits[metric.key]?.displayValue || "N/A";
        return [metric.label, value];
      });

      autoTable(doc, {
        startY: 40,
        head: [["Metric", "Value"]],
        body: metricsBody,
        styles: { fontSize: 10 },
        headStyles: { fillColor: [4, 163, 145] },
      });

      const startY = doc.lastAutoTable.finalY + 10;
      const auditKeys = Object.keys(data.audits).slice(0, 20);
      const auditBody = auditKeys.map((key) => [
        key,
        data.audits[key].score ?? data.audits[key].displayValue ?? "N/A",
      ]);

      autoTable(doc, {
        startY,
        head: [["Audit Item", "Value"]],
        body: auditBody,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [64, 128, 128] },
      });

      doc.save(`pagespeed-report-${new URL(url).hostname}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Failed to fetch PageSpeed data");
    } finally {
      setDownloading(false);
      setDownloadUrl("");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-6 border-[#C1DBD8]">
        <div>
          <h1 className="text-[20px] font-semibold leading-6">Website Audit Enquiries</h1>
          <h1 className="text-base font-medium text-[#858585] mt-2">See all enquiries</h1>
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
              <h2 className="text-xs text-center font-medium">Select date range</h2>
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
                      ? "bg-[#2E77BC] hover:bg-[#1B5A96] opacity-70"
                      : "bg-[#2E77BC] hover:bg-[#1B5A96]"
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
      <div className="overflow-x-auto mt-6">
        <table className="w-full ">
          <thead>
            <tr className="bg-[#00a8a3] h-[40px] text-left text-sm font-medium text-white">
              <th className="px-4 py-2 rounded-tl-lg font-normal">Sl.No</th>
              <th className="px-4 py-2 font-normal ">Date</th>
              <th className="px-4 py-2 font-normal ">Name</th>
              <th className="px-4 py-2 font-normal ">Email ID</th>
              <th className="px-4 py-2 font-normal ">Contact</th>
              <th className="px-4 py-2 font-normal ">Business Name</th>
              <th className="px-4 py-2 font-normal ">Website URL</th>
              <th className="px-4 py-2 rounded-tr-lg font-normal">Audit Report</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className="h-[60px]  hover:bg-[#E6E6E7] duration-200 font-normal border border-[#E6E6E7] text-sm"
              >
                <td className="px-4 py-2 w-[40px]">{(currentPage - 1) * itemsPerPage + index + 1}</td>
  <td className="px-4 py-2 w-[100px]">{item.createdAt ? new Date(item.createdAt).toLocaleDateString("en-GB") : "N/A"}</td>
  <td className="px-4 py-2 w-[120px] truncate">{item.name || "N/A"}</td>
  <td className="px-4 py-2 w-[150px] truncate">{item.email || "N/A"}</td>
  <td className="px-4 py-2 w-[120px] truncate">{item.phoneNo || "N/A"}</td>
  <td className="px-4 py-2 w-[150px] truncate">{item.businessName || "N/A"}</td>
  <td className="px-4 py-2 w-[200px] truncate">{item.websiteUrl || "N/A"}</td>
  <td className="px-4 py-2 w-[130px]">
                  <button
                    disabled={downloading}
                    onClick={() => handleDownloadReport(item.websiteUrl)}
                    className="flex items-center gap-2 text-[#2E77BC] font-medium hover:underline"
                  >
                    {downloading && downloadUrl === item.websiteUrl ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 14a1 1 0 011-1h3v-4h4v4h3a1 1 0 011 1v2H3v-2z" />
                          <path d="M7 10l3-3 3 3H7z" />
                        </svg>
                        Download
                      </>
                    )}
                  </button>
                </td>
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
