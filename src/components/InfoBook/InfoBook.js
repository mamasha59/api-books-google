import { useNavigate } from "react-router-dom";
import React from "react";
import './InfoBook.css';

function InfoBook ({searchBook}) {
         
    const navigateBack = useNavigate(); // ----редирект

    const localBook = localStorage.getItem('book');

    const localBookToArray = JSON.parse(localBook)

    const backToResult = () =>{
        navigateBack('/')
        localStorage.clear()
    }
    return(
    <>
        <section className='info'>
            <div className='info__block-img'>
                <img className='info__oblozka' src={localBookToArray.volumeInfo.imageLinks.thumbnail} alt={`обложка книги:${localBookToArray.volumeInfo.title}`}/>
            </div>
            <div className='info__block'>
                <p className='info__category'>{localBookToArray.volumeInfo.categories || <span className='info__error'>Информация о категории отсутствует...</span>}</p>
                <h2 className='info__title'>{localBookToArray.volumeInfo.title || <span className='info__error'>Информация об названии отсутствует...</span>}</h2>
                <p className='info__author'>{localBookToArray.volumeInfo.authors || <span className='info__error'>Информация об авторе отсутствует...</span>}</p>
                <p className='info__description'>{localBookToArray.volumeInfo.description ||<span className='info__error'>Описание отсутствует...</span>}</p>
            </div>
           <div className='info__block-button'>
                <button className='info__back-to-result' onClick={backToResult}>Back to results</button>
                <a className='info__more-info' href={localBookToArray.volumeInfo.previewLink} target='_blank' rel="noreferrer">More about book</a>
           </div>
        </section>
    </> 
    )
}
export default InfoBook;