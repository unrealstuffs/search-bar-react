import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useState } from "react";

interface Props {
    activeClass: string;
}

const UploadPhoto = (props: Props) => {
    const settings = useTypedSelector((state) => state.settings);
    const { setSettings } = useActions();
    const [image, setImage] = useState<any>();

    const uploadImageHandle = (e: any) => {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];

        if (reader && file) {
            reader.onloadend = () => {
                setImage(reader.result);
                const newSettings = settings;
                newSettings.background = `url(${image})`;
                setSettings(newSettings);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={"upload-view" + props.activeClass}>
            <label className="add-img-area">
                <input type="file" onChange={uploadImageHandle} />
                <div className="text">Добавить изображение</div>
                <div className="text">
                    Переместите сюда изображение или
                    <span className="blue-text"> выберите </span>
                    изображение для загрузки
                </div>
            </label>
            <div className="add-img-desc">
                Рекомендуемый размер: 1440 х 820 (не более 8MB)
            </div>
        </div>
    );
};

export default UploadPhoto;
