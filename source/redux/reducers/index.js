import CommandsReducer from './CommandsReducer';
import WorldsReducer from './WorldsReducer';
import MobsReducer from './MobsReducer';
import ReferencesReducer from './ReferencesReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  commands: CommandsReducer,
  worlds: WorldsReducer,
  mobs: MobsReducer,
  references: ReferencesReducer
})
