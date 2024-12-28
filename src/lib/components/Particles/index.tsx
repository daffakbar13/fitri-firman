import { type ISourceOptions } from '@tsparticles/engine'
import TsParticles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import React from 'react'

const Particles: React.FC = () => {
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setIsReady(true)
    })
  }, [])

  const options: ISourceOptions = React.useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        // links: {
        //   color: '#ffffff',
        //   distance: 200,
        //   enable: true,
        //   opacity: 0.3,
        //   width: 1,
        // },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 5, max: 10 },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  if (isReady) {
    return <TsParticles id="tsparticles" options={options} />
  }

  return <></>
}

export default Particles
