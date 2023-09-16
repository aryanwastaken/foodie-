import AppRoutes from "./AppRoutes";
import Header from "./Header/Header";
import Loading from "./components/Loading/Loading";
import { useLoading } from './hooks/useLoading';
import {setLoadingInterceptor} from './interceptors/loadinginterceptor';
import { useEffect } from 'react';

function App() {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, []);

  return <>
   <Loading/>
   <Header />
   <AppRoutes/>
  </>
}

export default App;
