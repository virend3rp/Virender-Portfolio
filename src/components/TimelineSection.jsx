import React from "react";

const timeline = [
  { year: "2021", detail: "Graduated with B.Tech in Engineering" },
  { year: "2022", detail: "Started working on personal dev projects" },
  { year: "2023", detail: "Built Reddit Dashboard & Cricket Visualizer" },
];

export default function TimelineSection() {
  return (
    <section className="bg-[#fef3c7] text-[#1f2937]">
      <h2 className="text-3xl font-semibold text-center mb-8">Journey</h2>
      <div className="space-y-6 max-w-xl mx-auto">
        {timeline.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="text-orange-600 font-bold">{item.year}</div>
            <p className="text-gray-800">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
