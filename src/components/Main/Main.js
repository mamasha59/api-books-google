import Cards from "../Cards/Cards";
import Preloader from "../Preloader/Preloader";
import ButtonMore from "../ButtonMore/ButtomMore";

function Main ({bookList,isLoading,text,amount,visible}) {
    return(
   <>
      {isLoading ? <Preloader/> : <Cards bookList={bookList} text={text} amount={amount}/>}
      <ButtonMore bookList={bookList} visible={visible}/>
   </> 
    )
}
export default Main;