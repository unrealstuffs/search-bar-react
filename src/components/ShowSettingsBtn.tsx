import { useActions } from "../hooks/useActions";

const ShowSettingsBtn = () => {
    const { toggleSettingsModal } = useActions();

    const handleButton = () => {
        toggleSettingsModal(true);
    };

    return (
        <div className="show-settings-btn" onClick={handleButton}>
            <div className="icon icon-more"></div>
        </div>
    );
};

export default ShowSettingsBtn;
