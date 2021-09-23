import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import localCategories from "../constants/categories";
import localPhotos from "../constants/photos";

interface Props {
    activeClass: string;
}

const PhotosPreviews = (props: Props) => {
    const [query, setQuery] = useState("");

    const { currCat } = useTypedSelector((state) => state.category);
    const { photos, loading }: any = useTypedSelector((state) => state.photos);
    const settings = useTypedSelector((state) => state.settings);
    const { getPhotos, setCategory, setSettings } = useActions();

    const backgroundChangeHandler = (bg: string) => {
        const newSettings = settings;
        newSettings.background = bg;

        setSettings(newSettings);
    };

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            getPhotos(query);
            if (query !== "") {
                setCategory("search");
            }
        }, 500);
        return () => clearTimeout(timeOutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <div className={"photos-view" + props.activeClass}>
            <div className="wp-search">
                <div className="icon icon-search"></div>
                <input
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    type="text"
                    placeholder="Найти фото..."
                />
            </div>

            <div className="previews photos">
                {!currCat &&
                    localCategories.map((category, i) => (
                        <div
                            className="preview-box"
                            key={"cat-" + i}
                            onClick={() => setCategory(category.name)}
                        >
                            <div
                                className="preview category"
                                style={{
                                    backgroundImage: `url(${category.preview})`,
                                }}
                            >
                                <div className="category-name">
                                    {category.title}
                                </div>
                            </div>
                        </div>
                    ))}
                {currCat &&
                    localPhotos.map((photo, i) => {
                        return photo.category === currCat ? (
                            <div
                                className="preview-box"
                                key={"photo-" + i}
                                onClick={() =>
                                    backgroundChangeHandler(`url(${photo.src})`)
                                }
                            >
                                <div
                                    className="preview photo"
                                    style={{
                                        backgroundImage: `url(${photo.preview})`,
                                    }}
                                ></div>
                            </div>
                        ) : null;
                    })}
                {currCat === "search" &&
                    !loading &&
                    photos.results.map((photo: any, i: number) => (
                        <div
                            className="preview-box"
                            key={"photo-" + i}
                            onClick={() =>
                                backgroundChangeHandler(
                                    `url(${photo.urls.regular})`
                                )
                            }
                        >
                            <div
                                className="preview photo"
                                style={{
                                    backgroundImage: `url(${photo.urls.thumb})`,
                                }}
                            ></div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default PhotosPreviews;
