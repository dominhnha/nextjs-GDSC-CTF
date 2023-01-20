import '../styles/globals.css'

import { Provider } from 'react-redux'
import store from '../redux/store/store'
import UserLayout from '../components/UserLayout/UserLayout'
function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout>
    </Provider>
  ) 
}

export default MyApp
