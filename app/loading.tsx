export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col gap-8 p-6">
      {/* 🔹 Header Skeleton */}
      <div className="h-16 w-full rounded-lg bg-gray-200 animate-pulse" />

      {/* 🔹 Cards Skeleton */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 flex-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-4 space-y-4"
          >
            <div className="h-32 w-full rounded-md bg-gray-200 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>

      {/* 🔹 Footer Skeleton */}
      <div className="h-12 w-full rounded-lg bg-gray-200 animate-pulse" />
    </div>
  );
}
