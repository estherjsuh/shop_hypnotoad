import { UserActionTypes} from './user.types';

export const setCurrentUser = user=> ({
    type: 'SET_CURRENT_USER', //this type needs to align with action type in reducer
    payload: user
});