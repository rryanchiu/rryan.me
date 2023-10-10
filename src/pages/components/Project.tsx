
import './Components.css'

export default () => {
    const openLink = () => {
        window.open('https://github.com/rryanchiu', '_blank')
    }
    return (
        <>
            <h2 className="flex ">
                <span className="title">Projects</span>
                <div
                    onClick={openLink}
                    className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
                >
                    <div className="ri-arrow-right-up-line text-3xl" ></div>
                </div>
            </h2>
        </>
    )
}