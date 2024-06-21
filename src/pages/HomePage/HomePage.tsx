import HomePageCss from './HomePage.module.css'
import { Link } from 'react-router-dom'

export default function Home ()  {

    return (
        <>
            <div className={HomePageCss["container"]}>
                <div className={HomePageCss["right-section"]}>
                    <div className={HomePageCss["title"]}>Recipe Book</div>
                    <div className={HomePageCss["subtitle"]}>Discover Recipe</div>
                    <Link to='recipes' className={HomePageCss["explore"]}>Explore</Link>
                </div>
            </div>
        </>
    )
}