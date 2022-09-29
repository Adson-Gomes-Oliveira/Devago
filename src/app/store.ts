// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// import rootReducer from '../reducers';

// const store = createStore(rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)));

// export type AppDispatch = typeof store.dispatch;
// export default store;

import { configureStore } from '@reduxjs/toolkit';

import adminInputsReducer from '../features/admin.inputs';
import adminGeneralReducer from '../features/admin.general';
import { adminAPI } from '../features/admin.api';

export const store = configureStore({ // Configuring the Store: Passing the reducers and Async Thunk Functions
  reducer: {
    adminInputs: adminInputsReducer,
    adminGeneral: adminGeneralReducer,
    [adminAPI.reducerPath]: adminAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(adminAPI.middleware);
  }
});

export type AppDispatch = typeof store.dispatch; // Creating a type for dispatch
export type RootState = ReturnType<typeof store.getState>; // Creating a type for reducers
