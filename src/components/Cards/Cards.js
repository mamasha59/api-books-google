import CardList from '../CardList/CardList';
import './Cards.css';

function Cards ({bookList,text,amount}) {
    console.log(bookList)

    return(
     <main className='books'>
         <div className='books__info-block'>
            <p className='books__info'>{amount ? (`Found ${amount} results`) : ''}</p>
           {/* // <p className='books__info-error'>{text}</p> */}
        </div>
        {bookList ? 
         <div className='books__list'>
                {bookList.map(book => (
                 <CardList
                    book={book}
                    key={book.id }
                    img={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    category={book.volumeInfo.categories}
                    author={book.volumeInfo.authors}
                />
                ))
                }
            
        </div>
        : <h3 className='books__error'>Ничего не найденно, либо введены некорректные данные...</h3>
        }
        </main> 
    )
}
export default Cards;