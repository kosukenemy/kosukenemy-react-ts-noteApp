import React, { useState } from 'react'
import styled from 'styled-components'
import MemoList from '../molecules/MemoList'
import CreateItem from '../molecules/CreateItem'

type TabContentType = {
  tabIndex: number
}

const TabContent = ({tabIndex}: TabContentType) => {
  return (
    <div>
      {tabIndex === 0 && <MemoList />}
      {tabIndex === 1 && <CreateItem />}
    </div>
  )
}

export default TabContent