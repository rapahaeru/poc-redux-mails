import { combineReducers } from 'redux';

import ReducerMails from './reducer_mails';
import ReducerActiveMail from './reducer_active_mail';
import ReducerCheckedMail from './reducer_checked_mail';

const rootReducer = combineReducers({
  reducerMails: ReducerMails,
  reducerActiveMail: ReducerActiveMail,
  reducerCheckedMail: ReducerCheckedMail
});

export default rootReducer;
