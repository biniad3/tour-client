import React, { useEffect, useState } from "react";

const statsData = [
  { id: 1, value: 5962, label: "Projects Completed" },
  { id: 2, value: 2394, label: "New Projects" },
  { id: 3, value: 1439, label: "Tickets Submitted" },
  { id: 4, value: 933, label: "Cup of Coffee" },
];

const faqs = [
  {
    question: "ARE YOUR TEMPLATES RESPONSIVE?",
    answer:
      "Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.",
  },
  {
    question: "DOES IT HAVE ALL THE PLUGIN AS MENTIONED?",
    answer:
      "Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.",
  },
  {
    question: "CAN I USE THESE THEMES FOR MY CLIENT?",
    answer:
      "Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior.",
  },
];

function Faq() {
  const [counts, setCounts] = useState(
    statsData.map(() => 0) // Initialize counts as zero
  );

  // Counter animation effect
  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      const increment = stat.value / 100; // Speed control
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.ceil(newCounts[index] + increment);
          } else {
            clearInterval(intervals[index]);
            newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 20); // Update every 20ms
    });

    return () => intervals.forEach(clearInterval); // Cleanup intervals
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-50 pt-24" id="Faq">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Stats Section */}
        <div className="w-full md:w-1/3 p-5">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="mb-8 text-center p-6 border border-gray-300 rounded-lg shadow-lg bg-white"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-purple-600">
                {counts[index]}
              </h2>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="w-full md:w-2/3 p-5">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 mb-8">
            Who are in extremely love with eco-friendly systems.
          </p>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
