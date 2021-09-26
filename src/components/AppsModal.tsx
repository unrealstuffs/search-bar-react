import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useRef, useState } from "react";

const AppsModal = () => {
    const { isOpen } = useTypedSelector((state) => state.appsModal);
    const { apps } = useTypedSelector((state) => state.apps);
    const { toggleAppsModal, setApps } = useActions();

    const fileRef = useRef(null);

    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [file, setFile] = useState("");

    const handleClose = () => {
        toggleAppsModal(false);
    };

    const fileUploadHandler = () => {
        // @ts-ignore
        fileRef.current?.click();
    };

    const uploadImageHandler = (uploadedFile: any) => {
        setFile(`url(${URL.createObjectURL(uploadedFile)})`);
    };

    const submitHandler = (e: any) => {
        e.preventDefault();

        const newApps = apps;

        const newApp: any = {
            url,
            name,
            file,
        };
        newApps.push(newApp);

        setApps(newApps);

        setFile("");
        setName("");
        setUrl("");

        toggleAppsModal(false);
    };

    return (
        <div className={"modal-overlay app-modal" + (isOpen ? " show" : "")}>
            <div className="modal">
                <div className="modal-head">
                    <div className="modal-title">Добавить приложение</div>
                    <div
                        className="icon icon-close"
                        onClick={handleClose}
                    ></div>
                </div>
                <form className="modal-body" onSubmit={submitHandler}>
                    <div className="input-box">
                        <label htmlFor="url">URL</label>
                        <input
                            name="url"
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.currentTarget.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="name">Название</label>
                        <input
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                    </div>
                    <div className="box">
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileRef}
                            onChange={(e: any) =>
                                uploadImageHandler(e.target.files[0])
                            }
                        />
                        <div className="preview-box">
                            <div
                                className="preview"
                                style={{ backgroundImage: file }}
                            ></div>
                        </div>
                        <div className="btns-box">
                            <button
                                type="button"
                                className="modal-btn"
                                onClick={fileUploadHandler}
                            >
                                <span className="icon icon-upload"></span>
                                Загрузить иконку
                            </button>
                            <button type="submit" className="modal-btn">
                                <span className="icon icon-save"></span>
                                Сохранить
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppsModal;
