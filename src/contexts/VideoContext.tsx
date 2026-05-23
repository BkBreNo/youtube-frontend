import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../api";

type VideoStorageProps = {
    children: ReactNode;
}

type ListVideosProps = {
    video_id: string;
    title: string;
    description: string;
    image: string | null;
    user_id: string;
    user_name: string;
    date: Date;
    views: number;
}

type VideoContextType = {
    info: string,
    setInfo: (newState: string) => void,
    listVideos: ListVideosProps[],
    createVideo: (token: string, title: string, description: string, user_id: string, date: string, views: Number) => void,
    searchVideo: (search: string) => void,
    videoAddviews: (video_id: string) => void,
}

const initialValue = {
    info: '',
    setInfo: () => { },
    listVideos: [] as ListVideosProps[],
    createVideo: () => { },
    searchVideo: () => { },
    videoAddviews: () => { },
}

export const VideoContext = createContext<VideoContextType>(initialValue);

export const VideoStorage = ({ children }: VideoStorageProps) => {
    const [info, setInfo] = useState(initialValue.info);
    const [listVideos, setListVideos] = useState(initialValue.listVideos);

    const createVideo = (token: string, title: string, description: string, user_id: string, date: string, views: Number) => {
        api.post('/videos/create-video', { title, description, user_id, date, views }, { headers: { Authorization: token } }).then(({ data }) => {
            setInfo(data.message);
        }).catch(() => {
            setInfo('Não foi possivel criar o video, tente novamente');
        })
    }

    const searchVideo = (search: string = '') => {
        api.get('/videos/search', { params: { search } }).then(({ data }) => {
            setListVideos(data.videos);
        }).catch(() => { })
    }

    const videoAddviews = (video_id: string) => {
        api.post('/videos/addviews', { video_id }).then(({ data }) => { }).catch(() => { })
    }

    return (
        <VideoContext.Provider value={{
            createVideo,
            info,
            setInfo,
            searchVideo,
            listVideos,
            videoAddviews,
        }}>
            {children}
        </VideoContext.Provider>
    )
}