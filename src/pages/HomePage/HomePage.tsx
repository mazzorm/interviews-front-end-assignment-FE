import HomePageCss from './HomePage.module.css'
import { useNavigate } from 'react-router-dom';

export default function Home ()  {

    const navigate = useNavigate();

    const navigateTo = (pageName: any) => {
        navigate(`/${pageName}`);
    }

    return (
        <>
            <div className={HomePageCss["container"]}>
                <div className={HomePageCss["right-section"]}>
                    <div className={HomePageCss["title"]}>Recipe Book</div>
                    <div className={HomePageCss["subtitle"]}>Discover Recipe</div>
                    <div onClick={() => navigateTo('recipes')} className={HomePageCss["explore"]}>Explore</div>
                </div>
            </div>
        </>
    )
}