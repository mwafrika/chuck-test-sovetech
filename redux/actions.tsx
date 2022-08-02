import * as types from './types';
import { ApiData } from './api/resources';
import { CATEGORIES } from './api/constants';

export const searchJoke = (query: string) => (dispatch: any) => {
    dispatch({ type: types.SEARCH_JOKE_REQUEST });
    ApiData.findFacts(query)
        .then(response => {
            dispatch({ type: types.SEARCH_JOKE_SUCCESS, payload: response });
        })
        .catch(error => {
            dispatch({ type: types.SEARCH_JOKE_FAILURE, payload: error });
        }
        );
}

export const fetchCategories = () => (dispatch: any) => {
    dispatch({ type: types.FETCH_CATEGORIES_REQUEST });
    ApiData.getCategories()
        .then(response => {
            const categories = Object.keys(response).map((key: any) => {
                return {
                    id: CATEGORIES[key].id,
                    icon: CATEGORIES[key].icon
                }
            })
            dispatch({ type: types.FETCH_CATEGORIES_SUCCESS, payload: categories });
        }
        )
        .catch(error => {
            dispatch({ type: types.FETCH_CATEGORIES_FAILURE, payload: error });
        }
        );
}

export const fetchRandomJoke = (category: string) => (dispatch: any) => {
    dispatch({ type: types.FETCH_RANDOM_JOKE_REQUEST });
    ApiData.getRandomFact(category)
        .then(response => {
            dispatch({ type: types.FETCH_RANDOM_JOKE_SUCCESS, payload: response });
        }
        )
        .catch(error => {
            dispatch({ type: types.FETCH_RANDOM_JOKE_FAILURE, payload: error });
        }
        );
}

