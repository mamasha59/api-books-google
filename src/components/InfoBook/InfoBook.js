import { useNavigate } from "react-router-dom";
import React from "react";
import './InfoBook.css';
import Header from "../Header/Header";
import { CurrentBookContext } from "../../context/bookContext";

function InfoBook ({searchBook}) {
     
    const currentBook = React.useContext(CurrentBookContext)
    const navigateBack = useNavigate(); // ----редирект

    return(
    <>
        <Header searchBook={searchBook}/>
        <section className='info'>
            <div className='info__block-img'>
                <img className='info__oblozka' src={currentBook.volumeInfo.imageLinks.thumbnail} alt={`обложка книги:${currentBook.volumeInfo.title}`}/>
            </div>
            <div className='info__block'>
                <p className='info__category'>{currentBook.volumeInfo.categories || <span className='info__error'>Информация о категории отсутствует...</span>}</p>
                <h2 className='info__title'>{currentBook.volumeInfo.title || <span className='info__error'>Информация об названии отсутствует...</span>}</h2>
                <p className='info__author'>{currentBook.volumeInfo.authors || <span className='info__error'>Информация об авторе отсутствует...</span>}</p>
                <p className='info__description'>{currentBook.volumeInfo.description ||<span className='info__error'>Описание отсутствует...</span>}</p>
            </div>
           <div className='info__block-button'>
                <button className='info__back-to-result' onClick={()=>{navigateBack('/')}}>Назад к поиску</button>
                <a className='info__more-info' href={currentBook.volumeInfo.previewLink} target='_blank' rel="noreferrer">More about book</a>
           </div>
        </section>
    </> 
    )
}
export default InfoBook;