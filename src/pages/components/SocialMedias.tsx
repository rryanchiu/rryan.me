import './Components.css'

export default () => {
    const list = [
        {
            text: 'Github',
            link: 'https://github.com/rryanchiu',
            icon: 'ri-github-fill',
            class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900'
        }, {
            text: 'Blog',
            link: 'https://blog.rryan.me',
            icon: 'ri-book-2-line',
            class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900'
        }, {
            text: '',
            link: 'https://www.linkedin.com/in/xiaoliangqiu/ ',
            icon: 'ri-linkedin-box-fill',
            class: 'hover:bg-[#3088d4]'
        }, {
            text: '',
            link: 'mailto:xiaoliang.qiu@outlook.com',
            icon: 'ri-mail-line',
            class: 'hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900'
        }
    ]
    const openLink = (link: string) => {
        window.open(link, '_blank')
    }
    return (
        <>
            {list.map((item, index) => (
                <button style={{border: "none"}} key={index}
                        onClick={() => openLink(item.link)}
                        className={`inline-flex px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none ${item.class} hover:text-white dark:bg-gray-50/10`}>
                    <i style={{fontSize: '20px'}} className={item.icon}></i>
                    {item.text}
                </button>
            ))}
        </>
    )
}