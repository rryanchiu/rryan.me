
import './Components.css'

export default () => {
    const openLink = () => {
        window.open('https://github.com/rryanchiu', '_blank')
    }
    return (
        <>
            <h2 className="flex full">
                <span className="title">Projects</span>
                <div
                    onClick={openLink}
                    className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
                >
                    <i className="suffix-button ri-arrow-right-up-line"></i>
                </div>
            </h2>
        </>
    )
}