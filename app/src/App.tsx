import { Route, Routes } from 'react-router-dom';
import Books from './books';
import Home from './home';


function App() {
    return (
       <div>
            <header>
                <h1>header header header</h1>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/books' element={<Books />} />
            </Routes>

       </div>
    );
}

export default App;
