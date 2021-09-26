import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface Props {
    activeClass: string;
}

const GeneralSettings = (props: Props) => {
    const settings = useTypedSelector((state) => state.settings);
    const { setSettings } = useActions();

    const searchSystemChangeHandler = (e: any) => {
        const newSettings = settings;
        newSettings.searchSystem = e.target.value;

        setSettings(newSettings);
    };

    const themeChangeHandler = (e: any) => {
        const newSettings = settings;
        newSettings.theme = e.target.value;

        setSettings(newSettings);
    };

    const roundingLineChangeHandler = (e: any) => {
        const newSettings = settings;
        newSettings.roundingLine = e.target.value;

        setSettings(newSettings);
    };

    return (
        <div className={"general-settings-view" + props.activeClass}>
            <div className="container">
                <div className="setting-block-title">Общие настройки</div>
                <div className="setting-block">
                    <div className="setting-item">
                        <div className="setting-item-title">
                            Поисковая система
                        </div>
                        <select
                            onChange={searchSystemChangeHandler}
                            value={settings.searchSystem}
                            className="search-engine"
                        >
                            <option value="google">Google</option>
                            <option value="yandex">Яндекс</option>
                        </select>
                    </div>

                    <div className="setting-item">
                        <div className="setting-item-title">Тема</div>
                        <div className="radio-boxes">
                            <label className="x-radio">
                                <input
                                    type="radio"
                                    name="searchBarColor"
                                    value="dark"
                                    className="search-bar-color"
                                    checked={settings.theme === "dark"}
                                    onChange={themeChangeHandler}
                                />
                                <div className="x-radio-box"></div>
                                <div className="x-radio-title">Темная</div>
                            </label>
                            <label className="x-radio">
                                <input
                                    type="radio"
                                    name="searchBarColor"
                                    value="light"
                                    className="search-bar-color"
                                    checked={settings.theme === "light"}
                                    onChange={themeChangeHandler}
                                />
                                <div className="x-radio-box"></div>
                                <div className="x-radio-title">Светлая</div>
                            </label>
                        </div>
                    </div>

                    <div className="setting-item">
                        <div className="setting-item-title">
                            Закругление строки поиска
                        </div>
                        <label>
                            <input
                                type="number"
                                value={settings.roundingLine}
                                onChange={roundingLineChangeHandler}
                            />
                        </label>
                    </div>
                </div>

                <div className="setting-block-title">О приложении</div>
                <div className="setting-block">
                    <div className="setting-item">
                        <div className="setting-item-text">
                            Какая то информация о приложении в двух словах
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="setting-item-text">
                            <a
                                href="https://github.com/unrealstuffs/Search_Bar"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralSettings;
