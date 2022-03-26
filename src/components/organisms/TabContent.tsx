import MemoList from '../molecules/MemoList'
import Form from '../molecules/Form';
import DetailPage from '../molecules/DetailPage';
import { Trending } from '../../page/Trending';
import { Routes, Route } from 'react-router-dom';

const TabContent = () => {
  return (
    <div>
      <>
        <Routes>
          <Route index element={<MemoList />} />
          <Route path='/new' element={<Form />} />
          <Route path='/:id' element={<DetailPage />} />
          <Route path='/trending' element={<Trending />} />
        </Routes>
      </>
    </div>
  )
}

export default TabContent