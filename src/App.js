import React, { Fragment } from 'react'
import Main from './Pages/Main/Main'
import { observer } from 'mobx-react-lite'
import useStore from './Stores/UseStore/useStore'

const App = observer(() => {
  const { UsersStore } = useStore()
  
  return (
    <Fragment>
      <Main/>
      <div>
        name : { UsersStore.getUserName }
      </div>
      <button onClick={()=>{UsersStore.setUserName('유현재')}}>test</button>
    </Fragment>
  )
})

export default App
