

function IndividualItems({itemName, noArrow, onClick}) {
    return (
        <>
            <div className="individual-items flex justify-between items-start box-border py-[0px] px-[11px] outline-[0px] w-full" >
                <button className="root flex-row-reverse" onClick={onClick}>
                    <div className="arrow-button relative shrink-0 inline-block align-top">
                        {noArrow ? "" :  <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/arrow-head-right.304b330.svg" width="24" height="24" loading="lazy" alt=""></img>}
                    </div>
                    <span className="label">
                        <div className="label-text-container flex flex-row">
                            {itemName}
                        </div>
                    </span>
                </button>
            </div>
        </>
    )
}

export default IndividualItems 