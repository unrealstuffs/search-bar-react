import { PhotosAction, PhotosStateActionTypes } from "../types/photos";
import { Dispatch } from "redux";
import axios from "axios";

export const getPhotos =
    (query: string) => async (dispatch: Dispatch<PhotosAction>) => {
        try {
            dispatch({
                type: PhotosStateActionTypes.GET_PHOTOS_QUERY,
            });

            axios
                .get(
                    `https://api.unsplash.com/search/photos?query=${query}&per_page=25&orientation=landscape&client_id=CgcJzLyLwsl2CXp_BNEwr1ZBBuiS_TvVFYn3tqZQMA8`
                )
                .then((response) => {
                    dispatch({
                        type: PhotosStateActionTypes.GET_PHOTOS_SUCCESS,
                        payload: response.data,
                    });
                })
                .catch((error) => {
                    dispatch({
                        type: PhotosStateActionTypes.GET_PHOTOS_ERROR,
                        payload: error,
                    });
                });
        } catch (error) {
            dispatch({
                type: PhotosStateActionTypes.GET_PHOTOS_ERROR,
                payload: "Ошибка",
            });
        }
    };
