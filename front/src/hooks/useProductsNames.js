import { useQuery } from '@tanstack/react-query';
const useProductsNames = (url, keyQuery) => {
  const fetchOurProducts = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${keyQuery}: ${response.status} ${response.statusText}`,
      );
    }
    const json = await response.json();
    return json.data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [keyQuery],
    queryFn: fetchOurProducts,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const productsNames = data?.map((product) => {
    return {
      name: product.name,
      id: product.id,
    };
  });

  return {
    productsNames,
    isLoading,
    isError,
    error,
  };
};

export default useProductsNames;
