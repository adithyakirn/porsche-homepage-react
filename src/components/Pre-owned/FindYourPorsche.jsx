import React from 'react'
import "./findPorsche.css"
export default function FindYourPorsche() {
    return (
        <>
            <section className="find-section items-stretch grid ">
                <div className="pre-ownedImage-container">
                    <picture><source media="(max-width: 479px)" srcset="https://porsche.imgix.net/-/media/01A8E09F7A90422D992B0FD2E1EAD305__4-3_porsche_finder?iar=0&amp;w=407&amp;ar=4%3A3&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/01A8E09F7A90422D992B0FD2E1EAD305__4-3_porsche_finder?iar=0&amp;w=407&amp;ar=4%3A3&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="1200" height="900"></source><source media="(max-width: 759px)" srcset="https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=645&amp;ar=16%3A9&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=645&amp;ar=16%3A9&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="1920" height="1080"></source><source media="(max-width: 999px)" srcset="https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=819&amp;ar=16%3A9&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=819&amp;ar=16%3A9&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="1920" height="1080"></source><source media="(max-width: 1299px)" srcset="https://porsche.imgix.net/-/media/01A8E09F7A90422D992B0FD2E1EAD305__4-3_porsche_finder?iar=0&amp;w=598&amp;ar=4%3A3&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/01A8E09F7A90422D992B0FD2E1EAD305__4-3_porsche_finder?iar=0&amp;w=598&amp;ar=4%3A3&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="1200" height="900"></source><source media="(max-width: 1759px)" srcset="https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=792&amp;ar=16%3A9&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=792&amp;ar=16%3A9&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="1920" height="1080"></source><source media="(max-width: 1919px)" srcset="https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=865&amp;ar=16%3A9&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=865&amp;ar=16%3A9&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="1920" height="1080"></source><source media="(min-width: 1920px)" srcset="https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=865&amp;ar=16%3A9&amp;q=85&amp;auto=format 1x,https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=865&amp;ar=16%3A9&amp;q=45&amp;dpr=2&amp;auto=format 2x" width="1920" height="1080"></source><img src="https://porsche.imgix.net/-/media/221CEF1CBAE547758D86C68AB019A076__16-9_porsche_finder?iar=0&amp;w=1759&amp;ar=16%3A9&amp;q=85&amp;auto=format" width="1920" height="1079" alt="A woman walks past lined-up Porsche models of different colors." class="PcomPicture__root__18b61 PcomPicture__fit-cover__18b61 PcomPicture__layout-fit-container__18b61" fetchpriority="auto" loading="lazy"></img></picture>
                </div>
                <div className="contents-info bg-[#0c0e12] text-[#fbfcff] flex flex-col justify-center">
                    <div className="contents-wrapper">
                        <h2 className="contents-header m-0 text-[#fbfcff]">Find your new or pre-owned Porsche.</h2>
                        <p className="contents-para text-start font-normal">A Porsche is as individual as its owner. It is always an expression of one’s own personality. We help you find your personal dream vehicle from authorised Porsche Centres. </p>
                        <button className="content-button root">
                            <div className="group">
                                <a href="#" className="root">
                                    <span className='label'>
                                        Find your Porsche
                                    </span>
                                </a>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
