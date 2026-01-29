export default function Loading() {
  return (
    <div className="container mx-auto animate-pulse">
      <div className="bg-muted mb-6 h-6 w-20 rounded" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="bg-muted aspect-square rounded-xl" />

        <div className="space-y-4">
          <div className="bg-muted h-10 w-3/4 rounded" />
          <div className="bg-muted h-6 w-1/4 rounded" />
          <div className="bg-muted h-32 w-full rounded" />
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <div className="bg-muted mb-6 h-8 w-40 rounded" />
        <div className="bg-muted h-24 w-full rounded-xl" />
        <div className="bg-muted h-24 w-full rounded-xl" />
      </div>
    </div>
  );
}
