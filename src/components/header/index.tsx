import { useContext, useRef, useState, useEffect } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    LoginItem,
    ButtonLoginIcon,
    DropDownContent,
    HeaderContent,
    MenuContent,
    DropDownItem,
} from "./styles";
import HamburgerIcon from '../../assets/hamburger.png'
import Logo from '../../assets/YouTube-Logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import NotificationIcon from '../../assets/sino.png'
import MorenIcon from '../../assets/icons/More.svg'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import LoginIcon from '../../assets/icons/Login.svg'
import SairIcon from '../../assets/icons/Sair.svg'

function Header() {
    const navigate = useNavigate();

    const { login, user, logOut } = useContext(UserContext)
    const { openMenu, setOpenMenu, results, setResults } = useContext(MenuContext);
    const [dropDown, setDropDown] = useState(false);

    const nome = user.nome as string;

    const dropDownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDropDown(false)
        function handleClickOutside(e: MouseEvent) {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
                setDropDown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [login])

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} $margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburgerIcon} />
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt=""
                    src={Logo}
                    onClick={() => navigate('/')}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder='Pesquisar' value={results}
                        onChange={(e) => setResults(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && results && navigate(`/results?search_query=${results}`)} />
                </SearchInputContainer>
                <SearchButton onClick={() => results && (navigate(`/results?search_query=${results}`))}>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer $margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                {login ?
                    <>
                        <ButtonContainer onClick={() => navigate('/createvideo')} $margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={VideoIcon} />
                        </ButtonContainer>
                        <ButtonContainer $margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={NotificationIcon} />
                        </ButtonContainer>
                        <ButtonContainer onClick={() => setDropDown(!dropDown)} $margin='0 0 0 10px'>
                            {nome?.charAt(0) || ""}
                        </ButtonContainer>
                        <DropDownContent $dropDown={dropDown} ref={dropDownRef}>
                            <HeaderContent>
                                <ButtonContainer $margin='0 10px 0 0'>
                                    {nome?.charAt(0) || ""}
                                </ButtonContainer>
                                <span>{nome}</span>
                            </HeaderContent>
                            <MenuContent>
                                <DropDownItem onClick={() => logOut()}>
                                    <ButtonIcon alt="" src={SairIcon} />
                                    <span>Sair</span>
                                </DropDownItem>
                            </MenuContent>
                        </DropDownContent>
                    </>
                    :
                    <>
                        <ButtonContainer $margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={MorenIcon} />
                        </ButtonContainer>
                        <LoginItem onClick={() => navigate('/login')}>
                            <ButtonLoginIcon alt="" src={LoginIcon} />
                            <span>Fazer Login</span>
                        </LoginItem>
                    </>
                }
            </HeaderButton>
        </Container>
    )
}

export default Header;