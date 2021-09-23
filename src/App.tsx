import { CSSProperties } from "react";
import SearchBar from "./components/SearchBar";
import SettingsModal from "./components/SettingsModal";
import ShowSettingsBtn from "./components/ShowSettingsBtn";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App: React.FC = () => {
    const { background, theme } = useTypedSelector((state) => state.settings);
    const style: CSSProperties = {
        background: `${background} center center / cover no-repeat`,
    };

    return (
        <div id="app" style={style} className={theme}>
            <SearchBar />
            <ShowSettingsBtn />
            <SettingsModal />
        </div>
    );
};

export default App;
