import './ButtonMore.css';

function ButtonMore ({visible}){
//console.log(visible)
const loadMore = () => {

}
    return(
      <button className={`button-more ${visible && 'button-more_hidden'}`} onClick={loadMore}>Ещё</button>
    )
}
export default ButtonMore;