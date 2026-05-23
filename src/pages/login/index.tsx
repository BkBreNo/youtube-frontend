import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
    FormContainer,
    InputContent,
    InputText,
    FormButton,
    FormContent,
    Title,
    OptionContent,
    OptionButton,
} from '../../styles/formStyle'
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const { handleLogin, login, register } = useContext(UserContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (login) {
            navigate('/');
        }
    }, [login])

    return (
        <FormContainer>
            <FormContent>
                {location.state && (
                    <span>{register}</span>
                )}
                <Title>Entrar</Title>
                <InputContent>
                    <span>Email:</span>
                    <InputText type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputContent>
                <InputContent>
                    <span>Senha:</span>
                    <InputText type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputContent>
                <FormButton onClick={() => handleLogin(email, password)}>Entrar</FormButton>
                <OptionContent>
                    <span>Não tem uma conta?</span>
                    <OptionButton onClick={() => navigate('/register')}>Criar Conta</OptionButton>
                </OptionContent>
            </FormContent>
        </FormContainer>
    )
}

export default Login;