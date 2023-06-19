import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LogIn from '../pages/login';
import Homepage from '../pages/homepage';
import SignIn from '../pages/signin';
import GlobalProvider from '../context';


const RouterConfig = () => {

    return (

        <BrowserRouter>
            <GlobalProvider>

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