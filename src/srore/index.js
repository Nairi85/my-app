import { applyMiddleware,  createStore } from "redux";
import reduser from "./redusers";
const Initial_State={
    loginStatus: false,
}
const store = createStore(reduser(state=Initial_State,actino), applyMiddleware());