import React, { useContext, useState } from "react";
import { ListVideos } from "./data/videos";
import { Categories } from "./categories";

// Contexto para videos
const VideosContext = React.createContext();

// Contexto para la función de actualización de videos
const UpdateVideosContext = React.createContext();

// Contexto para categorías
const CategoriesContext = React.createContext();

// Contexto para la función de actualización de categorías
const UpdateCategoriesContext = React.createContext();

// Ganchos personalizados para acceder a los contextos
export const useVideosContext = () => useContext(VideosContext);
export const useUpdateVideosContext = () => useContext(UpdateVideosContext);
export const useCategoriesContext = () => useContext(CategoriesContext);
export const useUpdateCategoriesContext = () => useContext(UpdateCategoriesContext);

export const MyProvider = ({ children }) => {
  const [videos, updateVideos] = useState(ListVideos);
  const [categories, updateCategories] = useState(Categories);

  return (
    <VideosContext.Provider value={videos}>
      <UpdateVideosContext.Provider value={updateVideos}>
        <CategoriesContext.Provider value={categories}>
          <UpdateCategoriesContext.Provider value={updateCategories}>
            {children}
          </UpdateCategoriesContext.Provider>
        </CategoriesContext.Provider>
      </UpdateVideosContext.Provider>
    </VideosContext.Provider>
  );
};
