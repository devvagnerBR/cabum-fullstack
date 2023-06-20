import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LogIn from '../pages/login';
import Homepage from '../pages/homepage';
import SignIn from '../pages/signin';
import GlobalProvider from '../context';
import Header from '../components/header';


const RouterConfig = () => {

    return (

        <BrowserRouter>
            <GlobalProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/sign-in' element={<SignIn />} />
                </Routes>
            </GlobalProvider>
        </BrowserRouter>
    )

}


export default RouterConfig;