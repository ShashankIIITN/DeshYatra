import DivLine from './DivLine'

interface Props {
    title: String,
    Description: String,
    img: string,
    pos: String
}

function StCards({ title, Description, img, pos }: Props) {
    return (
        <div className="container_cards mb-5 h-[400px]">

            <div className={`card bg-center bg-cover w-[350px]  flex flex-col items-center justify-end relative ${pos === 'left' ? "md:left-[-15rem]" : "md:left-[15rem]"} ${pos === 'left' ? "lg:left-[-30rem]" : "lg:left-[30rem]"} group border-2 rounded-lg border-slate-300 border-separate border-spacing-20`} >
                <img src={img} alt="card image" className='absolute h-full w-full object-cover z-10'/>
                <h2 className=' z-50 text-3xl bg-black/65 w-full flex justify-center text-white font-sans capitalize py-2'>{title}</h2>
                <p className='h-0 bg-black/65 w-full z-50  text-cyan-100 group-hover:h-full group-hover:pl-2 transition-all duration-300 ease-linear opacity-0 group-hover:opacity-100'>{Description}</p>
                <DivLine pos={pos} />
            </div>
        </div>
    )
}

export default StCards