import React from 'react'
import { observer } from 'mobx-react-lite'
import useStore from '../../Stores/UseStore/useStore'

const Login = observer(() => {
    const { UsersStore } = useStore()
    return (
        <div>
           Login 
           {
               UsersStore.getLoginCheck? <div>true</div>:<div>false</div> 
           }
        </div>
    )
})

export default Login
