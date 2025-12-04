export type AlbumType = {
    title: string,
    cover: string,
    artist: ArtistType
}

export type MusicType = {
    id: number,
    title: string,
    path: string,
    feat: ArtistType[]
    album: AlbumType
}

export type ArtistType = {
    id: number,
    name: string
}