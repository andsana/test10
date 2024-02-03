import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import NewPost from "./containers/NewPost/NewPost";
import SinglePost from "./containers/SinglePost/SinglePost";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new-post" element={<NewPost/>}/>
          <Route path="/posts/:id" element={<SinglePost />}/>
      </Routes>
    </Layout>
  )
}

export default App;
