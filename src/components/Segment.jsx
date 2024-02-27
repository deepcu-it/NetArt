import React from "react";

const SpanTag =()=>{
    return (
        <span style={{color:"red"}}>|</span>
    )
}

const Segment = () => {
    return (
        <div className="segment">
            <hr style={{backgroundColor: "red", height:"2px", width:"90%"}}/>
            <div className="segment-text-title">
                <b> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </b>
            </div>
            <div className="segment-text-paragraph">
            CHEMICALS <SpanTag/> PROCESS POWER <SpanTag/> WATER <SpanTag/> WASTE WATER <SpanTag/> OILS <SpanTag/> GAS <SpanTag/> PHARMA <SpanTag/> SUGARS <SpanTag/> DISTILLERIES <SpanTag/> PAPER <SpanTag/> PULP <SpanTag/> MARINE <SpanTag/> DEFENCE <SpanTag/> METAL <SpanTag/> MINING <SpanTag/> FOOD <SpanTag/> BEVERAGE <SpanTag/> PETROCHEMICAL <SpanTag/> REFINERIES <SpanTag/> SOLAR <SpanTag/> BUILDING <SpanTag/> HVAC <SpanTag/> FIRE FIGHTING <SpanTag/> AGRICULTURE <SpanTag/> RESIDENTIAL
            </div>
        </div>
    );
};

export default Segment;
