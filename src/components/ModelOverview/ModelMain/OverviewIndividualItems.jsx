import React, { useEffect, useState } from 'react'
import OverviewLists from './OverviewLists'

function OverviewIndividualItems({ model }) {
    const [res, setRes] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                let response
                 if(model === "1"){
                   response = await fetch("/JSON/911 Models/911CarreraModels.json")
                }
                    else if(model === "2"){
                        response = await fetch("/JSON/911 Models/911CarreraCabriolet.json");
                    } 
                    else if(model === "3"){
                        response = await fetch("/JSON/911 Models/911Targa.json");
                    }
                    else if(model === "4"){
                        response = await fetch("/JSON/911 Models/911GT3.json")
                    }
                    else if(model === "5"){
                        response = await fetch("/JSON/911 Models/911Spirit70.json")
                    }
                    else if(model === "6"){
                        response = await fetch("/JSON/911 Models/911GT3RS.json")
                    }
                    else if(model === "7"){
                        response = await fetch("/JSON/911 Models/911Turbo50Years.json")
                    }
                    else if(model === "8"){
                        response = await fetch("/JSON/911 Models/911TurboCoupé.json")
                    }
                    else if(model === "9"){
                        response = await fetch("/JSON/911 Models/911TurboCabriolet.json")
                    }
                    else if(model === "10"){
                        response = await fetch("/JSON/718 Models/718Models.json")
                    }
                    else if(model === "11"){
                        response = await fetch("/JSON/718 Models/718CaymanGT4RS.json")
                    }
                    else if(model === "12"){
                        response = await fetch("/JSON/718 Models/718SpyderRS.json")
                    }
                    else if(model === "13"){
                        response = await fetch("/JSON/Taycan Models/Taycan.json")
                    }
                    else if(model === "14"){
                        response = await fetch("/JSON/Panamera models/panameraModels.json")
                    }
                    else if(model === "15"){
                        response = await fetch("/JSON/Panamera models/panameraExecutive.json")
                    }
                    else if(model === "16"){
                        response = await fetch("/JSON/Macan Models/MacanModels.json")
                    }
                    else if(model === "17"){
                        response = await fetch("/JSON/Cayenne Models/cayenneModels.json")
                    }
                    else if(model === "18"){
                        response = await fetch("/JSON/Cayenne Models/cayenneCoupe.json")
                    }
                const data = await response.json();
                setRes(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [model])
    return (
        <>
       { res.map((item) => (
            <div className="individual-model-overview-container relative" key={item.name}>
                <div className="individual-overview-models bg-white">
                    <div className="individual-overview-image-container relative">
                        <div className="tag-overview-container inline-flex align-top whitespace-nowrap">
                            <span>{item.tag}</span>
                        </div>
                        <img src={item.image} width="2560" height="760" srcSet={item.srcSet} sizes="(min-width: 1920px) 345px,(min-width: 1760px) 20vw,(min-width: 1300px) 25vw,(min-width: 1000px) 30vw,(min-width: 760px) 40vw,(min-width: 480px) 75vw,71vw" loading='lazy' alt={item.name} />
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