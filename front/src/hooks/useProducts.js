import { useQuery } from '@tanstack/react-query';

const useProducts = (url, key) => {
  const fetchProducts = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${key}: ${response.status} ${response.statusText}`,
      );
    }
    const json = await response.json();
    return json.data;
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [key],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useProducts;
