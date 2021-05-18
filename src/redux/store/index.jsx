import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistStore, persistReducer as persist } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from '../root-reducer'

const middlewares = [thunk]

const persistConfig = {
    key: 'root-reducer',
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const persistReducer = persist(persistConfig, rootReducer)

// prettier-ignore
const store = createStore(
    persistReducer, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
))

export const persistor = persistStore(store)

export default store
