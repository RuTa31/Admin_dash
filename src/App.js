import Home from './page/Home';
import SignUp from './page/login/SignUp';
import { Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
          <Routes>
              <Route path="/" element={<SignUp />}/>
              <Route path="Home" element={<Home />}/>
          </Routes>
  )
  

}

export default App;
