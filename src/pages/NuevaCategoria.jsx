import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { FormContainer, Formulario } from "../components/formulario"
import MyTextField from "../components/myInput"
import { ContainerBtns, MyBtn } from "../components/button"
// import styled from "styled-components"
import { Title } from "../components/title"
import { Colors } from "../colors"
import DataTable from "../components/tabla"
import { useCategoriesContext, useUpdateCategoriesContext } from "../ContexProvider"
// import { Colors } from "../colors"


export const NuevaCategoria = () => {
    const [nameCategory, setNameCategory] = useState("")
    const [descriptionCategory, setDescriptionCategory] = useState("")
    const [colorCategory, setColorCategory] = useState(Colors.primary)

    const categories = useCategoriesContext()
    const updateCategories = useUpdateCategoriesContext()
    // const [category, setCategory] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que la página se recargue
        // Realiza la lógica de envío del formulario aquí
        

        const newCategory = {
            "id":uuidv4(),
            "label": nameCategory,
            "value": colorCategory,
            "description": descriptionCategory
        }
        console.log(newCategory)
        updateCategories([...categories,newCategory])
        console.log(categories)
    };

    return (
        <FormContainer>
            <Title>Nuevo Categoria</Title>
            <Formulario onSubmit={handleSubmit}>
                <MyTextField
                    value={nameCategory}
                    setValue={setNameCategory}
                    id="name"
                    label="Nombre"
                    required />

                <MyTextField
                    value={descriptionCategory}
                    setValue={setDescriptionCategory}
                    id="description-category"
                    label="Descripcion"
                    required />

                <MyTextField
                    type="color"
                    value={colorCategory}
                    setValue={setColorCategory}
                    id="link"
                    label="Color"
                    required />

                <ContainerBtns>
                    <MyBtn type="submit" primary="true">Guardar</MyBtn>
                    <MyBtn type="button" primary="false">Limpiar</MyBtn>
                </ContainerBtns>
            </Formulario>

            <DataTable/>
        </FormContainer>
    )
}