import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import AppsSettings from "./AppsSettings";
import BookmarksSettings from "./BookmarksSettings";
import GeneralSettings from "./GeneralSettings";
import WPSettings from "./WPSettings";

const SettingsModal = () => {
    const { toggleSettingsModal } = useActions();
    const { isOpen } = useTypedSelector((state) => state.settingsModal);
    const [modalIndex, setModalIndex] = useState(1);

    const handleClose = () => {
        toggleSettingsModal(false);
    };

    const toggleTab = (index: number) => {
        setModalIndex(index);
    };

    return (
        <div className={"settings-modal" + (isOpen ? " show" : "")}>
            <div className="settings-modal-head">
                <div className="settings-modal-menu">
                    <div
                        onClick={() => toggleTab(1)}
                        className="settings-modal-menu-item"
                    >
                        <div className="icon icon-settings"></div>
                        <div className="settings-modal-menu-item-text">
                            Настройки
                        </div>
                    </div>
                    <div
                        onClick={() => toggleTab(2)}
                        className="settings-modal-menu-item"
                    >
                        <div className="icon icon-landscape"></div>
                        <div className="settings-modal-menu-item-text">Фон</div>
                    </div>
                    <div
                        onClick={() => toggleTab(3)}
                        className="settings-modal-menu-item"
                    >
                        <div className="icon icon-apps"></div>
                        <div className="settings-modal-menu-item-text">
                            Приложения
                        </div>
                    </div>
                    <div
                        onClick={() => toggleTab(4)}
                        className="settings-modal-menu-item"
                    >
                        <div className="icon icon-bookmark"></div>
                        <div className="settings-modal-menu-item-text">
                            Закладки
                        </div>
                    </div>
                </div>
                <div className="icon icon-close" onClick={handleClose}></div>
            </div>
            <div className="settings-modal-view">
                <GeneralSettings activeClass={modalIndex === 1 ? " a" : ""} />
                <WPSettings activeClass={modalIndex === 2 ? " a" : ""} />
                <AppsSettings activeClass={modalIndex === 3 ? " a" : ""} />
                <BookmarksSettings activeClass={modalIndex === 4 ? " a" : ""} />
            </div>
        </div>
    );
};

export default SettingsModal;
