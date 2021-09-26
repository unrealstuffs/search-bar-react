import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface Props {
    activeClass: string;
}

const AppsSettings = (props: Props) => {
    const { apps } = useTypedSelector((state) => state.apps);
    const { toggleAppsModal, setApps } = useActions();

    const handleOpen = () => {
        toggleAppsModal(true);
    };

    const deleteAppHandler = (id: number) => {
        const newArr = apps.filter((value, index, arr) => {
            return index !== id;
        });
        setApps(newArr);
    };

    return (
        <div className={"apps-settings-view" + props.activeClass}>
            {apps &&
                apps.map((app: any, i) => (
                    <div className="apps-item" key={"app-" + i}>
                        <div
                            className="app-icon"
                            style={{
                                backgroundImage: app.file,
                            }}
                        ></div>
                        <div className="app-title">{app.name}</div>
                        <div
                            className="icon icon-close"
                            onClick={() => deleteAppHandler(i)}
                        ></div>
                    </div>
                ))}

            <div className="apps-item add-app" onClick={handleOpen}>
                <div className="app-icon icon icon-plus-2"></div>
            </div>
        </div>
    );
};

export default AppsSettings;
