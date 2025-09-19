"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-secondary-700 mb-2">
          Loading Blog Posts
        </h2>
        <p className="text-secondary-600">
          Please wait while we fetch the latest content...
        </p>
      </div>
    </div>
  );
}
