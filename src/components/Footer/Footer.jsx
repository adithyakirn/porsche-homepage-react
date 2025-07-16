import React from 'react'
import "./Footer.css"
import FootergetinTOuch from './FootergetinTOuch'
import Socialmedia from './Socialmedia'
import FooterList from './FooterList'
import FooterLinks from './FooterLinks'

function Footer() {
    return (
        <>
            <footer className="footer grid gap-[clamp(16px, 12px + 1.25vw, 36px)] max-w-[2560px] min-w-[320px] box-content ">
                <div className="footer-contents grid">
                    <div className="region-container pb-[2.25rem] block">
                        <div className="footer-region-header">
                            <h2 className="footer-rooter">Current Region / Language</h2>
                        </div>
                        <div className="language-selector flex items-center content-center mt-[1rem] text-[rgb(251, 252, 255)]">
                            <div className="india-icon">
                                <img src="https://nav.porsche.com/00BC524/footer/assets/flags/IN.svg" width="24" height="24" loading="lazy" alt=""></img>
                            </div>
                            <div className="india-text-container">
                                <div className="india-text justify-between">
                                    <span className="language-selector pr-[1.5rem]">India / English</span>
                                    <span className="change-lang">Change</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-para grid">
                        <div className='grid gap-[32px] footer-content-container'>
                        <FootergetinTOuch text="Newsletter" para="Latest news directly in your inbox" btntext="Subscribe" anchor={"https://github.com/adithyakirn"} />
                        <FootergetinTOuch text="Contact" para="Do you have any questions?" btntext="Get in touch" anchor={"mailto:adithyakiran021@gmail.com"} />
                        <Socialmedia/>
                        </div>
                        <div className="company-details grid gap-y-[50px] mt-[2.25rem]">
                            <div className="company-details-wrapper mb-[2.25rem]">
                                <div className="footer-header-container pt-[0px] pl-0 mb-[0.675rem]">
                                    <h2 className="footer-header">Company</h2>
                                </div>
                                <div className="footer-para-container grid gap-x-[36px] grid-cols-[repeat(auto-fit, 300px)]">
                                    <div className="footer-para-individual ps-0 mb-0 pl-0">
                                       <FooterList text="Career"/>
                                       <FooterList text="Global Partnership Council"/>
                                       <FooterList text="Compliance"/>
                                       <FooterList text="Sustainability"/>
                                       <FooterList text="Newsroom & Press"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hr-container my-[3rem]">
                            <hr />
                        </div>
                        <div className="copyright-container font-[reg]">
                            © 2025 Porsche India - SKODA AUTO Volkswagen India Private Limited - India. 
                            <FooterLinks text="&nbsp;Legal Notice."/>
                            <FooterLinks text="&nbsp;Cookie Policy."/>
                            <FooterLinks text="Privacy Policy."/>
                            <FooterLinks text="&nbsp;Corporate Governance."/>
                            <FooterLinks text="&nbsp;Open Source Software Notice."/>
                            <FooterLinks text="&nbsp;Whistleblower System. "/>
                        </div>
                        <div className="brand-logo flex justify-center pt-[6rem]">
                            <div className="logo relative inline-block align-top max-w-full max-h-full box-content ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300"><title>Porsche</title><path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer