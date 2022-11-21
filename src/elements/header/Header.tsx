import { useContext, useRef} from 'react';
import { AppContext } from '../../components/home/Home';
import Navigation from '../navigation/Navigation';
import './Header.scss';

const Header = ()=>{
    const inputref = useRef<HTMLInputElement>(null);
    const context = useContext(AppContext);

    const HandlerChange = ()=>{
        if(inputref.current){
            //context?.setPage(1);
            let accepted = true;
            if(inputref.current?.value){
                for( let i = 0; i < inputref.current?.value.length; i++){
                    let letter = inputref.current?.value.charCodeAt(i);
                    if((letter >= 0 && letter < 48 && letter != 32)||(letter >=58 && letter < 65) || (letter >= 91 && letter < 97) || letter > 122){
                        accepted = false;
                        break;
                    }
                }
                if(accepted)
                    context?.setQuery(inputref.current.value.toLowerCase());
                    //console.log(inputref.current.value.toLowerCase());
                else
                    alert("Don't use special character! Please, insert the proper title of the book!");
            }
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