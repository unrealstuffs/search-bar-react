import { useRef } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import PinnedApps from "./PinnedApps";

const SearchBar: React.FC = () => {
    const searchBarInput = useRef<HTMLInputElement>(null);
    const { searchSystem, roundingLine } = useTypedSelector(
        (state) => state.settings
    );

    const searchSubmitHandler = (e: any) => {
        e.preventDefault();

        const query = searchBarInput.current?.value;

        if (searchSystem === "yandex") {
            window.location.href = `https://yandex.ru/search/?text=${query}`;
        } else if (searchSystem === "google") {
            window.location.href = `https://www.google.com/search?q=${query}`;
        }
    };

    return (
        <div className="main-box">
            <form
                onSubmit={searchSubmitHandler}
                className="search-bar"
                autoComplete="off"
                style={{ borderRadius: roundingLine + "px" }}
            >
                <div className="icon icon-search"></div>
                <input
                    ref={searchBarInput}
                    className="search-bar-input"
                    type="text"
                />
            </form>
            <PinnedApps />
        </div>
    );
};

export default SearchBar;
