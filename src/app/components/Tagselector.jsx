"use client";
import { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  // Personal
  { value: "personal-growth", label: "Personal Growth" },
  { value: "health-wellness", label: "Health & Wellness" },
  { value: "travel-lifestyle", label: "Travel & Lifestyle" },
  { value: "psychology-mindset", label: "Psychology & Mindset" },
  { value: "self-improvement", label: "Self Improvement" },

  // Professional
  { value: "career-jobs", label: "Career & Jobs" },
  { value: "finance", label: "Finance" },
  { value: "startups-business", label: "Startups & Business" },
  { value: "marketing-branding", label: "Marketing & Branding" },
  { value: "productivity", label: "Productivity" },

  // Tech & Development
  { value: "code", label: "Code" },
  { value: "ai-machine-learning", label: "AI & Machine Learning" },
  { value: "technology", label: "Technology" },
  { value: "open-source", label: "Open Source" },
  { value: "data-analytics", label: "Data & Analytics" },

  // Design & Creativity
  { value: "design-creativity", label: "Design & Creativity" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "art-illustration", label: "Art & Illustration" },
  { value: "photography-film", label: "Photography & Film" },
  { value: "writing-communication", label: "Writing & Communication" },

  // Learning & Knowledge
  { value: "education-learning", label: "Education & Learning" },
  { value: "science-research", label: "Science & Research" },
  { value: "books-literature", label: "Books & Literature" },
  { value: "podcasts-talks", label: "Podcasts & Talks" },
  { value: "language-learning", label: "Language Learning" },
  { value: "history-culture", label: "History & Culture" },

  // Media & Lifestyle
  { value: "gaming-entertainment", label: "Gaming & Entertainment" },
  { value: "news-current-events", label: "News & Current Events" },
  { value: "tools-apps", label: "Tools & Apps" },
  { value: "environment-sustainability", label: "Environment & Sustainability" },

  // Other
  { value: "other", label: "Other" },
];

const Tagselector = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient ? (
      <CreatableSelect
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={selectedOptions}
        isMulti
        options={options}
        className="w-2xs italic text-sm"
        onChange={setSelectedOptions}
        placeholder="Select or create tags..."

      />
    ) : null
  );
};

export default Tagselector;
