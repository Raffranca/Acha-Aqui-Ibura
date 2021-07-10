import imeg from '../../assets/icons8-github.svg';
import IMG from '../../assets/icons8-linkedin.svg';
import './style.css';

const Footer = ()=>{
    return(
        <footer>
            <ul>
                <li>
                    <a className="" href="https://www.linkedin.com/in/rafaela-fran%C3%A7aa/" rel="noreferrer" target="_blank"><img src={IMG}alt="logo linkedin" className="imagem"/></a>
                    
                </li>
                <li>
                    <a className="" href="https://github.com/Raffranca" rel="noreferrer" target="_blank"><img src={imeg} alt="logo github" className="imagem"/></a>
                </li>
            </ul>
                <p>Desenvolvido durante a Reprograma por Rafaela França</p>
            
        </footer>
    )
}

export default Footer;