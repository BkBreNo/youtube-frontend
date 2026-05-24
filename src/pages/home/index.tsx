import { useContext, useEffect } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import VideoComponent from "../../components/videoComponent";
import {
    HomeContainer,
    Container,
    FilterContainer,
    FilterCategory,
} from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { VideoContext } from "../../contexts/VideoContext";

function Home() {
    const { openMenu, } = useContext(MenuContext);
    const { setRegister } = useContext(UserContext);

    const { setInfo, listVideos, searchVideo } = useContext(VideoContext);
    useEffect(() => {
        setRegister(null)
        setInfo('');
        searchVideo('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <HomeContainer>
            <FilterContainer>
                <FilterCategory>Tudo</FilterCategory>
                <FilterCategory>Música</FilterCategory>
                <FilterCategory>Mixes</FilterCategory>
                <FilterCategory>Lista de reprodução</FilterCategory>
                <FilterCategory>Jogos</FilterCategory>
                <FilterCategory>Hillsong United</FilterCategory>
                <FilterCategory>Ao vivo</FilterCategory>
                <FilterCategory>Guitarras clássicas</FilterCategory>
                <FilterCategory>Contemporary workship music</FilterCategory>
                <FilterCategory>Inteligência artificialc</FilterCategory>
                <FilterCategory>Música brasileira</FilterCategory>
                <FilterCategory>Computadores</FilterCategory>
            </FilterContainer>
            <Container $openMenu={openMenu}>
                {openMenu ?
                    listVideos.slice(0, 3).map((listVideos: any) => (
                        <VideoComponent key={listVideos.title} video={listVideos} />
                    ))
                    :
                    listVideos.slice(0, 4).map((listVideos: any) => (
                        <VideoComponent key={listVideos.title} video={listVideos} />
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