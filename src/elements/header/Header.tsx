import { useContext, useRef} from 'react';
import { AppContext } from '../../components/home/Home';
import Navigation from '../navigation/Navigation';
import './Header.scss';

const Header = ()=>{
    const inputref = useRef<HTMLInputElement>(null);
    const context = useContext(AppContext);

    const HandlerChange = ()=>{
        if(inputref.current){
            context?.setPage(1);
            context?.setQuery(inputref.current.value.toLowerCase());
        }
    }

    /*  */
    return (<div className='header'>
        <div className='background'></div>
        <Navigation/>
        <div className='header-content'>
        <div className='text'>
            <h1>Welcome to BookExp!</h1>
                <p>
                    Let us help you by filling the search bar bellow<br/>
                    We will give you infomation and the link for reading the book that you want! 
                </p>
            </div>
            <div className='search-bar'>
                <input className='search-input' ref={inputref} type='text'/>
                <input className='search-button' type='button' value='Search' onClick={HandlerChange}/>
            </div>
        </div>
    </div>);
}

export default Header;