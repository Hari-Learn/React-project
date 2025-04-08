import { useSelector } from "react-redux"
import storeBox from "./store/store"
import { useDispatch } from "react-redux"
import { increment,decrement } from "./store/countSlice"

function App() {
  const count = useSelector(storeBox=>storeBox.countKey)
  console.log("--> "+count.current_state)
  const dispatchAction = useDispatch()
  const handlePlus = () => {
     dispatchAction(increment())
  }

  const handleSubtract = () => {
    dispatchAction(decrement())
 }


  return (
    <>
     
      <h1>Hello  React + Redux {'--> '+ count.current_state}</h1>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleSubtract}>Subtract</button>

    </>
  )
}

export default App
