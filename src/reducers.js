
import { 
    INCREMENT, 
    DECREMENT, 
    RESET 
} from "./actions";
// Our ideal/default state is just a number:
// 0
// state is your "bank balance"
// action is your "transaction slip"

 
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let index = 12; 



export function count(state=alphabet[index], action) {
    // console.log("somebody called count()")
    let newState = state;
    // console.log(state)
    if (index > 25) {index = 0}
    else if (index < 0) {index = 25}
    switch (action.type) {
        case INCREMENT:
            // console.log('increment is called')
            newState = alphabet[index += 1];
            break;
        case DECREMENT:
            // decrement
            newState = alphabet[index -= 1];
            break;
        case RESET:
            // reset to 0
            newState = alphabet[0];
            break;
        default:
            newState = alphabet[12]
            break;    

    }
    return newState;
}