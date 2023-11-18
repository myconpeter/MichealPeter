
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import SocialSmall from "./components/SocialSmall";


function App() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <span className='mr-3'>
            L
          </span>

        </>
      ),
      href: 'https://linkedin.com/in/micheal-peter-b342b2249'
    },
    {
      id: 2,
      child: (
        <>
          Mail
          <span className='mr-3'>
            M
          </span>

        </>
      ),
      href: 'mailto:michealpeter040@gmail.com'
    },
    {
      id: 3,
      child: (
        <>
          Github
          <span className='mr-3'>
            G
          </span>

        </>
      ),
      href: 'https://github.com/myconpeter'
    },
    {
      id: 4,
      child: (
        <>
          Stack
          <span className='mr-3'>
            S
          </span>

        </>
      ),
      href: 'https://stackoverflow.com/users/15232295/mycon'
    },

    {
      id: 5,
      child: (
        <>
          X
          <span className='mr-3'>
            X
          </span>

        </>
      ),
      href: 'https://twitter.com/GreatmyconPeter',
      download: true
    },
    {
      id: 6,
      child: (
        <>
          Resume
          <span className='mr-3'>
            S
          </span>

        </>
      ),
      href: '/MichealpeterResume.pdf',
      download: true
    },
  ]
  return (
    <div className="dark:bg-black">


      <Navbar />
      <Home />
      <SocialLinks links={links} />
      <About />
      <Portfolio />
      <Experience />
      <Personal />

      <Contact />
      <SocialSmall />

      <Footer />

    </div>
  );
}


export default App;
