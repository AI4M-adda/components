import { Skeleton } from "@rgba/ui/components/skeleton";

export default function Loading() {
  return (
    <div className="p-4">
      <div className="mb-6">
        <Skeleton className="h-9 w-48 mb-2" />
        <Skeleton className="h-5 w-full" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-96 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  );
}
