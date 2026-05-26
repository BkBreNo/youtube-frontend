import { useContext, useEffect } from "react";
import {
    HomeContainer,
    Container,
} from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { VideoContext } from "../../contexts/VideoContext";
import { useSearchParams } from "react-router-dom";
import FilterComponent from "../../components/FilterComponent";
import VideoResultsComponent from "../../components/videoResultsComponent";

function Results() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search_query');

    const { setRegister } = useContext(UserContext);

    const { setInfo, listVideos, searchVideo } = useContext(VideoContext);

    useEffect(() => {
        setRegister(null)
        setInfo('');
    }, [])

    useEffect(() => {
        searchVideo(searchQuery ?? '')
    }, [searchQuery])

    return (
        <HomeContainer>
            <FilterComponent />
            <Container>
                {
                    listVideos.map((listVideos: any) => (
                        <VideoResultsComponent key={listVideos.title} video={listVideos} />
                    ))
                }
            </Container>
        </HomeContainer>
    )
}

export default Results;