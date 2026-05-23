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
import { useNavigate } from "react-router-dom";

function Register() {
    const { register, handleRegister, registerError, setRegisterError } = useContext(UserContext);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const login = () => {
        handleRegister(name, email, password);
    }

    useEffect(() => {
        if (register) navigate('/login', { state: true });
    }, [register]);

    useEffect(() => {
        return () => {
            setRegisterError(null)
        }
    }, [])

    return (
        <FormContainer>
            <FormContent>
                {registerError && (
                    <span>{registerError}</span>
                )}
                <Title>Registrar</Title>
                <InputContent>
                    <span>Nome completo:</span>
                    <InputText type='name' value={name} onChange={(e) => setName(e.target.value)} />
                </InputContent>
                <InputContent>
                    <span>Email:</span>
                    <InputText type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputContent>
                <InputContent>
                    <span>Senha:</span>
                    <InputText type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputContent>
                <FormButton onClick={() => login()}>Registrar</FormButton>
                <OptionContent>
                    <span>Já tem uma conta?</span>
                    <OptionButton onClick={() => navigate('/login')}>Entrar</OptionButton>
                </OptionContent>
            </FormContent>
        </FormContainer>
    )
}

export default Register;