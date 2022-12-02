import useSWR, { SWRConfiguration } from 'swr'
import { ICustomProduct, Product } from '../interfaces'

export const useProducts=(url: string,config: SWRConfiguration={})=>{

    const { data, error } = useSWR<ICustomProduct[]>(`${process.env.NEXT_PUBLIC_PUBLIC_URL}${url}`, config)

    return {
        products: data || [],
        isLoading: !error && !data,
        isError: error,
    }
}