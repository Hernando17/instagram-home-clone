import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from '../redux/services/post.api'
import { userSlice } from '../redux/features/userSlice';
import { themeSlice } from '../redux/features/themeSlice';

const rootReducers = combineReducers({
    user: userSlice.reducer,
    theme: themeSlice.reducer,

    [postApi.reducerPath]: postApi.reducer,
})

export const store = configureStore({
    reducer: rootReducers,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)