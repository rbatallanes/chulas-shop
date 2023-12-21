import useSWR, { SWRConfiguration } from 'swr'
import { ICustomProduct, Product } from '../interfaces'
import { shopApi } from '../api'
import { HeadersDefaults } from 'axios';



export const useProducts=(url: string,config: SWRConfiguration={})=>{

    const { data, error } = useSWR<ICustomProduct[]>(
      `${process.env.NEXT_PUBLIC_PUBLIC_URL}${url}`,
      (url) => fetch(url, { credentials: "include" }).then((res) => res.json()),
      config
    );    

    return {
        products: data || [],
        isLoading: !error && !data,
        isError: error,
        
        // products: response || [],
        // isLoading: false
    }
}