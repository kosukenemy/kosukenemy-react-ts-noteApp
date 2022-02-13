import { useState } from 'react'
import Header from './components/organisms/Header'
import TabHead from './components/organisms/TabHead'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div>
        <Header />
        <TabHead />
      </div>
    </div>
  )
}

export default App
