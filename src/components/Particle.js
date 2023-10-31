import React from 'react'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles"

const Particle = () => {
    const particlesInit = async (main) => {
        console.log(main)
        await loadFull(main)
    };
    const particlesLoaded = (container) =>{
        console.log(container)
    }
  return (
    <Particles
    id='tsparticles'
    init={particlesInit}
    loaded={particlesLoaded}

    options={
        { background: {
            color: {
                value: "#000308",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: false,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 500,
                    duration: 1,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 250,
                enable: true,
                opacity: 0.6,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 500,
                },
                value: 80,
            },
            opacity: {
                value:2,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 6 },
            },
        },
        detectRetina: true,}
    }

    />
  )
}

export default Particle
