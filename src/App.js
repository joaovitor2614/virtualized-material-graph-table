import React from 'react'
import Relatorio from './components'
import { columns } from './components/devData/columns'
import { data } from './components/devData/data'

function App() {
  return (
    <Relatorio
      customColumns={columns}
      data={data}
      rowHeight={50}
      tableHeight="90vh"
    />
  )
}

export default App
