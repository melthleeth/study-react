import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // cash store
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; // array

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store); // 새로운 profile 생성! 자동으로 저장해줌

// export default { store, persistor };
