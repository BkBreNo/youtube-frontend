import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import {
    Container,
    MenuItem,
    ButtonIcon,
    MenuContent,
    FirstMenuContent,
    MenuTopic,
    LoginItem,
    LoginContent,
    ExplorarContent,
} from "./styles";
import InicioIcon from '../../assets/icons/Inicio.svg'
import ShortsIcon from '../../assets/icons/Shorts.svg'
import InscricoesIcon from '../../assets/icons/Inscricoes.svg'
import VoceIcon from '../../assets/icons/Voce.svg'
import HistoricoIcon from '../../assets/icons/Historico.svg'
import ShoppingIcon from '../../assets/icons/Shopping.svg'
import MusicaIcon from '../../assets/icons/Musica.svg'
import FilmesIcon from '../../assets/icons/Filmes.svg'
import AoVivoIcon from '../../assets/icons/Ao vivo.svg'
import JogosIcon from '../../assets/icons/Jogos.svg'
import NoticiasIcon from '../../assets/icons/Noticias.svg'
import EsportesIcon from '../../assets/icons/Esportes.svg'
import CursosIcon from '../../assets/icons/Cursos.svg'
import PodCastsIcon from '../../assets/icons/PodCasts.svg'
import YTPremiumIcon from '../../assets/icons/Youtube Premium.svg'
import YTMusicIcon from '../../assets/icons/Youtube Music.svg'
import YTKidsIcon from '../../assets/icons/Youtube Kids.svg'
import HisDenIcon from '../../assets/icons/Historico de Denuncia.svg'
import LoginIcon from '../../assets/icons/Login.svg'
import SetaIcon from '../../assets/icons/Seta.svg'
import SetaCimaIcon from '../../assets/icons/SetaCima.svg'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";


const items = [
    { label: 'Início', icon: InicioIcon, link: '/' },
    { label: 'Shorts', icon: ShortsIcon, link: '/shorts' },
    { label: 'Inscrições', icon: InscricoesIcon, link: '/subscriptions' },
    { label: 'Você', icon: VoceIcon, link: '/feed/you' },
    { label: 'Histórico', icon: HistoricoIcon, link: '/feed/history' },
]
const explorarItems = [
    { label: 'Shopping', icon: ShoppingIcon },
    { label: 'Música', icon: MusicaIcon },
    { label: 'Filmes', icon: FilmesIcon },
    { label: 'Ao Vivo', icon: AoVivoIcon },
    { label: 'Jogos', icon: JogosIcon },
    { label: 'Notícias', icon: NoticiasIcon },
    { label: 'Esportes', icon: EsportesIcon },
    { label: 'Cursos', icon: CursosIcon },
    { label: 'PodCasts', icon: PodCastsIcon },
]

const maisYTItems = [
    { label: 'Youtube Premium', icon: YTPremiumIcon },
    { label: 'Youtube Music', icon: YTMusicIcon },
    { label: 'Youtube Kids', icon: YTKidsIcon },
]

function MiniGuide() {
    const { login } = useContext(UserContext)
    const { openMenu, positionMenu, setOpenMenu } = useContext(MenuContext);
    const [openExplorar, setOpenExplorar] = useState(false);
    const navigate = useNavigate();

    return (
        <Container $openMenu={openMenu} $positionMenu={positionMenu}>
            <FirstMenuContent $openMenu={openMenu}>
                {items
                    .filter(item => openMenu || item.label !== "Histórico")
                    .map((item) => (
                        <MenuItem key={item.label} $openMenu={openMenu} onClick={() => navigate(item.link)}>
                            <ButtonIcon alt="" src={item.icon} />
                            <span>{item.label}</span>
                        </MenuItem>
                    ))}
            </FirstMenuContent>
            {
                !login && (

                    <LoginContent $openMenu={openMenu}>
                        <span style={{ marginBottom: "12px", display: "block", fontWeight: '600', fontSize: '14px' }}>Faça login para curtir vídeos, comentar e se inscrever.</span>
                        <LoginItem onClick={() => navigate('/login')}>
                            <ButtonIcon alt="" src={LoginIcon} />
                            <span>Fazer Login</span>
                        </LoginItem>
                    </LoginContent>
                )
            }
            <MenuContent $openMenu={openMenu}>
                <MenuTopic>Explorar</MenuTopic>
                <ExplorarContent $openExplorar={openExplorar}>
                    {explorarItems.map((item) => (
                        <MenuItem key={item.label} $openMenu={openMenu}>
                            <ButtonIcon alt="" src={item.icon} />
                            <span>{item.label}</span>
                        </MenuItem>
                    ))}
                </ExplorarContent>
                <MenuItem $openMenu={openMenu} onClick={() => setOpenExplorar(!openExplorar)}>
                    <ButtonIcon alt="" src={openExplorar ? SetaCimaIcon : SetaIcon} />
                    <span>{openExplorar ? 'Mostrar Menos' : 'Mostrar Mais'}</span>
                </MenuItem>
            </MenuContent>


            <MenuContent $openMenu={openMenu}>
                <MenuTopic>Mais do YouTube</MenuTopic>
                {maisYTItems.map((item) => (
                    <MenuItem key={item.label} $openMenu={openMenu}>
                        <ButtonIcon alt="" src={item.icon} />
                        <span>{item.label}</span>
                    </MenuItem>
                ))}
            </MenuContent>

            <MenuContent $openMenu={openMenu} >
                <MenuItem $openMenu={openMenu} >
                    <ButtonIcon alt="" src={HisDenIcon} />
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Histórico de denúncias</span>
                </MenuItem>
            </MenuContent>

        </Container>
    )
}

export default MiniGuide;