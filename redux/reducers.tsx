import * as types from './types';
const initialState = {
    categories: [],
    randomJoke: {},
    searchJoke: [],
    loading: false,
    error: null,
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case types.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                loading: false,
                error: null,
            }
        case types.FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.FETCH_RANDOM_JOKE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case types.FETCH_RANDOM_JOKE_SUCCESS:
            return {
                ...state,
                randomJoke: action.payload,
                loading: false,
                error: null,
            }
        case types.FETCH_RANDOM_JOKE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.SEARCH_JOKE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case types.SEARCH_JOKE_SUCCESS:
            return {
                ...state,
                searchJoke: action.payload,
                loading: false,
                error: null,
            }
        case types.SEARCH_JOKE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;