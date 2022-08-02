import * as types from './types';
import { ApiData } from '../api/resources';

export const searchJoke = (query: string) => (dispatch: any) => {
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
    ApiData.getCategories()
        .then(response => {
            dispatch({ type: types.FETCH_CATEGORIES_SUCCESS, payload: response });
        }
        )
        .catch(error => {
            dispatch({ type: types.FETCH_CATEGORIES_FAILURE, payload: error });
        }
        );
}

export const fetchRandomJoke = (category: string) => (dispatch: any) => {
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