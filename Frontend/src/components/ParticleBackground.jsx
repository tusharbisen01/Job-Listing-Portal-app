import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { speed: 1 },
          links: { enable: true, opacity: 0.2 },
          opacity: { value: 0.3 }
        }
      }}
      className="particles"
    />
  );
}
