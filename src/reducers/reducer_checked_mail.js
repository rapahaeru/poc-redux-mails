const initialStateCounter = {
    counter: 0
};

export default function(state = initialStateCounter, action) {

    switch(action.type) {
        case 'MAIL_SELECTED':
            return {
                counter: state.counter + 1
            };
        case 'MAIL_UNSELECTED':
            return {
                counter: state.counter - 1
            };

        default:
            return state;
    }
}