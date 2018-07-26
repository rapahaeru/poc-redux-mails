export function previewEmail(mail) {
    return {
        type: 'MAIL_PREVIEWED',
        payload: mail
    }
};


export function selectMail(mail, event) {
    // console.log(mail);
    // console.log(event.target.checked);
    return {
        type: 'MAIL_SELECTED',
        target: event.target,
        isChecked: event.target.checked,
        payload: mail
    }
}