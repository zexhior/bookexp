import { useContext } from 'react';
import useGetBooks from '../../customhooks/GetBooks';
import CardBook from '../cardbook/CardBook';
import { AppContext } from '../home/Home';
import Offline from './Images/offline.png';
import Empty from './Images/sad.png';
import './ListBooks.scss';

const ListBooks = ()=>{
    const context = useContext(AppContext);

    const HandlerNext = ()=>{
        context?.setPage(context?.page+1);
    }

    const HandlerPrevious = ()=>{
        if(context?.page !== 1)
            context?.setPage(context?.page-1);
    }

    const {volumes} = useGetBooks(`https://www.googleapis.com/books/v1/volumes?q=`,context?.query,context?.page);

    return (
        <div className='volume-result'>
            {

                (volumes.length===0)?(
                <div className='empty'>
                    <p>No result</p>
                </div>)
                :(<div className='result'>
                    {
                        (volumes.length!==0)?(
                        <div className='page-bar'>
                            <div id='previous' onClick={(e)=>{HandlerPrevious()}}>Previous</div>
                            <div id='page'>{`${context?.page}`}</div>
                            <div id='next' onClick={(e)=>{HandlerNext()}}>Next</div>
                        </div>):(<></>)
                    }
                    <div className='result-element'>
                        {
                            volumes.map((data:any, key: number)=>{
                                return data?(<div key={key}>
                                    <CardBook item={data.volumeInfo}/>
                                </div>):(<></>)
                            })
                            
                        }
                    </div>
                </div>)
            }
        </div>
    );
}

export default ListBooks;