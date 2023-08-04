import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LogIn from '../pages/login';
import Homepage from '../pages/homepage';
import SignIn from '../pages/signin';
import Header from '../components/header';
import Favorites from '../pages/favorites';
import Cart from '../pages/cart';
import MyAccount from '../pages/my-account';
import ProductDetails from '../pages/product-details';
import PaymentMethod from '../pages/payment-method';
import ConfirmOrder from '../pages/confirm-order';
import CompletedOrder from '../pages/confirm-order/completed-order';
import GlobalProvider from '../context';
import GlobalContext from '../context/global-context';


const RouterConfig = () => {

    return (

        <BrowserRouter>
            <GlobalContext>
                {/* <GlobalProvider> */}
                    <Header />
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/entrar' element={<LogIn />} />
                        <Route path='/cadastro' element={<SignIn />} />
                        <Route path='/favoritos' element={<Favorites />} />
                        <Route path='/carrinho' element={<Cart />} />
                        <Route path='/minha-conta/*' element={<MyAccount />} />
                        <Route path='/produto/:id' element={<ProductDetails />} />
                        <Route path='/pagamento' element={<PaymentMethod />} />
                        <Route path='/confirmacao' element={<ConfirmOrder />} />
                        <Route path='/pedido-finalizado' element={<CompletedOrder />} />
                    </Routes>
                {/* </GlobalProvider> */}
            </GlobalContext>
        </BrowserRouter>
    )

}


export default RouterConfig;