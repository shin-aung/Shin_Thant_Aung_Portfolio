import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "math-lecturer",
    company: "Marvellous Kid Education Center",
    role: "Part-Time Mathematics Lecturer",
    period: "Myanmar",
    summary:
      "Coached children preparing for prestigious international mathematics competitions, simplifying advanced concepts to build confidence and achieve strong competition results.",
    responsibilities: [
      "Coached students for TIMO, SEAMO, Math Kangaroo, and National Mathematics Olympiad of Myanmar",
      "Simplified advanced mathematical concepts and problem-solving techniques for young learners",
      "Helped students build confidence and achieve strong competition results",
    ],
    techStack: [],
  },
  {
    id: "onify",
    company: "Onify Tech Company",
    role: "Junior Full Stack Software Developer / Engineer",
    period: "Jan 2025 – Sep 2025",
    summary:
      "Worked on customer-facing and internal software platforms, contributing to frontend interfaces, backend services, authentication, API documentation, mobile deployment, and AI API integration.",
    subRoles: [
      {
        title: "Asset Wins — Customer-Facing Mobile & Web Platform",
        responsibilities: [
          "Led Android & iOS production deployments, managing build configurations and release pipelines with FlutterFlow",
          "Designed and developed backend services using C# and .NET, exposing secure and scalable RESTful APIs",
          "Integrated OpenAI APIs to process and transform PDF, CSV, and PNG files into structured machine-readable outputs",
        ],
        techStack: ["FlutterFlow", "C#", ".NET", "REST API", "OpenAI API"],
      },
      {
        title: "Beny — Internal Company Software Platform",
        responsibilities: [
          "Developed and maintained full-stack web applications using Next.js, React, and Mantine",
          "Implemented authentication, authorization, and real-time data features using Supabase",
          "Conducted API testing and documentation using Swagger to ensure service consistency",
          "Collaborated in an Agile environment, using Git for version control and contributing to CI/CD pipelines",
        ],
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "Supabase",
          "Mantine",
          "Swagger",
          "CI/CD",
        ],
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "C#",
      ".NET",
      "Supabase",
      "OpenAI API",
      "Swagger",
      "Git",
    ],
    responsibilities: [],
  },
];
