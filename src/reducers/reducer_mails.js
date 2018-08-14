import { FETCH_MAILS } from '../actions/index';

export default function(state = [], action) {

    switch(action.type) {
        case FETCH_MAILS:
            return state.concat( [action.payload.data] );
        default:
            return state;
    }

    // return [
    //     {
    //         id: 1,
    //         name: 'cael',
    //         description: 'Descrição do cael',
    //         img: '/assets/images/hyoga.gif',
    //         dateDelivery: '2018-06-25',
    //         dateDeliveryFormated: '25/06/2018',
    //     },
    //     {
    //         id: 2,
    //         name: 'ueda',
    //         description: 'Descrição do Ueda',
    //         img: '/assets/images/seiya.jpg',
    //         dateDelivery: '2018-06-20',
    //         dateDeliveryFormated: '20/06/2018',
    //     },
    //     {
    //         id: 3,
    //         name: 'cellestino',
    //         description: 'Descrição do Celestino',
    //         img: '/assets/images/shun.png',
    //         dateDelivery: '2018-05-24',
    //         dateDeliveryFormated: '24/05/2018',
    //     },
    //     {
    //         id: 4,
    //         name: 'vasco',
    //         description: 'Descrição do Vasco',
    //         img: '/assets/images/vegeta.jpg',
    //         dateDelivery: '2018-03-15',
    //         dateDeliveryFormated: '15/03/2018',
    //     }
    // ];
}