import About from '../about/About';
import Contact from '../contact/Contact';
import Experience from '../experience/Experience';
import Home from '../home/Home';
import Project from '../projects/Project';

const FullPage = () => {
    return (
        <>
            <Home />
            <About />
            <Experience />
            <Project />
            <Contact />
        </>
    );
}

export default FullPage;