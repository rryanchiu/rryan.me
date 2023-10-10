import './Components.css'
import  {useState, useEffect} from 'react';
import dayjs from 'dayjs'

export interface PostMeta {
    id: string
    title: string
    url: string
    published_at: string
}

export default () => {
    const [postLists, setPostLists] = useState([]);
    useEffect(() => {
        const getLatestPosts = async () => {
            const apiUrl = 'https://notes.rryan.me/ghost/api/v3/content/posts/?key=ede720d77dfdaca1722cadcf78&limit=5&fields=id,title,url,published_at'
            const res = await fetch(apiUrl);
            const result = await res.json()
            setPostLists(result.posts);
            console.log(postLists)
        }
        getLatestPosts();
    }, []);

    const openLink = (link: string) => {
        window.open(link && link != '' ? link : 'https://notes.rryan.me', '_blank')
    }

    return (
        <>
            <h2 className="flex">
                <span className="title">Notes</span>
                <div
                    onClick={()=>openLink('')}
                    className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
                >
                    <div className="ri-arrow-right-up-line text-3xl"></div>
                </div>
            </h2>
            <div className="grid grid-cols-1 -mx-3">
                {postLists.map((item: PostMeta, index) => (
                    <span
                        key={index}
                        className="text-5 cursor-pointer flex px-3 py-2 mr-2 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
                        onClick={() => openLink(item.url)}
                    >
                        <div className="title">{item.title}</div>
                        <div className="flex op-40 sm:block">{dayjs(item.published_at).format('YYYY-MM-DD')}</div>
                    </span>
                ))}
            </div>
        </>
    )
}

