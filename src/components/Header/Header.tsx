import HeaderCss from './Header.module.css';
// import headerImage from '../../assets/recipes-icon.svg'
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const navigateTo = (pageName: any) => {
        navigate(`/${pageName}`);
    }

    return (
        <>
            <div className={HeaderCss["header-container"]}>
                {/* <img src={headerImage} className={HeaderCss["header-image"]}/> */}

                <div className={HeaderCss["navigation-container"]}>
                    <div className={HeaderCss['navigation-header']} onClick={() => navigateTo('home')}>Home</div>
                    <div className={HeaderCss['navigation-header']} onClick={() => navigateTo('recipes')}>Ricette</div>
                    <div className={HeaderCss['navigation-header']} onClick={() => navigateTo('add-recipes')}>Aggiungi Ricette</div>
                </div>
            </div>
        </>
    )
}


