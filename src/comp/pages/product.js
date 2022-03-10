import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { inc, dec } from '../../redux/prsclice'
import { increment, decrement, } from '../../redux/slice'

import logo1 from '../asset/img1.png'
import logo2 from '../asset/img2.png'
import logo3 from '../asset/img3.png'
import logo4 from '../asset/img4.png'



function Product() {



  const [item, setItem] = useState(0)
  const [price, setPrice] = useState(0)
  const [item1, setItem1] = useState(0)
  const [price1, setPrice1] = useState(0)
  const [item2, setItem2] = useState(0)
  const [price2, setPrice2] = useState(0)
  const [item3, setItem3] = useState(0)
  const [price3, setPrice3] = useState(0)

  const dip = useDispatch()
  const doo = useDispatch()

  return (
    <div className='bg' data-aos="zoom-in-up">
      <div className='cards'>
        <h1>Welcome to Our Product</h1>
        <ul className='ulcard'>

          <li><img className='imgcard' src={logo1}></img>
          <button className='btn' onClick={() => {
            dip(increment(), setItem(item + 1))
            doo(inc(), setPrice(price + 100))
          }}>+</button><span className='sp'>{item}</span><button className='btn' onClick={() => {
            dip(decrement(), setItem(item - 1))
            doo(dec())
          }}>-</button></li>
          <li><img className='imgcard' src={logo2}></img><button className='btn' onClick={() => {
            dip(increment(), setItem1(item1 + 1))
            doo(inc(), setPrice1(price1 + 100))
          }}>+</button><span className='sp'>{item1}</span><button className='btn' onClick={() => {
            dip(decrement(), setItem1(item1 - 1))
            doo(dec())
          }}>-</button></li>
          <li><img className='imgcard' src={logo3}></img><button className='btn' onClick={() => {
            dip(increment(), setItem2(item2 + 1))
            doo(inc(), setPrice2(price2 + 100))
          }}>+</button><span className='sp'>{item2}</span><button className='btn' onClick={() => {
            dip(decrement(), setItem2(item2 - 1))
            doo(dec())
          }}>-</button></li>
          <li><img className='imgcard' src={logo4}></img><button className='btn' onClick={() => {
            dip(increment(), setItem3(item3 + 1))
            doo(inc(), setPrice3(price3 + 100))
          }}>+</button><span className='sp'>{item3}</span><button className='btn' onClick={() => {
            dip(decrement(), setItem3(item3 - 1))
            doo(dec())
          }}>-</button></li>

        </ul>
      </div>
    </div>
  )
}

export default Product