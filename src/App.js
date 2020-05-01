import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { observer } from 'mobx-react-lite'
import useStore from './Stores/UseStore/useStore'
import { Main, Board, Login } from './Pages'

const App = observer(() => {
  const { UsersStore } = useStore()

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/board" render={()=>(UsersStore.getLoginCheck? <Board title="board"/>:<Redirect to="/"/>)}/>
        <Route exact path="/login" render={()=>(UsersStore.getLoginCheck? <Login />:<Redirect to="/"/>)}/>
      </Switch>
    </Fragment>
  )
})

export default App
