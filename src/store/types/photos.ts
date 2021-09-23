export interface PhotosState {
    loading: boolean;
    error: string | null;
    photos: any[];
}

export enum PhotosStateActionTypes {
    GET_PHOTOS_QUERY = "GET_PHOTOS_QUERY",
    GET_PHOTOS_ERROR = "GET_PHOTOS_ERROR",
    GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS",
}

interface GetPhotosAction {
    type: PhotosStateActionTypes.GET_PHOTOS_QUERY;
}

interface GetPhotosErrorAction {
    type: PhotosStateActionTypes.GET_PHOTOS_ERROR;
    payload: string;
}

interface GetPhotosSuccessAction {
    type: PhotosStateActionTypes.GET_PHOTOS_SUCCESS;
    payload: any[];
}

export type PhotosAction =
    | GetPhotosAction
    | GetPhotosErrorAction
    | GetPhotosSuccessAction;
