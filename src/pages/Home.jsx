import { useVideosContext } from "../ContexProvider"
import { Banner } from "../components/banner"
import { VideosContainer } from "../components/videosContainer"

export const Home = () => {
    const ListVideos = useVideosContext()
    return (
        <>
            <Banner />
            <VideosContainer listVideos={ListVideos} />
        </>
    )
}