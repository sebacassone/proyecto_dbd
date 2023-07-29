import { client, ResponseAPI } from "../api/client.tsx"

export const getPosts = async (): Promise<ResponseAPI[]> => {
    const { data } = await client.get<ResponseAPI[]>('?_limit=6')
    return data
}
