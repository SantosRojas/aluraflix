import { useVideosContext } from "../ContexProvider"
import { Banner } from "../components/banner"
import { VideosContainer } from "../components/videosContainer"

export const Home = () => {
    const ListVideos = useVideosContext()
    console.log(ListVideos)
    return (
        <>
            <Banner />
            <VideosContainer listVideos={ListVideos} />
        </>
    )
}