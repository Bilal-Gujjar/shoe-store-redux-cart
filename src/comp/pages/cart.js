import {useSelector} from 'react-redux'


function Cart() {
    const  avr = useSelector((state) => state.valuer.value)
    const prc = useSelector((state)=> state.price.value)
    
  
    return (
     <div className='crt'>
            <h2 style={{margin:"200px"}}>Total Item Count : {avr}</h2>
            <h1>Total Amount : {prc}</h1>
            
            
      </div>
    )
}
export default Cart
