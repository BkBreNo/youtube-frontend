import { createContext, ReactNode, useCallback, useEffectEvent, useState } from "react";
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
    date: string;
    views: number;
    video: string,
    image_color: string,
}

type VideoContextType = {
    info: string,
    setInfo: (newState: string) => void,
    listVideos: ListVideosProps[],
    setListVideos: (newState: ListVideosProps[]) => void,
    createVideo: (token: string, image: File | null, title: string, description: string, user_id: string, date: string, views: Number) => void,
    searchVideo: (search: string) => void,
    videoAddviews: (video_id: string) => void,
    getVideo: (video_id: string) => void
}

const initialValue = {
    info: '',
    setInfo: () => { },
    listVideos: [] as ListVideosProps[],
    setListVideos: () => { },
    createVideo: () => { },
    searchVideo: () => { },
    videoAddviews: () => { },
    getVideo: () => { },
}

export const VideoContext = createContext<VideoContextType>(initialValue);

export const VideoStorage = ({ children }: VideoStorageProps) => {
    const [info, setInfo] = useState(initialValue.info);
    const [listVideos, setListVideos] = useState(initialValue.listVideos);

    const createVideo = (token: string, image: File | null, title: string, description: string, user_id: string, date: string, views: Number) => {

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('user_id', user_id);
        formData.append('date', date);
        formData.append('views', String(views));

        if (image) {
            formData.append('image', image);
        }
        api.post('/videos/create-video', formData, { headers: { Authorization: token, 'Content-Type': 'multipart/form-data' } }).then(({ data }) => {
            setInfo(data.message);
        }).catch(() => {
            setInfo('Não foi possivel criar o video, tente novamente');
        })
    }

    const getVideo = useCallback((video_id: string) => {
        api.get('/videos/get-video', { params: { video_id } }).then(({ data }) => {
            setListVideos(data.videos);
        }).catch(() => { })
    }, []);

    const searchVideo = useEffectEvent((search: string) => {
        api.get('/videos/search', { params: { search } }).then(({ data }) => {
            setListVideos(data.videos);
        }).catch(() => { });
    });

    const videoAddviews = (video_id: string) => {
        api.post('/videos/addviews', { video_id }).then(({ data }) => { }).catch(() => { })
    }

    return (
        <VideoContext.Provider value={{
            createVideo,
            info,
            setInfo,
            getVideo,
            setListVideos,
            searchVideo,
            listVideos,
            videoAddviews,
        }}>
            {children}
        </VideoContext.Provider>
    )
}