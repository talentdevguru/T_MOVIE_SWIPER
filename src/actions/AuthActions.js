import { Auth } from './types';
import { validateUsername, validatePassword } from '../utils/validators';
import { stSaveUser, stRemoveUser, stRemoveCurrentMovies } from '../utils/storage';
import { requestToCreateNewGuestUser, requestToCreateNewAuthenticatedUser } from '../api/auth';
import { getTmbdErrorMessage } from '../api/codes';
import RouteNames from '../RouteNames';
import Config from '../Config';
