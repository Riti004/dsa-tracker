"use client";

import { useState } from "react";
import FormField from "@/components/FormField";
import SelectField from "@/components/SelectField";

type FormData = {
  title: string;
  link: string;
  topic: string;
  difficulty: string;
  notes: string;
};

export default function AddQuestion() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    link: "",
    topic: "",
    difficulty: "Easy",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Question submitted:", formData);
    alert("Question added! Check the console.");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-8">
        Add New Question
      </h1>

      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <FormField
            label="Question Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Two Sum"
            required
          />

          <FormField
            label="Problem Link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://leetcode.com/problems/..."
            type="url"
            required
          />

          <FormField
            label="Topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            placeholder="e.g. Arrays, Dynamic Programming"
            required
          />

          <SelectField
            label="Difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            options={["Easy", "Medium", "Hard"]}
            required
          />

          <FormField
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Write your approach, key observations..."
            isTextArea
          />

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-150"
          >
            Add Question
          </button>

        </form>
      </div>
    </div>
  );
}