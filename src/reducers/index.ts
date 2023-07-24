import {combineReducers} from "redux";
import {ProfileLink} from "../interfaces";

const reducerProfileLinks = (state: ProfileLink[] = [], action: {payload: any | object, type: string}) => {
    switch (action.type) {
        case 'AddNewProfileLink': {
            return [...state, action.payload];
        }
        case 'EditProfileLink': {
            return state.map((link: ProfileLink) => {
                if (link.id === action.payload.targetLink) {
                    return {...link,
                        [action.payload.event?.target.name]: action.payload.event?.target.value
                    };
                }
                return link;
            });
        }
        case 'RemoveProfileLink': {
            return state.filter((link) => link.id !== action.payload.targetLink);
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({
    links: reducerProfileLinks
});

export default rootReducer;