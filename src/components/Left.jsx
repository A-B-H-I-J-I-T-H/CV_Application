import reactLogo from '../assets/odin-lined.png'

function Left() {
    return (
        <div className="left">
            <div className="logo">
                <div className="icon">
                    <img src={reactLogo} alt="picture of odin" width="100" />
                </div>
                <div className="text">
                    ODIN
                </div>
            </div>
            <div className="credit">
                Photo by <a href = "https://unsplash.com/@haliewestphoto">Halie West</a> on <a href = "https://unsplash.com/">Unsplash</a>
            </div>
        </div>
    );
}

export default Left;