import useSWR, { SWRConfiguration } from 'swr'
import { Article } from '../interfaces'

//const fetcher = (...args: [key:string]) => fetch(...args).then((res) => res.json())

export const useArticles=(url: string,config: SWRConfiguration={})=>{

    //const { data, error } = useSWR<Article[]>(`${process.env.NEXT_PUBLIC_PUBLIC_URL}${url}`, fetcher,config)
    const { data, error } = useSWR<Article[]>(`${process.env.NEXT_PUBLIC_PUBLIC_URL}${url}`, config)

    return {
        articles: data || [],
        isLoading: !error && !data,
        isError: error,
    }
}