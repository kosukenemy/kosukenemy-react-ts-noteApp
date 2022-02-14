import React, { useState } from 'react'
import styled from 'styled-components'
import MemoList from '../molecules/MemoList'
import CreateItem from '../molecules/CreateItem'
import DetailPage from '../molecules/DetailPage'
import { Routes, Route } from 'react-router-dom';

const TabContent = () => {
  return (
    <div>
      <>
        <Routes>
          <Route index element={<MemoList />} />
          <Route path='/new' element={<CreateItem />} />
          <Route path='/:id' element={<DetailPage />} />
        </Routes>
      </>
    </div>
  )
}

export default TabContent