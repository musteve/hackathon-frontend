import { Route, Routes } from 'react-router-dom';
import Books from './books';
import Home from './home';
import Header from './header';


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/books' element={<Books />} />
            </Routes>

        </>
    );
}

export default App;
