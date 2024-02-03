import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';

function NewPost() {
  return null;
}

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new-post" element={<NewPost/>}/>
      </Routes>
    </Layout>
  )
}

export default App
