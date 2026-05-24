import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
    InputDescription,
    InputFile
} from "./styles";
import {
    FormContainer,
    InputContent,
    InputText,
    FormButton,
    FormContent,
    Title,
} from '../../styles/formStyle'
import { useNavigate } from "react-router-dom";
import { VideoContext } from "../../contexts/VideoContext";

function CreateVideo() {
    const { createVideo, info, setInfo } = useContext(VideoContext);
    const { user, token, login } = useContext(UserContext);
    const [image, setImage] = useState<File | null>(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const date = new Date().toISOString().split('T')[0];
    const navigate = useNavigate();

    const validation = () => {
        if (title === '' || description === '') {
            if (title === '' && description === '') {
                setInfo('Adicione titulo e descrição');
            } else if (title === '') {
                setInfo('Adicione titulo');
            } else if (description === '') {
                setInfo('Adicione descrição');
            }
        }
        if (title !== '' && description !== '') {
            createVideo(token, image, title, description, user.id, date, 0)
        }
    }

    return (
        <FormContainer>
            {login ?
                <FormContent>
                    {info && (
                        <span> {info}</span>
                    )}
                    <Title>Criar Video</Title>
                     <InputContent>
                        <span>Capa</span>
                        <InputFile type='file' accept="image/png, image/jpeg" onChange={(e) => setImage(e.target.files?.[0] || null)} />
                    </InputContent>
                    <InputContent>
                        <span>Titulo</span>
                        <InputText type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </InputContent>
                    <InputContent>
                        <span>Descrição</span>
                        <InputDescription rows={8} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </InputContent>
                    <FormButton onClick={() => validation()}>Criar</FormButton>
                </FormContent>
                :
                <FormContent>
                    <Title>Realize o login para prosseguir</Title>
                    <span>Para criar um video é necessario fazer o login</span>
                    <FormButton onClick={() => navigate('/login')}>Fazer login</FormButton>
                </FormContent>
            }

        </FormContainer >
    )
}

export default CreateVideo;