import Hello from './components/Hello.tsx'
import Footer from './components/Footer.tsx'
import Project from './components/Project.tsx'
import SocialMedias from './components/SocialMedias.tsx'
import Notes from './components/Notes.tsx'
import Skills from "./components/Skills.tsx";
import './Index.css'

const Index = () => {
    return (
        // <main className="py-[8vh] max-w-[80ch] mx-auto dark:prose-invert">
        <main className="px-6 py-[8vh] max-w-[76ch] mx-auto  dark:prose-invert">
            <Hello/>
            <SocialMedias/>
            <Skills/>
            <Project/>
            <Notes/>
            <Footer/>
        </main>
    )
}

export default Index