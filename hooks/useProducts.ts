import useSWR, { SWRConfiguration } from 'swr'
import { ICustomProduct, Product } from '../interfaces'
import { shopApi } from '../api'

export const useProducts=(url: string,config: SWRConfiguration={})=>{

    //arreglar el fetch

    // const fetcher = async (url: string) => {
    //     const response = await fetch(url, {
    //       credentials: 'include'
    //     });
    //     return response.json();
    //   };

    // const { data, error } = useSWR<ICustomProduct[]>(`${process.env.NEXT_PUBLIC_PUBLIC_URL}${url}`,
    //   fetcher, config)

    const response  = shopApi.get<ICustomProduct[]>(url)
    

    return {
        // products: data || [],
        // isLoading: !error && !data,
        // isError: error,
        products: response || [],
        isLoading: false
    }
}