import HomePageCss from './HomePage.module.css'
import imagePath from  '../../assets/recipes-icon.svg'
import { Link } from 'react-router-dom'

export default function Home ()  {

    return (
        <>
            <div className={HomePageCss["container"]}>
                <div className={HomePageCss["left-section"]}>
                    <img src={imagePath} />
                </div>
                <div className={HomePageCss["right-section"]}>
                    <div className={HomePageCss["title"]}>Recipe Book</div>
                    <div className={HomePageCss["subtitle"]}>Discover Recipe</div>
                    <Link to='recipes' className={HomePageCss["explore"]}>Explore</Link>
                </div>
            </div>
        </>
    )
}