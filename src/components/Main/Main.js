import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import Preloader from "../Preloader/Preloader";
import ButtonMore from "../ButtonMore/ButtomMore";
function Main ({searchBook,bookList,isLoading,text,amount,setCurrentBook}) {
    return(
   <>
      <Header searchBook={searchBook}/>
      {isLoading ? <Preloader/> :  <Cards bookList={bookList} text={text} amount={amount} setCurrentBook={setCurrentBook}/>}
      <ButtonMore/>
   </> 
    )
}
export default Main;