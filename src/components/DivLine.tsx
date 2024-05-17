// import React, { useState } from 'react'

function DivLine({ pos }: { pos: String }) {

    // const [LineHeight, setLineHeight] = useState(1);
    return (<>
        <div className={` line absolute w-1 bg-white ${pos === 'left' ? "left-[651px]" : "-left-[309px]"}`}></div>
        <div className={` diamond absolute w-10 h-10  z-50 bg-white ${pos === 'left' ? "left-[633px]" : "-left-[327.7px]"}`}></div>

    </>
    )
}

export default DivLine