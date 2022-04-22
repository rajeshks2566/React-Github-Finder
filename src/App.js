import React from 'react'
import AjaxApiFetch from './components/AjaxApiFtech'
import AsyncAwait from './components/AsyncAwaitAxios';
import AxAysncAwait from './components/AxiosApiFetch';
import AxiosApiFetch from './components/AxiosApiFetch';
import WindowFetchApi from './components/WindowFetchApi'
import Home from './components1/Home';
import "./global.css"

const App = () => {
  return (
    <div>
      {/* <WindowFetchApi /> */}
      {/* <AjaxApiFetch /> */}
      {/* <AxiosApiFetch /> */}
      {/* <AsyncAwait /> */}
      <Home/>
    </div>
  );
}

export default App