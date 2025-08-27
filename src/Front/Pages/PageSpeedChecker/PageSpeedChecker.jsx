import { useState } from "react";
import axios from "axios";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

function PageSpeedChecker() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const API_KEY = "AIzaSyAWb7CmivkFCVD0hQZGKO3H4z2BmFK7yGE"; // ⚠️ Replace with your key

  const handleAuditClick = () => {
    if (!url) return;
    setShowForm(true); // show popup before fetching results
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.phone) return;

    setShowForm(false);
    setLoading(true);

    try {
      const res = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          url
        )}&strategy=mobile&key=${API_KEY}`
      );
      setResult(res.data);
    } catch (err) {
      console.error("Error fetching PageSpeed data:", err);
      setResult({ error: "Failed to fetch data" });
    }
    setLoading(false);
  };

  const getScoreColor = (score) => {
    if (score >= 0.9) return "text-green-600";
    if (score >= 0.5) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="md:px-[120px] md:mt-[75px] mx-auto ">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Website Audit Report
      </h1>

      {/* Input Section */}
      <div className="flex justify-center gap-2 mt-6 mb-6">
        <input
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border md:w-[300px] w-full rounded px-3 py-2 "
        />
        <button
          onClick={handleAuditClick}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Checking..." : "Audit"}
        </button>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Enter Your Details
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="border rounded px-3 py-2 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="border rounded px-3 py-2 w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                className="border rounded px-3 py-2 w-full"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
          {result.error ? (
            <p className="text-red-500">{result.error}</p>
          ) : (
            <>
             

              {/* Category Scores */}
              <h2 className="text-xl font-semibold mb-4">Category Scores</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(result.lighthouseResult.categories).map(
                  ([key, cat]) => (
                    <div
                      key={key}
                      className="bg-white p-4 rounded-lg shadow text-center"
                    >
                      <h3 className="font-semibold">{cat.title}</h3>
                      <p
                        className={`text-2xl font-bold ${getScoreColor(
                          cat.score
                        )}`}
                      >
                        {Math.round(cat.score * 100)}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Core Web Vitals */}
              <h2 className="text-xl font-semibold mt-6 mb-2">
                Core Web Vitals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "first-contentful-paint",
                  "largest-contentful-paint",
                  "cumulative-layout-shift",
                  "total-blocking-time",
                ].map((audit) => (
                  <div
                    key={audit}
                    className="bg-white p-4 rounded shadow text-sm"
                  >
                    <strong>
                      {result.lighthouseResult.audits[audit].title}:
                    </strong>{" "}
                    {result.lighthouseResult.audits[audit].displayValue}
                  </div>
                ))}
              </div>

              {/* Opportunities */}
              <h2 className="text-xl font-semibold mt-6 mb-2">Opportunities</h2>
              <div className="space-y-2">
                {result.lighthouseResult.audits["uses-responsive-images"]
                  ?.score !== 1 && (
                  <div className="bg-yellow-50 p-3 rounded shadow">
                    <strong>Responsive Images:</strong>{" "}
                    {
                      result.lighthouseResult.audits[
                        "uses-responsive-images"
                      ].displayValue
                    }
                  </div>
                )}
                {result.lighthouseResult.audits["render-blocking-resources"]
                  ?.score !== 1 && (
                  <div className="bg-yellow-50 p-3 rounded shadow">
                    <strong>Render Blocking Resources:</strong>{" "}
                    {
                      result.lighthouseResult.audits[
                        "render-blocking-resources"
                      ].displayValue
                    }
                  </div>
                )}
              </div>

              {/* Diagnostics */}
              <h2 className="text-xl font-semibold mt-6 mb-2">Diagnostics</h2>
              <div className="space-y-2">
                {["bootup-time", "mainthread-work-breakdown"].map((audit) => (
                  <div key={audit} className="bg-gray-50 p-3 rounded shadow">
                    <strong>
                      {result.lighthouseResult.audits[audit].title}:
                    </strong>{" "}
                    {result.lighthouseResult.audits[audit].displayValue}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default PageSpeedChecker;
