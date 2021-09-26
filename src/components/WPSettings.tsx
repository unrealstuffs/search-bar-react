import { useState } from "react";
import { useActions } from "../hooks/useActions";
import ColorsPreviews from "./ColorsPreviews";
import PhotosPreviews from "./PhotosPreviews";
import UploadPhoto from "./UploadPhoto";

interface Props {
    activeClass: string;
}

const WPSettings = (props: Props) => {
    const [modalIndex, setModalIndex] = useState(1);
    const { setCategory } = useActions();

    const toggleTab = (index: number) => {
        setModalIndex(index);
    };

    return (
        <div className={"wp-settings-view" + props.activeClass}>
            <div className="left-part wp-menu">
                <div
                    className="wp-menu-item"
                    onClick={() => {
                        toggleTab(1);
                        setCategory(null);
                    }}
                >
                    <div className="icon icon-photos"></div>
                    <div className="wp-menu-item-text">Фотографии</div>
                </div>
                <div className="wp-menu-item" onClick={() => toggleTab(2)}>
                    <div className="icon icon-colors"></div>
                    <div className="wp-menu-item-text">Цвета</div>
                </div>
                <div className="wp-menu-item" onClick={() => toggleTab(3)}>
                    <div className="icon icon-gallery"></div>
                    <div className="wp-menu-item-text">Загрузить фото</div>
                </div>
            </div>
            <div className="right-part wp-view">
                <PhotosPreviews activeClass={modalIndex === 1 ? " a" : ""} />
                <ColorsPreviews activeClass={modalIndex === 2 ? " a" : ""} />
                <UploadPhoto activeClass={modalIndex === 3 ? " a" : ""} />
            </div>
        </div>
    );
};

export default WPSettings;
