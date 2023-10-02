
import { useState } from "react"
import { FormContainer, Formulario } from "../components/formulario"
import MyTextField from "../components/myInput"
import { ContainerBtns, MyBtn, MyBtnD } from "../components/button"
import styled from "styled-components"
import { Title } from "../components/title"
import { Link, useNavigate } from "react-router-dom"
import MySelect from "../components/myselect"
import { useCategoriesContext, useSetShowNV, useUpdateVideosContext, useVideosContext } from "../ContexProvider"
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from "@mui/material"

const BtnsPrimary = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        gap: 1rem;
    }
`
const BtnSecondary = styled.div`
    display: flex;
    justify-content: right;
    @media screen and (max-width: 768px){
        width: 100%;
        justify-content: center;
    }
`

const BtnCategory = styled(MyBtn)`
    width: 100%;
`
export const NuevoVideo = () => {
    const [title, setTitle] = useState("")
    const [linkVideo, setLinkVideo] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const videos = useVideosContext()
    const updateVideos = useUpdateVideosContext()
    const categories = useCategoriesContext()

    const navigate = useNavigate()
    const setShowNv = useSetShowNV()



    const AddVideo = (e) => {
        e.preventDefault();
        const newVideo = {
            "title": title,
            "url": linkVideo,
            "color": category,
            "category": categories.find(element => element.value === category)?.label
        }
        updateVideos([...videos, newVideo])
        console.log(newVideo)

        handleClickOpen()
    }

    //dialog
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleToHome = () => {
        setShowNv(true)
        navigate("/")
    }


    return (
        <>
            <FormContainer>
                <Title>Nuevo Video</Title>
                <Formulario onSubmit={AddVideo}>
                    <MyTextField value={title} setValue={setTitle} id="title" label="Titulo" required />
                    <MyTextField value={linkVideo} setValue={setLinkVideo} id="link" label="Link del video" required />
                    <MySelect value={category} setValue={setCategory} id="category" label="Escoja una categoria" required />
                    <MyTextField value={description} setValue={setDescription} id="description" label="Descripcion" required />

                    <ContainerBtns>
                        <BtnsPrimary>
                            <MyBtn type="submit" primary="true">Guardar</MyBtn>
                            <MyBtn type="button" primary="false">Limpiar</MyBtn>
                        </BtnsPrimary>
                        <BtnSecondary>
                            <Link to={"/nueva-categoria"}>
                                <BtnCategory type="button" primary="true">Nueva Categoria</BtnCategory>

                            </Link>
                        </BtnSecondary>
                    </ContainerBtns>
                </Formulario>
            </FormContainer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirmación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Video agregado exitosamente ¿Deseas volver a la página principal?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <MyBtnD onClick={handleClose} st={{ marginLeft: "1rem" }}>
                        Cancelar
                    </MyBtnD>
                    <MyBtn onClick={handleToHome} primary="true">
                        Aceptar
                    </MyBtn>
                </DialogActions>
            </Dialog>
        </>
    )
}