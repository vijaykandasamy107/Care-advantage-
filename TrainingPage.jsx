import React from "react";

const trainingModules = [
  {
    id: 1,
    title: "Product Overview",
    description: "Learn about Care Advantage's core health insurance benefits, including hospitalization coverage, no room rent limits, and high sum insured options."
  },
  {
    id: 2,
    title: "Key Features & Benefits",
    description: "Explore features like unlimited e-consultations, automatic recharge, and comprehensive pre- and post-hospitalization coverage."
  },
  {
    id: 3,
    title: "Add-on Covers: Protect Plus, Care Shield",
    description: "Understand the benefits of add-ons like Protect Plus (global coverage, air ambulance) and Care Shield (non-payable items, inflation shield)."
  },
  {
    id: 4,
    title: "Claims & Assistance",
    description: "Learn about the seamless claim settlement process and 24/7 customer support services."
  }
];

const ModuleCard = ({ title, description }) => (
  <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-700">Care Advantage Product Training</h1>
        <p className="text-center text-gray-600">Understand Care Advantage with Protect Plus & Care Shield</p>
      </header>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {trainingModules.map((module) => (
          <ModuleCard key={module.id} title={module.title} description={module.description} />
        ))}
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        Visit <a href="https://www.careinsurance.com" className="text-blue-500 underline">careinsurance.com</a> for more info.
      </footer>
    </div>
  );
}