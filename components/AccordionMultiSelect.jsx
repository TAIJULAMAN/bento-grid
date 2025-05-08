import { useState } from "react";

const accordionData = [
  {
    title: "Project Planning",
    content:
      "Define project scope, objectives, and deliverables. Create detailed timelines, allocate resources, and establish key milestones. Use agile methodologies for flexible project management.",
  },
  {
    title: "Team Collaboration",
    content:
      "Foster effective communication and teamwork. Use collaboration tools, conduct regular stand-ups, and maintain clear documentation. Encourage knowledge sharing and peer reviews.",
  },
  {
    title: "Quality Assurance",
    content:
      "Implement comprehensive testing strategies including unit tests, integration tests, and end-to-end testing. Conduct code reviews and maintain coding standards for high-quality deliverables.",
  },
  {
    title: "Client Communication",
    content:
      "Maintain transparent communication with clients through regular updates and progress reports. Gather feedback, address concerns, and ensure client satisfaction throughout the project.",
  },
  {
    title: "Risk Management",
    content:
      "Identify potential risks and develop mitigation strategies. Monitor project health, track issues, and implement contingency plans when needed. Regular risk assessment and updates.",
  },
];

export default function AccordionMultiSelect() {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleToggle = (index) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSelectAll = () => {
    setActiveIndexes(
      activeIndexes.length === accordionData.length
        ? []
        : accordionData.map((_, index) => index)
    );
  };

  return (
    <div>
      <button
        onClick={handleSelectAll}
        className="mb-4 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg 
          hover:bg-indigo-100 transition-colors duration-200"
      >
        {activeIndexes.length === accordionData.length
          ? "Collapse All"
          : "Expand All"}
      </button>

      <div className="space-y-3">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`bg-white border rounded-xl transition-all duration-300 
              ${
                activeIndexes.includes(index)
                  ? "border-indigo-200 shadow-lg shadow-indigo-50"
                  : "border-gray-200 hover:border-indigo-200"
              }`}
          >
            <button
              className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
              onClick={() => handleToggle(index)}
            >
              <p
                className={`font-medium transition-colors duration-200 
                ${
                  activeIndexes.includes(index)
                    ? "text-indigo-600"
                    : "text-gray-700"
                }`}
              >
                {item.title}
              </p>
              <svg
                className={`w-4 h-4 transition-transform duration-200 
                  ${activeIndexes.includes(index) ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-200 ease-in-out overflow-hidden 
                ${activeIndexes.includes(index) ? "max-h-48" : "max-h-0"}`}
            >
              <div className="px-6 pb-4 pt-2">
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}