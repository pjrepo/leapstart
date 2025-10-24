"use client";

import React from "react";

interface CourseDetailsPageProps {
  params: {
    courseId: string;
  };
}

const CourseDetailsPage = ({ params }: CourseDetailsPageProps) => {
  return (
    <div className="bg-[#040404] min-h-screen font-syne flex items-center justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
        Course Details Page
      </h1>
    </div>
  );
};

export default CourseDetailsPage;
