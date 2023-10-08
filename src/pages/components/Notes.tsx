
import './Components.css'

export default () => {
    const openLink = () => {
        window.open('https://notes.rryan.me', '_blank')
    }
    return (
        <>
            <h2 className="flex full">
                <span className="title">Notes</span>
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