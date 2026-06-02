import { useContext, useEffect } from "react";
import {
    BoldText,
    Content,
    Title,
    Video,
    VideoContent,
    Text,
    ButtonContainer,
    SvgIcon,
    ButtonIcon,
    ButtonSubscribe,
    ButtonText,
    LikeContainer,
    LikeContent,
    DescriptionContent,
} from "./styles";
import { VideoContext } from "../../contexts/VideoContext";
import { useSearchParams } from "react-router-dom";
import { MenuContext } from "../../contexts/MenuContext";
import { ChannelImage } from "../../components/videoComponent/styles";
import SetaIcon from '../../assets/icons/Seta.svg'

function Watch() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');
    const { listVideos, getVideo, setListVideos } = useContext(VideoContext);
    const { setPositionMenu, setOpenMenu } = useContext(MenuContext);

    const BASE_URL = process.env.REACT_APP_API_URL
    const infoVideo = listVideos[0];

    useEffect(() => {
        setPositionMenu(true);
        setOpenMenu(false);
        if (id) {
            setListVideos([]);
            getVideo(id);
        }

        return () => { setPositionMenu(false); setOpenMenu(true); };
    }, [id, getVideo]);

    if (!infoVideo) return <span>Carregando...</span>;

    const nome = infoVideo.user_name as string;
    const bgColor = infoVideo.image_color ? JSON.parse(infoVideo.image_color) : [0, 0, 0];

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
        if (views < 1000) return `${views}`
        if (views < 1000000) return `${(views / 1000).toFixed(0).replace('.0', '')} mil visualizações`
        return `${(views / 1000000).toFixed(0).replace('.0', '')} mi visualizações`
    }

    return (
        <Content $flexDirection={'column'}>
            <VideoContent>
                <Video controls autoPlay>
                    <source src={`${BASE_URL}/videos/stream/${infoVideo.video}`} type="video/mp4" />
                </Video>
            </VideoContent>
            <Content $padding={'4px 12px'}>
                <Content $width={'70%'} $flexDirection={'column'} $gap={'12px'}>
                    <Title>{infoVideo.title}</Title>
                    <Content $justify={'space-between'} $width={'100%'}>
                        <Content $gap={'12px'} $width={'fit-content'} $flexDirection={'center'}>
                            <ChannelImage>
                                {nome?.charAt(0) || ""}
                            </ChannelImage>
                            <Content $flexDirection={'column'}>
                                <BoldText>{infoVideo.user_name}</BoldText>
                                <Text>5 mi de inscritos</Text>
                            </Content>
                            <ButtonSubscribe>Inscrever-se</ButtonSubscribe>
                            {/* <ButtonContainer $gap={'8px'}>
                            <SvgIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="M16 19a4 4 0 11-8 0H4.765C3.21 19 2.25 17.304 3.05 15.97l1.806-3.01A1 1 0 005 12.446V8a7 7 0 0114 0v4.446c0 .181.05.36.142.515l1.807 3.01c.8 1.333-.161 3.029-1.716 3.029H16ZM12 3a5 5 0 00-5 5v4.446a3 3 0 01-.428 1.543L4.765 17h14.468l-1.805-3.01A3 3 0 0117 12.445V8a5 5 0 00-5-5Zm-2 16a2 2 0 104 0h-4Z"></path></SvgIcon>
                            <ButtonIcon alt="" src={SetaIcon} />
                        </ButtonContainer> */}
                        </Content>
                        <Content $gap={'8px'} $width={'fit-content'} $flexDirection={'center'}>
                            <LikeContainer>
                                <LikeContent $borderRadius={'50px 0 0 50px'}>
                                    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10V22M15 5.88L14 10H19.83C20.1405 10 20.4467 10.0723 20.7244 10.2111C21.0021 10.35 21.2437 10.5516 21.43 10.8C21.6163 11.0484 21.7422 11.3367 21.7977 11.6422C21.8533 11.9477 21.8369 12.2619 21.75 12.56L19.42 20.56C19.2988 20.9754 19.0462 21.3404 18.7 21.6C18.3538 21.8596 17.9327 22 17.5 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H6.76C7.13208 9.9998 7.49674 9.89581 7.81296 9.69972C8.12917 9.50363 8.38442 9.22321 8.55 8.89L12 2C12.4716 2.00584 12.9357 2.11817 13.3578 2.3286C13.7799 2.53902 14.1489 2.84211 14.4374 3.2152C14.7259 3.5883 14.9263 4.02176 15.0237 4.4832C15.1212 4.94464 15.113 5.42213 15 5.88Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </SvgIcon >
                                </LikeContent>
                                <svg width="1" height="24" viewBox="0 0 1 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 0V38" stroke="#BDBDBD" />
                                </svg>
                                <LikeContent $borderRadius={'0 50px 50px 0'}>
                                    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 14V2M9 18.12L10 14H4.17C3.85951 14 3.55328 13.9277 3.27557 13.7889C2.99786 13.65 2.75629 13.4484 2.57 13.2C2.3837 12.9516 2.2578 12.6633 2.20226 12.3578C2.14672 12.0523 2.16306 11.7381 2.25 11.44L4.58 3.44C4.70117 3.02457 4.95381 2.65964 5.3 2.4C5.64619 2.14036 6.06726 2 6.5 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V12C22 12.5304 21.7893 13.0391 21.4142 13.4142C21.0391 13.7893 20.5304 14 20 14H17.24C16.8679 14.0002 16.5033 14.1042 16.187 14.3003C15.8708 14.4964 15.6156 14.7768 15.45 15.11L12 22C11.5284 21.9942 11.0643 21.8818 10.6422 21.6714C10.2201 21.461 9.85107 21.1579 9.56259 20.7848C9.27412 20.4117 9.07368 19.9782 8.97626 19.5168C8.87884 19.0554 8.88696 18.5779 9 18.12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </SvgIcon >
                                </LikeContent>
                            </LikeContainer >
                            <ButtonContainer $gap={'5px'}>
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M10 3.158V7.51c-5.428.223-8.27 3.75-8.875 11.199-.04.487-.07.975-.09 1.464l-.014.395c-.014.473.578.684.88.32.302-.368.61-.73.925-1.086l.244-.273c1.79-1.967 3-2.677 4.93-2.917a18.011 18.011 0 012-.112v4.346a1 1 0 001.646.763l9.805-8.297 1.55-1.31-1.55-1.31-9.805-8.297A1 1 0 0010 3.158Zm2 6.27v.002-4.116l7.904 6.688L12 18.689v-4.212l-2.023.024c-1.935.022-3.587.17-5.197 1.024a9 9 0 00-1.348.893c.355-1.947.916-3.39 1.63-4.425 1.062-1.541 2.607-2.385 5.02-2.485L12 9.428Z"></path></SvgIcon>
                                <ButtonText>Compartilhar</ButtonText>
                            </ButtonContainer>
                            <ButtonContainer $gap={'5px'}>
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" focusable="false" aria-hidden="true"><path d="M480-80q0-83-31.5-156T363-363q-54-54-127-85.5T80-480q83 0 156-31.5T363-597q54-54 85.5-127T480-880q0 83 31.5 156T597-597q54 54 127 85.5T880-480q-83 0-156 31.5T597-363q-54 54-85.5 127T480-80Z"></path></SvgIcon>
                                <ButtonText>Perguntar</ButtonText>
                            </ButtonContainer>
                            <ButtonContainer $gap={'5px'}>
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M19 2H5a2 2 0 00-2 2v16.887c0 1.266 1.382 2.048 2.469 1.399L12 18.366l6.531 3.919c1.087.652 2.469-.131 2.469-1.397V4a2 2 0 00-2-2ZM5 20.233V4h14v16.233l-6.485-3.89-.515-.309-.515.309L5 20.233Z"></path></SvgIcon>
                                <ButtonText>Salvar</ButtonText>
                            </ButtonContainer>
                            <ButtonContainer $padding={'0'} $width={'36px'}>
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M6 10a2 2 0 100 4 2 2 0 000-4Zm6 0a2 2 0 100 4 2 2 0 000-4Zm6 0a2 2 0 100 4 2 2 0 000-4Z"></path></SvgIcon>
                            </ButtonContainer>
                        </Content>
                    </Content>
                    <Content $flexDirection={'column'}>
                        <DescriptionContent $color={bgColor}>
                            <BoldText>{viewsFormat(infoVideo.views)}  {tempoPassado(infoVideo.date)}</BoldText>
                            <span>{infoVideo.description}</span>
                        </DescriptionContent>
                    </Content>
                </Content>
                <Content $width={'30%'}>
                </Content>
            </Content>
        </Content >
    );
}

export default Watch;