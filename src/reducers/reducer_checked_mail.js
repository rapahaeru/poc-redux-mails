export default function(state = null, action) {
    // console.log(state);
    // console.log(action);
    switch(action.type) {
        case 'MAIL_SELECTED':
            return action;
    }

    return state;
}