import HeaderCss from './Header.module.css';
import headerImage from '../../assets/recipes-icon.svg'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className={HeaderCss["header-container"]}>
                <img src={headerImage} className={HeaderCss["header-image"]}/>

                <div className={HeaderCss["navigation-container"]}>
                <Link to='' className={HeaderCss["navigation-header"]}>HOME</Link>
                <Link to='recipes' className={HeaderCss["navigation-header"]}>RICETTE</Link>
                <Link to='add-recipes' className={HeaderCss["navigation-header"]}>AGGIUNGI RICETTE</Link>
                </div>
            </div>
        </>
    )
}


