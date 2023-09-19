import { Colors } from "../colors";
import { MyCarousel } from "./carousel";

export const VideosContainer = ({ listVideos }) => {
    const categoriasUnicas = [...new Set(listVideos.map(video => video.category))];

    // const videosFiltrados = listVideos.filter(video => video.category === categoriaDeseada);
    return(
        <div style={{backgroundColor:Colors.blackdark,display:"flex", flexDirection:"column"}}>
            {
                categoriasUnicas.map((category,index) =>{
                    return(
                        <MyCarousel key={index} videos = {listVideos.filter(video => video.category === category)}/>
                    )
                })
            }
        </div>
    )
}