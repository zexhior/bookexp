import { createContext, useEffect, useState } from 'react';
import Header from '../../elements/header/Header';
import ListBooks from '../listbooks/ListBooks';
import './Home.scss';

export interface IQuery{
    query: string | undefined,
    setQuery: Function,
    page: number,
    setPage: Function,
}

export const AppContext = createContext<IQuery | null>(null);

const Home = ()=>{
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const changeQuery = (value: string)=>{
        setQuery(value);
    }

    const changePage = (value: number)=>{
        setPage(value);
    }

    return (<div className='list-volume'>
        <AppContext.Provider value={{query,setQuery: changeQuery,
            page, setPage: changePage}}>
            <Header/>
            <ListBooks/>
        </AppContext.Provider>
    </div>)
}

export default Home;