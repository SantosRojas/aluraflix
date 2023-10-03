import React, { useContext, useState } from "react";
import { ListVideos } from "./data/videos";
import { Categories } from "./categories";
import { Colors } from "./colors";

// Contexto para videos
const VideosContext = React.createContext();

// Contexto para la función de actualización de videos
const UpdateVideosContext = React.createContext();

// Contexto para categorías
const CategoriesContext = React.createContext();

// Contexto para la función de actualización de categorías
const UpdateCategoriesContext = React.createContext();

//context para mostrar el boton nuevo video
const ShowNewVideoContext = React.createContext()
//context para actualizar el mostrar el boton nuevo video
const SetShowNewVideoContext = React.createContext()

//context for idVideo
const VideoWatching = React.createContext()

//contex for update idVideo
const SetVideoWatching = React.createContext()


// Ganchos personalizados para acceder a los contextos
export const useVideosContext = () => useContext(VideosContext);
export const useUpdateVideosContext = () => useContext(UpdateVideosContext);
export const useCategoriesContext = () => useContext(CategoriesContext);
export const useUpdateCategoriesContext = () => useContext(UpdateCategoriesContext);
export const useShowNV = () => useContext(ShowNewVideoContext)
export const useSetShowNV = () => useContext(SetShowNewVideoContext)
export const useVideoWatching = () => useContext(VideoWatching)
export const useSetVideoWatching = () => useContext(SetVideoWatching)

export const MyProvider = ({ children }) => {
  const [videos, updateVideos] = useState(ListVideos);
  const [categories, updateCategories] = useState(Categories);
  const [showNV, setSNV] = useState(true)
  const [videoWatching, setVideoWatching] = useState(
    {
      "title": "Curso de Astro",
      "url": "https://www.youtube.com/watch?v=sOXW0ZnJxbQ",
      "category": "Front End",
      "color": Colors.frontend,
      "description":"Astro es un generador de sitios web estáticos, es decir sitios web que en su mayoría están conformados por solo archivos como HTML, CSS, Javascript, Imágenes y contenido similar. "
    }
  )

  return (
    <VideosContext.Provider value={videos}>
      <UpdateVideosContext.Provider value={updateVideos}>
        <CategoriesContext.Provider value={categories}>
          <UpdateCategoriesContext.Provider value={updateCategories}>
            <ShowNewVideoContext.Provider value={showNV}>
              <SetShowNewVideoContext.Provider value={setSNV}>
                <VideoWatching.Provider value={videoWatching}>
                  <SetVideoWatching.Provider value={setVideoWatching}>
                    {children}
                  </SetVideoWatching.Provider>
                </VideoWatching.Provider>
              </SetShowNewVideoContext.Provider>
            </ShowNewVideoContext.Provider>
          </UpdateCategoriesContext.Provider>
        </CategoriesContext.Provider>
      </UpdateVideosContext.Provider>
    </VideosContext.Provider>
  );
};
