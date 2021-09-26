import * as ModalActionCreators from "./modal";
import * as SettingsActionCreators from "./settings";
import * as CategoryActionCreators from "./category";
import * as PhotosActionCreators from "./photos";
import * as ColorsActionCreators from "./colors";
import * as AppsActionCreators from "./apps";

const ActionCreators = {
    ...ModalActionCreators,
    ...SettingsActionCreators,
    ...CategoryActionCreators,
    ...PhotosActionCreators,
    ...ColorsActionCreators,
    ...AppsActionCreators,
};

export default ActionCreators;
