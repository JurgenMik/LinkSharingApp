import {combineReducers} from "redux";
import {handleCapitalizeFirstLetter} from "../utils";
import {ProfileLink, ProfileInfo} from "../interfaces";

const reducerProfileLinks = (state: ProfileLink[] = [], action: {payload: any | object, type: string}) => {
    switch (action.type) {
        case 'AddNewProfileLink': {
            return [...state, action.payload];
        }
        case 'EditProfileLink': {
            return state.map((link: ProfileLink) => {
                if (link.id === action.payload.targetLink) {
                    return {...link,
                        [action.payload.property]: action.payload.value
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

const profileInfo = {
    profile_img: '',
    first_name: '',
    last_name: '',
    email: ''
};

const reducerProfileDetails = (state: ProfileInfo = profileInfo, action: {payload: any | object, type: string}) => {
    switch (action.type) {
        case 'EditProfileDetails': {
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.name !== 'email'
                    ? handleCapitalizeFirstLetter(action.payload.target.value)
                    : action.payload.target.value
            };
        }
        case 'EditProfileImage': {
            return {...state, profile_img: action.payload.imgBlob};
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({
    links: reducerProfileLinks,
    p_info: reducerProfileDetails
});

export default rootReducer;