import React, { useState, useEffect, useContext } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import styled, { keyframes } from 'styled-components';
import Header from '@/components/layout/header';
import ArtistsSection from './artists';
import ExhibitionsSection from './exhibitions';
import GallerysSection from './gallerys';
import AboutSection from './about';
import ArticleSection from './article';

declare const window: Window &
  typeof globalThis & {
    fullpage_api: any;
  };

const SidebarContainer = styled.div`
  position: absolute;
  width: calc(50vw - 900px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  @media (max-width: 1920px) {
    width: 60px;
  }
  @media (max-width: 768px) {
    width: 24px;
  }
`;
const ScrollTransition = styled.div`
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 60px;
  height: ${(props: any) => props.height}px;
  @media (max-width: 1300px) {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    display: none !important;
  }
`;
const ScrollUpsideBarAnimation = keyframes`
    0%{
        clip-path: inset(175px 0px 0px 0px);
    }
    100%{
        clip-path: inset(0px 0px 0px 0px);
    }
`;
const ScrollUpsideBar = styled.svg`
  animation: ${ScrollUpsideBarAnimation} 1s ease 1;
  animation-fill-mode: forwards;
  height: ${(props: any) => props.height}px;
`;
const RectButtonsAppearAnimation = keyframes`
    0%{
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
    100%{
        transform: translateX(0px);
        -webkit-transform: translateX(0px);
    }
`;
const RectButtonsTransition = styled.div`
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  animation: ${RectButtonsAppearAnimation} 0.8s ease 1;
  animation-fill-mode: forwards;
`;
const RectButtonsContainer = styled.div`
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
`;
const RectButtonAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;
const RectButtonContainer = styled.div`
  transform: ${(props: any) =>
    props.play == 'true' ? 'scale(0)' : 'scale(1)'};
  animation: ${(props: any) =>
    props.play == 'true' ? RectButtonAnimation : ''}
    0.5s ${(props: any) => props.duration * props.index}s
    cubic-bezier(0.65, 0.01, 0.39, 0.99) 1;
  animation-fill-mode: forwards;
`;

const Fullpage = (props: any) => {
  return (
    <ReactFullpage
      licenseKey={'3B75641E-F89E4DA2-B934C3D7-ED8E03F1'}
      scrollingSpeed={1000} /* Options here */
      onLeave={(prev, current) => props.moveToAction(current.index)}
      scrollOverflow={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className='section'>
              <ArtistsSection size={props.size} />
            </div>
            <div className='section'>
              <ExhibitionsSection size={props.size} />
            </div>
            <div className='section'>
              <GallerysSection size={props.size} />
            </div>
            <div className='section'>
              <AboutSection size={props.size} />
            </div>
            <div className='section'>
              <ArticleSection size={props.size} />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

const MainLayout = () => {
  const arrayIterator = new Array(5).fill(0);

  const [sectionIdx, setSectionIdx] = useState(0);

  const handleSelectSlider = (idx: any) => {
    setSectionIdx(idx);
    window.fullpage_api.moveTo(idx + 1);
  };

  const handleSetIndex = (idx: any) => {
    setSectionIdx(idx);
  };

  const handleSelectHeader = (idx: any) => () => {
    handleSelectSlider(idx)
  }
  const RectButton = ({ index }: { index: any }) => {
    return (
      <RectButtonContainer onClick={() => handleSelectSlider(index)}>
        <svg width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '6px', cursor: 'pointer' }}>
          <rect x="0.707107" y="10" width="13.1421" height="13.1421" transform="rotate(-45 0.707107 10)" fill={sectionIdx === index ? "#FF1C6E" : 'white'} fillOpacity="0.3" stroke={sectionIdx === index ? "#FF1C6E" : 'white'} />
        </svg>
      </RectButtonContainer>
    );
  };

  return (
    <>
      <Header sectionIdx={sectionIdx} onClick={handleSelectHeader} />
      {sectionIdx < 5 ? (
        <SidebarContainer>
          <ScrollTransition>
            <div style={{ marginBottom: '1.07vh' }}>
              {
                <ScrollUpsideBar
                  height='18vh'
                  viewBox='0 0 10 185'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.5'
                    d='M5.00001 0.669876L9.33014 5L5.00001 9.33012L0.669881 5L5.00001 0.669876ZM4.25001 185L4.25001 5L5.75001 5L5.75001 185L4.25001 185Z'
                    fill='white'
                    className='transition-all duration-500'
                  />
                </ScrollUpsideBar>
              }
            </div>

            <RectButtonsContainer>
              <RectButtonsTransition>
                {arrayIterator.map((item, idx) => {
                  return <RectButton index={idx} key={idx}></RectButton>;
                })}
              </RectButtonsTransition>
            </RectButtonsContainer>

            <div style={{ marginTop: '1.07vh' }}>
              {
                <ScrollUpsideBar
                  id='upperarrow'
                  height='18vh'
                  viewBox='0 0 10 185'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ transform: 'rotate(180deg)' }}
                >
                  <path
                    opacity='0.5'
                    d='M5.00001 0.669876L9.33014 5L5.00001 9.33012L0.669881 5L5.00001 0.669876ZM4.25001 185L4.25001 5L5.75001 5L5.75001 185L4.25001 185Z'
                    fill='white'
                    className='transition-all duration-500'
                  />
                </ScrollUpsideBar>
              }
            </div>
          </ScrollTransition>
        </SidebarContainer>
      ) : (
        <></>
      )}
      <Fullpage moveToAction={handleSetIndex} />
    </>
  );
};

export default MainLayout;
