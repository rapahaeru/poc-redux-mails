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