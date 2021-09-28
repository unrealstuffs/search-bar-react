import { useTypedSelector } from "../hooks/useTypedSelector";

const PinnedApps = () => {
    const { apps } = useTypedSelector((state) => state.apps);

    return (
        <div className="pinned-bookmarks-box">
            {apps &&
                apps.map((app: any, i) => (
                    <a
                        className="pinned-bookmarks-item"
                        href={app.url}
                        key={"app-" + i}
                    >
                        <div
                            className="pinned-bookmarks-img"
                            style={{ backgroundImage: app.file }}
                        ></div>
                        <div className="pinned-bookmarks-title">{app.name}</div>
                    </a>
                ))}
        </div>
    );
};

export default PinnedApps;
