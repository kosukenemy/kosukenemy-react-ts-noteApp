import MemoList from '../molecules/MemoList'
import Form from '../molecules/Form';
import DetailPage from '../molecules/DetailPage'
import { Routes, Route } from 'react-router-dom';

const TabContent = () => {
  return (
    <div>
      <>
        <Routes>
          <Route index element={<MemoList />} />
          <Route path='/new' element={<Form />} />
          <Route path='/:id' element={<DetailPage />} />
        </Routes>
      </>
    </div>
  )
}

export default TabContent