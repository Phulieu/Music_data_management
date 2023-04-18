
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { NavBar } from '../components';
import { AlbumList, CreateAlbum, Login, Register, UpdateAlbum } from '../views';

import "bootstrap/dist/css/bootstrap.min.css";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path = "/" element={<Login />} />
              <Route path = "/music/list"  element ={<AlbumList />}/>
              <Route path = "/music/create" element= {<CreateAlbum />}/>
              <Route path="/music/update/:id" element={<UpdateAlbum />} />
              <Route path="/register" element={<Register />} />

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
