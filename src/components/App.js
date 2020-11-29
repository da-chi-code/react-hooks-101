import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm.js'
import Events from './Events'
import OperationLogs from './operationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

console.log({ AppContext })

const App = () => {
  const initialstate = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialstate)

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App
