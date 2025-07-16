import React, { useEffect, useState } from 'react'
import OverviewLists from './OverviewLists'
import { useNavigate } from 'react-router-dom';

function OverviewIndividualItems({ model, color }) {
    const [res, setRes] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            try {
                const modelMap = {
                    "1": "/JSON/911 Models/911CarreraModels.json",
                    "2": "/JSON/911 Models/911CarreraCabriolet.json",
                    "3": "/JSON/911 Models/911Targa.json",
                    "4": "/JSON/911 Models/911GT3.json",
                    "5": "/JSON/911 Models/911Spirit70.json",
                    "6": "/JSON/911 Models/911GT3RS.json",
                    "7": "/JSON/911 Models/911Turbo50Years.json",
                    "8": "/JSON/911 Models/911TurboCoupé.json",
                    "9": "/JSON/911 Models/911TurboCabriolet.json",
                    "10": "/JSON/718 Models/718Models.json",
                    "11": "/JSON/718 Models/718CaymanGT4RS.json",
                    "12": "/JSON/718 Models/718SpyderRS.json",
                    "13": "/JSON/Taycan Models/Taycan.json",
                    "14": "/JSON/Panamera models/panameraModels.json",
                    "15": "/JSON/Panamera models/panameraExecutive.json",
                    "16": "/JSON/Macan Models/MacanModels.json",
                    "17": "/JSON/Cayenne Models/cayenneModels.json",
                    "18": "/JSON/Cayenne Models/cayenneCoupe.json",
                };

                const url = modelMap[model];
                if (!url) return;

                const response = await fetch(url);
                const data = await response.json();
                setRes(data);
            } catch (error) {
                console.error("Error fetching model data:", error);
            }
        }    

        fetchData();
    }, [model]);
    // console.log(log)
    return (
        <>
       { res.map((item) => (
            <div className="individual-model-overview-container relative" key={item.name} onClick={() => navigate(`/model/${item.id}`)}>
                <div className={`individual-overview-models bg-white ${color && "!bg-[rgb(238,239,242)]"}`}>
                    <div className="individual-overview-image-container relative">
                        <div className="tag-overview-container inline-flex align-top whitespace-nowrap">
                            <span>{item.tag}</span>
                        </div>
                        <img src={item.image} className='over-car-container' width="2560" height="760" srcSet={item.srcSet} sizes="(min-width: 1920px) 345px,(min-width: 1760px) 20vw,(min-width: 1300px) 25vw,(min-width: 1000px) 30vw,(min-width: 760px) 40vw,(min-width: 480px) 75vw,71vw" loading='lazy' alt={item.name} />
                        <h3 className="overview-modelname-Container m-0 text-balance">{item.name}</h3>
                    </div>
                    <div className="overview-model-disclaimer">
                        <p className="overview-model-text">{item.subhead}</p>
                    </div>
                    <ul className="overview-model-ul">
                        <OverviewLists head={item.listHead1} subHead={item.listsSub1} />
                        <OverviewLists head={item.listHead2} subHead={item.listsSub2} />
                        <OverviewLists head={item.listHead3} subHead={item.listsSub3} />
                    </ul>
                    <div className="overview-buttons-container relative flex flex-wrap">
                        <div className="overview-button-container inline-flex align-top outline-0 rounded-[4px]">
                            <div className="overview-select-button"><span className="label">Select model</span></div>
                        </div>
                        <div className="overview-button-container inline-flex align-top outline-0 rounded-[4px]">
                            <div className="overview-compare-button"><span className="label">Compare</span></div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }
</>
    )
}

export default OverviewIndividualItems