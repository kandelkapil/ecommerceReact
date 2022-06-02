import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store';


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'))