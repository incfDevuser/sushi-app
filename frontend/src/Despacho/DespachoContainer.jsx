import React from 'react'
import ListaDespachos from './Components/ListaDespachos'
import DashboardAside from '../Admin/DashboardAside'

const DespachoContainer = () => {
  return (
    <div className='flex'>
      <DashboardAside/>
      <ListaDespachos/>
    </div>
  )
}

export default DespachoContainer
