interface Props {
    activeClass: string;
}

const BookmarksSettings = (props: Props) => {
    return (
        <div className={"bookmarks-view" + props.activeClass}>
            Совсем скоро здесь появятся закладки
            {/* <div className="bookmark-box">
                        <div className="bookmark">
                            <div className="bookmark-head">
                                <div className="bookmark-favicon"></div>
                                <div className="bookmark-title"></div>
                            </div>
                            <a
                                href="https://google.com"
                                className="bookmark-body"
                            ></a>
                        </div>
                    </div> */}
        </div>
    );
};

export default BookmarksSettings;
