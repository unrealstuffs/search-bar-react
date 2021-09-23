import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import GeneralSettings from "./GeneralSettings";
import WPSettings from "./WPSettings";

const SettingsModal = () => {
    const { toggleModal } = useActions();
    const { isOpen } = useTypedSelector((state) => state.modal);
    const [modalIndex, setModalIndex] = useState(1);

    const handleClose = () => {
        toggleModal(false);
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
                <div
                    className={
                        "general-settings-view" + (modalIndex === 1 ? " a" : "")
                    }
                >
                    <GeneralSettings />
                </div>
                <div
                    className={
                        "wp-settings-view" + (modalIndex === 2 ? " a" : "")
                    }
                >
                    <WPSettings />
                </div>
                <div
                    className={
                        "apps-settings-view" + (modalIndex === 3 ? " a" : "")
                    }
                >
                    Совсем скоро здесь появятся приложения
                </div>
                <div
                    className={
                        "bookmarks-view" + (modalIndex === 4 ? " a" : "")
                    }
                >
                    Совсем скоро здесь появятся закладки
                    {/* <div className="bookmark-box">
                        <div className="bookmark">
                            <div className="bookmark-head">
                                <div className="bookmark-favicon"></div>
                                <div className="bookmark-title"></div>
                            </div>
                            <a
                                href="https://google.com"
                                className="bookmark-body"
                            ></a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
