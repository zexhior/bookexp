import { createContext, useEffect, useState } from 'react';
import Header from '../../elements/header/Header';
import ListBooks from '../listbooks/ListBooks';
import './Home.scss';

export interface IQuery{
    query: string | undefined,
    setQuery: Function,
    page: number,
    setPage: Function,
    online: boolean,
    setOnLine: Function,
}

export const AppContext = createContext<IQuery | null>(null);

const Home = ()=>{
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [online, setOnLine] = useState(false);

    const changeQuery = (value: string)=>{
        setQuery(value);
    }

    const changePage = (value: number)=>{
        setPage(value);
    }

    const changeOnLineStatus = ()=>{
        if(navigator.onLine)
            setOnLine(true)
        else
            setOnLine(false)
    }

    useEffect(()=>{
        changeOnLineStatus();
    },[online])

    return (<div className='list-volume'>
        <AppContext.Provider value={{query,setQuery: changeQuery,
            page, setPage: changePage,
            online, setOnLine: changeOnLineStatus}}>
            <Header/>
            <ListBooks/>
        </AppContext.Provider>
    </div>)
}

export default Home;