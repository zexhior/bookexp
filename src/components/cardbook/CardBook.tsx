import { useEffect } from 'react';
import './CardBook.scss';

const CardBook = (item:any)=>{
    useEffect(()=>{
        console.log(item);
    },[item]);

    return (<div className='card-book'>
        <div className='card-book-image'>
            <img src={item.item?.imageLinks?.thumbnail} alt='book'/>
        </div>
        <div className='card-book-detail'>
            <a className='button' href={item.item?.infoLink} >Read this book</a>
            <h2>{item.item?.title.slice(0,30)}</h2>
            {(item.item?.authors)?(<p>authors : 
                {item.item?.authors.map((data:string,key:number)=>{
                    if(key > 1){
                        if(key === 2)
                            return `...`;
                        return ``;
                    }
                    else
                        if(key === item.item?.authors.length-1)
                            return ` ${data}`;
                        return ` ${data}/`;
                })}
            </p>):(<></>)}
            {item.item?.publisher?(<p>publisher : {item.item?.publisher}</p>):(<></>)}
            {item.item?.publishedDate?(<p>published date : {item.item?.publishedDate}</p>):(<></>)}
        </div>
    </div>);
}

export default CardBook;