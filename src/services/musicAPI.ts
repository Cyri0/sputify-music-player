import axios from "axios";
import type { MusicType } from "../types/Music";

const api = axios.create({baseURL: ""})

export async function getPlaylist(){
    try {
        const response = await api.get("data.json")
        return response.data as MusicType[]
    } catch (error) {
        console.error(error)
        return []
    }
}