import {
    PhotosAction,
    PhotosStateActionTypes,
    PhotosState,
} from "../types/photos";

const initialState: PhotosState = {
    loading: false,
    error: null,
    photos: [],
};

export const photosReducer = (
    state = initialState,
    action: PhotosAction
): PhotosState => {
    switch (action.type) {
        case PhotosStateActionTypes.GET_PHOTOS_QUERY:
            return {
                loading: true,
                error: null,
                photos: [],
            };
        case PhotosStateActionTypes.GET_PHOTOS_ERROR:
            return {
                loading: false,
                error: action.payload,
                photos: [],
            };
        case PhotosStateActionTypes.GET_PHOTOS_SUCCESS:
            return {
                loading: false,
                error: null,
                photos: action.payload,
            };
        default:
            return state;
    }
};
