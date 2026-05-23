import { useContext } from "react";
import {
    ChannelImage,
    Container,
    ImageBanner,
    TextCard,
    TextContainer,
    Title,
    TitleContainer
} from "./styles";
import { VideoContext } from "../../contexts/VideoContext";

interface IProps {
    image: string,
    title: string,
    user_name: string,
    views: number,
    time: string,
    date: string,
    video_id: string,
}

const diferencaEmDias = (dataVideo: string) => {
    const hoje = new Date();
    const data = new Date(dataVideo);
    const diferenca = hoje.getTime() - data.getTime();
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    return dias;
}

const tempoPassado = (dataVideo: string) => {
    const dias = diferencaEmDias(dataVideo);

    if (dias === 0) return 'Hoje';
    if (dias === 1) return 'Ontem';
    if (dias < 7) return `há ${dias} dias atrás`;
    if (dias < 30) return `há ${Math.floor(dias / 7)} semanas atrás`;
    if (dias < 365) return `há ${Math.floor(dias / 30)} meses atrás`;
    return `há ${Math.floor(dias / 365)} anos atrás`;
}

const viewsFormat = (views: number) => {
    if (views === 0) return 'nenhuma visualização'
    if (views === 1) return '1 visualização'
    if (views < 1000) return `${views} visualizações`
    if (views < 1000000) return `${(views / 1000).toFixed(1).replace('.0', '')} mil visualizações`
    return `${(views / 1000000).toFixed(1).replace('.0', '')} mi visualizações`
}

function VideoComponent({ video }: { video: IProps }) {
    const nome = video.user_name as string;

    const { videoAddviews } = useContext(VideoContext);

    const BASE_URL = process.env.REACT_APP_API_URL
    const PLACEHOLDER = 'https://i.ytimg.com/vi/T0mzlyJ_xqs/hq720.jpg';

    return (
        <Container onClick={() => videoAddviews(video.video_id)}>
            <ImageBanner src={video.image ? `${BASE_URL}/uploads/${video.image}` : PLACEHOLDER} />
            <TitleContainer>
                <ChannelImage>
                    {nome?.charAt(0) || ""}
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.user_name}</TextCard>
                    <TextCard>
                        {viewsFormat(video.views)} • {tempoPassado(video.date)}
                    </TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;