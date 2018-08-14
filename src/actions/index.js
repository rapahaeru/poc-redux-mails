import axios from 'axios';

export const FETCH_MAILS = 'FETCH_MAILS';

const TOKEN = '?token=miGueLit0';
// servidor local feito em GO: https://github.com/rapahaeru/starter-web-server
const ROOT_URL = `http://localhost:9090/${TOKEN}`;


export function previewEmail(mail) {
    return {
        type: 'MAIL_PREVIEWED',
        payload: mail
    }
};

export function selectMail(mail, event) {
    if (event.target.checked) {
        return {
            type: 'MAIL_SELECTED',
            target: event.target,
            isChecked: event.target.checked,
            payload: mail
        }
    } else {
        return {
            type: 'MAIL_UNSELECTED',
            target: event.target,
            isChecked: event.target.checked,
            payload: mail
        }
    }
}

export function fetchMails() {
    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_MAILS,
        payload: request
    }
}