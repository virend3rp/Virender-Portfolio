// src/components/LeetCodeStatsSection.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LeetCodeStatsSection() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = "Vir3nd3rp"; // 🔁 Replace with your LeetCode username

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
        setStats(res.data);
      } catch (error) {
        console.error("Error fetching LeetCode stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-16">Loading LeetCode stats...</div>;

  if (!stats || stats.status === "error")
    return <div className="text-center py-16 text-red-600">Failed to load LeetCode stats.</div>;

  return (
    <section className="bg-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">My LeetCode Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-medium">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-700">Total Solved</h3>
            <p className="text-3xl text-blue-900 mt-2">{stats.totalSolved}</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-purple-700">Easy / Medium / Hard</h3>
            <p className="text-3xl text-purple-900 mt-2">
              {stats.easySolved} / {stats.mediumSolved} / {stats.hardSolved}
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700">Ranking</h3>
            <p className="text-3xl text-green-900 mt-2">
              {stats.ranking ? `${stats.ranking}` : "N/A"}
            </p>
          </div>
        </div>
        <a
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-white bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover:scale-105 transition-transform"
        >
          View My LeetCode Profile
        </a>
      </div>
    </section>
  );
}
