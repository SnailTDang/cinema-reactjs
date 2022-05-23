import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import { BannerReducer } from './reducers/BannerReducer';
import { CinemaReducer } from './reducers/CinemaReducer';
import { ListMoviesReducer } from './reducers/ListMoviesReducer';
import { ShowtimesReducer } from './reducers/ShowtimesReducer';
import { UserLoginReducer } from './reducers/UserLoginReducer';
import { TicketsRoomReducer } from './reducers/TicketRoomReducer';





const rootReducer = combineReducers({
    BannerReducer,
    ListMoviesReducer,
    CinemaReducer,
    ShowtimesReducer,
    UserLoginReducer,
    TicketsRoomReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))