import client from "@/lib/client"
import { GetAllSales } from "@/lib/queries"
import { useQuery } from "@tanstack/react-query"

const useGetAllSales = () => {
  const query = useQuery({
    queryKey: ["getAllSales"],
    queryFn: async () => {
      const { data } = await client.query({
        query: GetAllSales,
        fetchPolicy: "cache-first",
        errorPolicy: "all",
      })
      console.log("Fetched token sales:", data.uniPumpCreatorSaless.items)
      return data.uniPumpCreatorSaless.items
    },
    staleTime: 30000, // 30 seconds
    gcTime: 300000, // 5 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })

  return {
    data: query.data,
    isLoading: query.isLoading,
    isPending: query.isPending,
    error: query.error,
    refetch: query.refetch,
  }
}

export default useGetAllSales
