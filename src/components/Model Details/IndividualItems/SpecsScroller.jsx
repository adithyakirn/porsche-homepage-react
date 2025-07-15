import React, { useEffect, useState } from 'react'

function SpecsScroller() {
    const [res, setRes] = useState(null)
    useEffect(() => {

        async function fetchData() {

            try {
                const data = await fetch('/JSON/Car Specs/specs.json')
                const res = await data.json()
                setRes(res)
            }
            catch (error) {
                console.log(error)
            }

        }
        fetchData()
    }, [])
    return (
        res?.map((e, index) => (
            <div key={index} className="specs-individual-container shrink-0 mr-[clamp(16px,12px+1.25vw,36px)] w-[calc(100vw-44px)]">
                <div className="specs items-start grid rounded-[12px]">
                    <div className="specs-image overflow-hidden relative rounded-[12px] ">
                        <picture>
                            <source srcSet={e.source1} media="(max-width: 479px)" width="1272" height="954" />
                            <source srcSet={e.source2} media="(max-width: 759px)" width="1272" height="954" />
                            <source srcSet={e.source3} media="(max-width: 999px)" width="1272" height="954" />
                            <source srcSet={e.source4} media="(max-width: 1299px)" width="1272" height="954" />
                            <source srcSet={e.source5} media="(max-width: 1759px)" width="1272" height="954" />
                            <source srcSet={e.source6} media="(max-width: 1919px)" width="1272" height="954" />
                            <source srcSet={e.source7} media="(min-width: 1920px)" width="1272" height="954" />
                            <img className="aspect-[1272/954] max-w-full h-auto block" src={e.img} alt="" width="1272" height="954" loading="lazy" fetchPriority="auto" /></picture>
                    </div>
                    <div className="specs-text pr-[clamp(16px,1.25vw+12px,36px)] p-[calc(clamp(32px,2.75vw+23px,76px)-clamp(16px,1.25vw+12px,36px))_0_0] self-center">
                        <h2 className="specs-header m-0 text-black text-start whitespace-normal">{e.Engine}</h2>
                        <p className="specs-para mt-[clamp(8px,.5vw+6px,16px)] !text-black text-start whitespace-break-spaces">{e.EngineSpec}</p>
                    </div>
                </div>
            </div>
        ))
    )
}

export default SpecsScroller