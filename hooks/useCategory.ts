import { ICustomProduct } from './../interfaces/custom';
import useSWR, { SWRConfiguration } from 'swr'
import { Categories } from '../interfaces'

export const useCategory=(url: string,config: SWRConfiguration={})=>{

    const { data, error } = useSWR<ICustomProduct[]>(`${process.env.NEXT_PUBLIC_PUBLIC_URL}${url}`, config)

    return {
        products: data || null,
        isLoading: !error && !data,
        isError: error,
    }
}