import React from 'react'
import ListaUsuarios from './Components/ListaUsuarios'
import DashboardAside from '../Admin/DashboardAside'

const UsuariosContainer = () => {
  return (
    <div className='flex'>
      <DashboardAside/>
      <ListaUsuarios/>
    </div>
  )
}

export default UsuariosContainer
