import {
    connect
} from 'react-redux';

import Counter from '../components/Counter';
import { actionIncrement, actionDecrement, actionReset } from '../actions';

// Describe how to translate redux state
// into react props
function mapStateToProps(state) {
    // console.log(state)
    return {
        count: state
    }
}

// Describe how to transate redux dispatch
// into react props.
function mapDispatchToProps(dispatch) {
    return {
        handleIncrement: () => {
            // store.dispatch(actionIncrement())
            dispatch(actionIncrement())
        },
        handleDecrement: () => {
            dispatch(actionDecrement())
        },
        handleReset: () => {
            dispatch(actionReset())
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Counter);

// Popular with some tutorials:
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);