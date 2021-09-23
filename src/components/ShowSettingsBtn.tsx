import { useActions } from "../hooks/useActions";

const ShowSettingsBtn = () => {
    const { toggleModal } = useActions();

    const handleButton = () => {
        toggleModal(true);
    };

    return (
        <div className="show-settings-btn" onClick={handleButton}>
            <div className="icon icon-more"></div>
        </div>
    );
};

export default ShowSettingsBtn;
