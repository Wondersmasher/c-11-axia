import { useEffect, useState } from "react";

type StoreType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
const useFetch = () => {
  const [store, setStore] = useState<Array<StoreType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Array<StoreType> = await res.json();
        setStore(data);
      } catch (error) {
        console.log(error, "Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetcher();
  }, []);

  return [store, isLoading]; //=> same with the return store:store, isLoading:isLoading
};
export { useFetch };
