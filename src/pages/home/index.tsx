import { useContext, useEffect } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import VideoComponent from "../../components/videoComponent";
import {
    HomeContainer,
    Container,
} from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { VideoContext } from "../../contexts/VideoContext";
import FilterComponent from "../../components/FilterComponent";

function Home() {
    const { openMenu, setResults } = useContext(MenuContext);
    const { setRegister } = useContext(UserContext);

    const { setInfo, listVideos, searchVideo } = useContext(VideoContext);

    useEffect(() => {
        setRegister(null)
        setInfo('');
        setResults('');
        searchVideo('');
    }, [setRegister, setInfo, setResults, searchVideo])

    return (
        <HomeContainer>
            <FilterComponent />
            <Container $openMenu={openMenu}>
                {openMenu ?
                    listVideos.slice(0, 3).map((listVideos: any) => (
                        <VideoComponent key={listVideos.video_id} video={listVideos} />
                    ))
                    :
                    listVideos.slice(0, 4).map((listVideos: any) => (
                        <VideoComponent key={listVideos.video_id} video={listVideos} />
                    ))
                }

            </Container>
            <span>shorts</span>
            <Container $openMenu={openMenu}>
                {openMenu ?
                    listVideos.slice(3).map((listVideos: any, i: any) => (
                        <VideoComponent key={i} video={listVideos} />
                    ))
                    :
                    listVideos.slice(4).map((listVideos: any, i: any) => (
                        <VideoComponent key={i} video={listVideos} />
                    ))
                }
            </Container>
        </HomeContainer>
    )
}

export default Home;