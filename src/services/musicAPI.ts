import axios from "axios";
import type { MusicType } from "../types/Music";

const api = axios.create({baseURL: "https://pns0tn0c-8000.euw.devtunnels.ms"})

export async function getPlaylist(){
    try {
        const response = await api.get("/api/music/")
        return response.data as MusicType[]
    } catch (error) {
        console.error(error)
        return []
    }
}