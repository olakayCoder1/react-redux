import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {ordered , restocked } from './icecreamSlice'

function IcecreamViews() {

  const dispatch = useDispatch()
  
  const numberOfIceCream = useSelector(state => state.icecream.numberOfIceCream )
  return (
    <div>
      <h2>Number of cakes - {numberOfIceCream}</h2>
      <button onClick={()=> dispatch(ordered())}>Order cake</button>
      <button onClick={()=> dispatch(restocked(4))}> Restock cake</button>
    </div>
  )
}

export default IcecreamViews
