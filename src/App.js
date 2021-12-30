import { Routes , Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import {API_KEY, API_URL} from './utils/utils';
import Main from './components/Main/Main';
import InfoBook from './components/InfoBook/InfoBook';
import BigEror from './components/404Erorr/BigErorr';
import Header from "./components/Header/Header";

function App() {

  const [bookList, setBookList] = React.useState([]); //---найденные книги
  const [isLoading, setIsLoading] = React.useState(false); //----отображение прелоудера
  const [text, setText] = React.useState(''); //---отображение ошибки
  const [amount, setAMount] = React.useState(''); //----отображение общего результата поиска(кол-во)
  const [visible, setVisibleButtom] = React.useState(false);  //---отображение кнопки ЕЩЕ
 
 async function searchBook (query, value, valueTime){
    setIsLoading(true)
    if(!query && !value){
     setText(false)
     setIsLoading(false)
    }else{
      //q=java:categories:Biography&orderBy=newest:keyes&key=AIzaSyAIsfSBMaeaN8iwLZWOOK08Zi8UGYv4Tdg
      setText(true)
       await fetch(API_URL+query+'+'+value+'&orderBy='+valueTime+'&key='+API_KEY,{
          method: 'GET',
          headers : {
            Accept: 'aplication/json', 
            'Content-Type': 'aplication/json'
            },
          }).then(response => response.json())
            .then((json)=>{
                setBookList(json.items)
                setAMount(json.totalItems)
            })
            .catch((err) => {console.log(`Ошибка. Запрос не выполнен ${err}`)})  
            .finally(()=>{setIsLoading(false)})
    
        }
    }

    function addMoreButtonVisible(){ //---отображение кнопки еще, по условию, если длина массива равна нулю
      if(bookList.length === 0){
        setVisibleButtom(true)
      }else{
        setVisibleButtom(false)
      }
    }
    
    React.useEffect(()=>{
      addMoreButtonVisible()
    })

  return (
    <>
      <Header searchBook={searchBook}/>
      <Routes>
        
        <Route exact path='/' 
          element={<Main
                    bookList={bookList}
                    isLoading={isLoading}
                    text={text}
                    amount={amount}
                    visible={visible}
          />}>
        </Route>
        <Route path='/info-book/:id' element={<InfoBook/>}/>
        <Route path='*' element={<BigEror/>}/>

      </Routes>
    </>
  );
}

export default App;
