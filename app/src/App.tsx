import { Route, Routes } from 'react-router-dom';
import Books from './books';
import Home from './home';
import Header from './header';
import Demo from './demo';


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/books' element={<Books />} />
                <Route path="/demo" element={<Demo />} />
            </Routes>

        </>
    );
}

export default App;
