import Project from "./Project"

import React, { Component } from "react"
import Carousel, { consts } from 'react-elastic-carousel';

const ProjectList = ({ folder, color, category, description }) => {
    const lista_proyectos = folder.map(item => <Project key={item.id} name={item.name} description={item.description} repo={item.repo} site={item.site} />)

    const breakPoints = [
        { width: 1, itemsToShow: 1,    pagination: false },
        { width: 500, itemsToShow: 2,  pagination: false },
        { width: 850, itemsToShow: 3,  pagination: false },
        { width: 1150, itemsToShow: 4, pagination: false },
        { width: 1450, itemsToShow: 4, pagination: false },
        { width: 1750, itemsToShow: 4, pagination: false },
    ]

    const myArrow = ({type, onClick, isEdge}) => {
        const left  = <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        const right = <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        const pointer = type === consts.PREV ? left : right;
        return (
            <button onClick={onClick} disabled={isEdge} className="disabled:invisible w-12 items-center ml-2 z-0" style={{paddingTop: "5%", paddingBottom: "5%"}}>
                    {pointer}
            </button>
        )
    }

    return (
        <>
            <div className="max-w-7xl mx-auto flex justify-between sm:flex-row flex-col">
                <div className={`mx-auto sm:my-4 rounded-lg duration-300 transform bg-white sm:border-l-4 sm:border-r-0 border-l-4 border-r-4 sm:hover:translate-x-2 hover:translate-b-2 ${color}`}>
                    <div className="p-5 border border-l-0 rounded-lg shadow-md"
                        style={{ width: "260px", height: "125px" }}>
                        <h6 className="mb-2 font-semibold leading-5">{ category }</h6>
                        <p className="text-sm text-gray-900">{ description }</p>
                    </div>
                </div>
                <Carousel renderArrow={myArrow} breakPoints={breakPoints} >
                    { lista_proyectos }
                </Carousel>
            </div>
        </>
    )
}

export default ProjectList