import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useState } from "react";

interface Props {
    activeClass: string;
}

const ColorsPreviews = (props: Props) => {
    const { colors } = useTypedSelector((state) => state.colors);
    const settings = useTypedSelector((state) => state.settings);
    const { setColors, setSettings } = useActions();

    const [color, setColor] = useState("#000000");

    const backgroundChangeHandler = (bg: string) => {
        const newSettings = settings;
        newSettings.background = bg;

        setSettings(newSettings);
    };

    const addColorHandle = (color: string) => {
        const newColors = colors;
        newColors.unshift(color);

        setColors(newColors);
        console.log(colors);
    };

    return (
        <div className={"colors-view" + props.activeClass}>
            <div className="input-box">
                <input type="text" value={color} readOnly />
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <button
                    className="add-color-btn"
                    onClick={() => addColorHandle(color)}
                >
                    Добавить
                </button>
            </div>
            <div className="previews colors">
                {colors &&
                    colors.map((color, i) => (
                        <div
                            className="preview-box"
                            key={i}
                            onClick={() => backgroundChangeHandler(color)}
                        >
                            <div
                                className="preview color"
                                style={{ background: color }}
                            ></div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ColorsPreviews;
