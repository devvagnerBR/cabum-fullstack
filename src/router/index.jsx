import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LogIn from '../pages/login';
import Homepage from '../pages/homepage';
import SignIn from '../pages/signin';
import GlobalProvider from '../context';
import Header from '../components/header';
import Favorites from '../pages/favorites';
import Cart from '../pages/cart';
import Footer from '../components/footer';


const RouterConfig = () => {

    return (

        <BrowserRouter>
            <GlobalProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/entrar' element={<LogIn />} />
                    <Route path='/cadastro' element={<SignIn />} />

                    <Route path='/favoritos' element={<Favorites />} />
                    <Route path='/carrinho' element={<Cart />} />
                </Routes>
                <Footer/>
            </GlobalProvider>
        </BrowserRouter>
    )

}


export default RouterConfig;