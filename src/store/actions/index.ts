import * as ModalActionCreators from "./modal";
import * as SettingsActionCreators from "./settings";
import * as CategoryActionCreators from "./category";
import * as PhotosActionCreators from "./photos";
import * as ColorsActionCreators from "./colors";

const ActionCreators = {
    ...ModalActionCreators,
    ...SettingsActionCreators,
    ...CategoryActionCreators,
    ...PhotosActionCreators,
    ...ColorsActionCreators,
};

export default ActionCreators;
