import { combineReducers } from '@reduxjs/toolkit';
import activeProfile from './activeProfile';

const rootReducer = combineReducers({
  activeProfile,
});

export default rootReducer;
