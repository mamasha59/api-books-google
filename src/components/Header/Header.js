import './Header.css';
import React from 'react';

function Header({searchBook}) {

  const [value, setValue] = React.useState(''); //--- хук селекта категории
  const [valueTime, setValueTime] = React.useState('relevance');// --- хук селекта время

  const inputElement = React.useRef(null); //----хук импута

  const handleSubmit = (ev) => { //--- сабмит формы поиска
    ev.preventDefault()
    searchBook(inputElement.current.value, value, valueTime)
  }

  function changeSelect(event) {
    setValue(event.target.value)
 }

  function changeSelectTime(event) {
    setValueTime(event.target.value)
  }
// console.log(valueTime)
  return (
    <section>
      <header className="header">
          <h1 className='header__title'>Search for books</h1>
        <form className='header__form' type='submit' onSubmit={handleSubmit}>
          <input
            ref={inputElement}
            placeholder='Поиск Книг'
            type='search'
            className='header__search'
            required
            autoComplete='off'
          />
          <button className='header__button-search'>Поиск</button>
        </form>
        <div className='header__block-categories'>
           <div className='header__category header__category_how'>
                <p className='header__cotegories'>Categories</p>

                <select name='select-what' className='header__option' value={value} onChange={changeSelect}>
                    <option defaultValue>all</option>
                    <option value='art'>art</option>
                    <option value='biography' >biography</option>
                    <option value='computers' >computers</option>
                    <option value='history' >history</option>
                    <option value='medical' >medical</option>
                    <option value='poetry' >poetry</option>
                </select>

            </div>
            <div className='header__category header__category_where'>
                <p className='header__cotegories'>Sorting by</p>

                <select name='select-where' className='header__option' value={value} onChange={changeSelectTime}>
                    <option defaultValue>relevance</option>
                    <option value='newest' >newest</option>
                </select>

            </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
