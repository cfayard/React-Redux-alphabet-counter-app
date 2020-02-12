import React from 'react';

import {
    createStore
} from 'redux';

import {
    count
} from './reducers'

import Counter from './containers/CounterContainer'
import {Provider} from 'react-redux';


const store = createStore(count);

export default function CounterApp() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}
