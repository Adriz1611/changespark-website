"use client"

export default function Loading() {
  return (
    <div class="flex-col gap-4 w-full flex items-center justify-center min-h-screen bg-background-100">
      <div class="w-20 h-20 border-4 border-transparent text-primary-400 text-4xl animate-spin flex items-center justify-center border-t-primary-400 rounded-full">
        <div class="w-16 h-16 border-4 border-transparent text-secondary-400 text-2xl animate-spin flex items-center justify-center border-t-secondary-400 rounded-full"></div>
      </div>
    </div>
  );
}
