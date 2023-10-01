import { v4 as uuidv4 } from 'uuid';
import { Colors } from "./colors";

export const Categories = [
    {
        "id":uuidv4(),
        "label":"Front End",
        "value":Colors.frontend,
        "description":"Todos los videos que estoy utilizando para estudiar Front End"
    },
    {
        "id":uuidv4(),
        "label":"Back End",
        "value":Colors.backend,
        "description":"Todos los video que estoy usando para estudiar Back End "
    },
    {
        "id":uuidv4(),
        "label":"Movile",
        "value":Colors.movile,
        "description":"Contenido que vengo estudiando sobre React Native y Flutter"
    },
    {
        "id":uuidv4(),
        "label":"UX",
        "value":Colors.ui,
        "description":"Herramientas y técnicas que estudio sobre UX y Design"
    },
    {
        "id":uuidv4(),
        "label":"Infraestructura",
        "value":Colors.infra,
        "description": "Todo lo que estoy aprendiendo sobre Docker y mucho mas"
    },
    {
        "id":uuidv4(),
        "label":"Marketin",
        "value":Colors.marketin,
        "description":"La forma de vender y monetizar mis ideas"
    },
    {
        "id":uuidv4(),
        "label":"Innovation",
        "value":Colors.invovation,
        "description":"Como mantener el equipo felíz y mucho mas"
    },
    {
        "id":uuidv4(),
        "label":"Data Science",
        "value":Colors.datascience,
        "description":"Videos para iniciar en el mundo del Data Science"
    }
]