import './Components.css'

export default () => {
    const openLink = () => {
        window.open('https://github.com/rryanchiu', '_blank')
    }

    const projects = [{
        name: 'Smart Dalton💬',
        icon: 'An simple web UI for ChatGPT',
        url: 'https://chatgpt.ililili.me/',
        description: 'An simple web UI for ChatGPT',
    }]
    return (
        <>
            <h2 className="flex ">
                <span className="title">Projects</span>
                <div
                    onClick={openLink}
                    className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
                >
                    <div className="ri-arrow-right-up-line text-3xl"></div>
                </div>
            </h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {projects.map((item, index) => (
                    <div key={index} className={'rd-2 p-3 bg-[#f8f8f8] flex color-gray-8 gap-4 cursor-pointer hover:bg-dark-2 hover:color-gray-1'} onClick={() => {
                        window.open(item.url)
                    }}>
                        <img src="/dalton.svg" alt="" className={'w-10'}/>

                        <div className={' grid '}>
                            <span className={'font-700'}>  {item.name}</span>
                            <span className={' text-sm'}>  {item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}