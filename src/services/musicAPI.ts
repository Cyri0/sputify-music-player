import axios from "axios";
import type { MusicType } from "../types/Music";

export const baseURL = "https://pns0tn0c-8000.euw.devtunnels.ms"

const api = axios.create({baseURL})

export async function getPlaylist(){
    try {
        const response = await api.get("/api/music/")
        return response.data as MusicType[]
    } catch (error) {
        console.error(error)
        return []
    }
}