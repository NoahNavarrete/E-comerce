import React from "react";
import { data } from "./data";

const Slider = () => {

    return(
        <div className={` h-[780px] w-full m-auto py-16 px-4`}>
            <div style={{background: `url(${data[0].url})`}} className={`w-ful h-[500px] rounded-2xl bg-center bg-cover duration-500`}></div>
        </div>
    )
}
export default Slider