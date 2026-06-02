import { useContext } from "react";
import {
    ChannelImage,
    Container,
    Content,
    ContentContainer,
    ContentEF,
    Icon,
    ImageBanner,
    TextCard,
    TextContainer,
    Title,
    TitleContainer,
} from "./styles";
import { VideoContext } from "../../contexts/VideoContext";
import { useNavigate } from "react-router-dom";

interface IProps {
    image: string,
    title: string,
    user_name: string,
    views: number,
    time: string,
    date: string,
    video_id: string,
    image_color: string,
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
    if (views === 0) return 'nenhuma'
    if (views === 1) return '1'
    if (views < 1000) return `${views}`
    if (views < 1000000) return `${(views / 1000).toFixed(0).replace('.0', '')} mil`
    return `${(views / 1000000).toFixed(0).replace('.0', '')} mi`
}


function VideoComponent({ video }: { video: IProps }) {
    const navigate = useNavigate();

    const nome = video.user_name as string;

    const BASE_URL = process.env.REACT_APP_API_URL
    const image = video.image ? `${BASE_URL}/uploads/${video.image}` : 'https://i.ytimg.com/vi/T0mzlyJ_xqs/hq720.jpg';

    const bgColor = video.image_color ? JSON.parse(video.image_color) : [0, 0, 0];

    return (
        <Container $color={bgColor} onClick={() => navigate(`/watch?v=${video.video_id}`)}>
            <ContentEF $color={bgColor} />
            <Content>
                <ImageBanner src={image} />
                <ContentContainer>
                    <ChannelImage>
                        {nome?.charAt(0) || ""}
                    </ChannelImage>
                    <TitleContainer>
                        <Title>{video.title}</Title>
                        <TextContainer>
                            <TextCard>{video.user_name}</TextCard>
                            <Icon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M5 4.623v14.755a1.5 1.5 0 002.261 1.294l12.766-7.51L22 12.002l-1.973-1.162L7.26 3.33A1.5 1.5 0 005 4.623Zm2 13.88V5.497L18.056 12 7 18.503Z"></path></Icon>
                            <TextCard>
                                {viewsFormat(video.views)}  {tempoPassado(video.date)}
                            </TextCard>
                        </TextContainer>
                    </TitleContainer>
                </ContentContainer>
            </Content>
        </Container>
    )
}

export default VideoComponent;