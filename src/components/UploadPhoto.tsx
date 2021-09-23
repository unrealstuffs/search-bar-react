import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

interface Props {
    activeClass: string;
}

const UploadPhoto = (props: Props) => {
    const settings = useTypedSelector((state) => state.settings);
    const { setSettings } = useActions();

    const uploadImageHandle = (file: any) => {
        const newSettings = settings;
        newSettings.background = `url(${URL.createObjectURL(file)})`;

        setSettings(newSettings);
    };

    return (
        <div className={"upload-view" + props.activeClass}>
            <label className="add-img-area">
                <input
                    type="file"
                    onChange={(event: any) => {
                        uploadImageHandle(event.target.files[0]);
                    }}
                />
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
