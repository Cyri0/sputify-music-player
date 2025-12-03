export type AlbumType = {
    title: string,
    cover: string,
    artist: string
}

export type MusicType = {
    id: number,
    title: string,
    path: string,
    feat: string[]
    album: AlbumType
}