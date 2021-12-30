import React from "react";
import { Link } from "react-router-dom";
import './CardList.css'

function CardList ({book,img,title,author,category}) {

   const setBookInfo =() =>{
      localStorage.setItem('book', JSON.stringify(book))
   }

    return(
        <Link className='cards-link' to={`/info-book/:${book.id}`} onClick={setBookInfo}>
            <div key={book.id} className="cards">
                <div className="cards__img">
                  <img className='card__oblozka' src={img} alt={`обложка книги: "${title}"`}/>
                </div>
                    <div className='card__block'>
                        <p className='card__category'>{category}</p>
                        <h2 className='card__title'>{title}</h2>
                        <p className='card__author'>{author}</p>
                    </div>
            </div>  
        </Link> 
    )
}
export default CardList;