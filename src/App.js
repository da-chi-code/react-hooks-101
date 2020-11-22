
import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log('this is like componentDidmountgg.')
  }, [])
  useEffect(() => {
    console.log('this is like componentDidmount.')
  })
  useEffect(() => {
    console.log('this callbackis for name only.')
  }, [name])

  return (
    <>
      <p>現在の{ name }は、{ price }です。</p>
      <button onClick={ () => setState({ ...state, price: price + 1 }) }>+1</button>
      <button onClick={ () => setState({ ...state, price: price - 1 }) }>-1</button>
      <button onClick={ () => setState(props) }>Reset</button>
      <input value={ name } onChange={ e => setState({ ...state, name: e.target.value }) } />
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
