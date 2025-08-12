import { Skeleton } from "./skeleton"

export function PageSkeleton() {
  return (
    <div className="space-y-0 md:space-y-6 px-0 md:px-0">
      {/* Header skeleton */}
      <div className="bg-white dark:bg-gray-800 rounded-none md:rounded-2xl border-0 md:border border-gray-200 dark:border-gray-700 p-3 md:p-4">
        <div className="flex items-center space-x-3 mb-4">
          <Skeleton className="w-8 h-8 rounded-lg" />
          <div className="flex-1">
            <Skeleton className="h-4 w-24 mb-1" />
            <Skeleton className="h-3 w-16" />
          </div>
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
        <Skeleton className="aspect-square w-full rounded-lg mb-4" />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-8 w-16 rounded-full" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  )
}

export function ProfileSkeleton() {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-6">
      <div className="text-center space-y-4">
        <Skeleton className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="text-center">
          <Skeleton className="h-6 w-8 mx-auto mb-1" />
          <Skeleton className="h-3 w-12 mx-auto" />
        </div>
        <div className="text-center">
          <Skeleton className="h-6 w-8 mx-auto mb-1" />
          <Skeleton className="h-3 w-12 mx-auto" />
        </div>
      </div>
    </div>
  )
}

export function ExploreSkeleton() {
  return (
    <div className="space-y-4">
      {/* Search bar skeleton */}
      <div className="md:hidden">
        <Skeleton className="h-12 w-full rounded-full" />
      </div>

      {/* Category tabs skeleton */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <Skeleton className="h-8 w-8 rounded-lg flex-shrink-0" />
        <Skeleton className="h-8 w-20 rounded-full flex-shrink-0" />
        <Skeleton className="h-8 w-24 rounded-full flex-shrink-0" />
        <Skeleton className="h-8 w-16 rounded-full flex-shrink-0" />
      </div>

      {/* Posts skeleton */}
      <div className="space-y-0 md:space-y-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <PageSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
