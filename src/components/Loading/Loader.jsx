import { useLoading } from "./LoadingContext"
import "./Loader.css"
const Loader = () => {
    const {loading} = useLoading()
    if(!loading) return null
    return(
        <div className="loader-overlay">
            <div className="spinner"></div>
        </div>
    )
}
export default Loader