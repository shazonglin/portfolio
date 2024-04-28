import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
            {/* <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">About Me</h1> */}
            <h2 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">About Me</h2>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
            Meticulous frontend developer with passion about building and maintaining modern web applications. 
            <br/>
            Proficient in Vue.js and has been using the library in the industry for developing portals and CRM web applications in the past years. 
            Continues to be passionate about Vue.js, also learning React.js and its ecosystems including Redux for state management and UI libraries (Material UI, Ant Design).
            <br/>Currently focusing on optimizing apps with Vue.js or React.js, and developing better state management solutions
            </p>
        </div>
    )
}

export default Intro 