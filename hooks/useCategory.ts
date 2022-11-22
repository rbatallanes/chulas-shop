import useSWR, { SWRConfiguration } from 'swr'
import { Categories } from '../interfaces'

export const useCategory=(url: string,config: SWRConfiguration={})=>{

    const { data, error } = useSWR<Categories[]>(`${process.env.NEXT_PUBLIC_PUBLIC_URL}${url}`, config)

    return {
        category: data || [],
        isLoading: !error && !data,
        isError: error,
    }
}