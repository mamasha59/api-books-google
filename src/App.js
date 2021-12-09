import { Routes , Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import {API_KEY, API_URL} from './utils/utils';
import Main from './components/Main/Main';
import InfoBook from './components/InfoBook/InfoBook';
import { CurrentBookContext } from './context/bookContext';

function App() {

  const [currentBook, setCurrentBook] = React.useState({})
  const [bookList, setBookList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false)
  const [text, setText] = React.useState('');
  const [amount, setAMount] = React.useState('');

 async function searchBook (query, value, valueTime){
    setIsLoading(true)
    if(!query && !value){
     setText(false)
     setIsLoading(false)
    }else{
      //q=java:categories:Biography&orderBy=newest:keyes&key=AIzaSyAIsfSBMaeaN8iwLZWOOK08Zi8UGYv4Tdg
      setText(true)
       await fetch(API_URL+query+':intitle:subject:'+value+'&orderBy='+valueTime+'&key='+API_KEY,{
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
            .catch((err) => {console.log('Ошибка. Запрос не выполнен')})  
            .finally(()=>{setIsLoading(false)})
        }
    }
    // function addMore(){
      
    // }
  return (
    <CurrentBookContext.Provider value={currentBook}>
      <Routes>
        <Route exact path='/' 
          element={<Main searchBook={searchBook} 
          bookList={bookList}
          isLoading={isLoading}
          text={text}
          amount={amount}
          setCurrentBook={setCurrentBook}
          />}
        />
        
        <Route path='/info-book/:id'
          element={<InfoBook searchBook={searchBook}
          />}
        />

      </Routes>
    </CurrentBookContext.Provider>
  );
}

export default App;
