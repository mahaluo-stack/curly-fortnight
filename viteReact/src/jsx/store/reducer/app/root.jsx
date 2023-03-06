import { combineReducers } from 'redux';
import device from './device';

export const appRoot = combineReducers({
    deviceState: device,
});