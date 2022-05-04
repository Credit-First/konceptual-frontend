import * as React from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, main }: { children: React.ReactNode, main?: any }) {

  const [sectionIdx, setSectionIdx] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.screen.height - 150) setSectionIdx(1);
      else setSectionIdx(0)
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header sectionIdx={sectionIdx} main={main} />
      <div className='body'>{children}</div>
      <Footer />
    </>
  );
}
