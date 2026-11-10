"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

export default function BackgroundAnimation() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const ParticlesComponent: any = Particles;

  return (
    <ParticlesComponent
      id="tsparticles-bg"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#0f172a",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
  value: 60,
  density: {
    enable: true,
    width: 900,
    height: 900,
  },
},

          color: {
            value: ["#60A5FA", "#38BDF8", "#64748B"],
          },
          shape: {
            type: ["circle", "polygon"],
            options: {
              polygon: {
                sides: 4,
              },
            },
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#60A5FA",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
            resize: {
              enable: true,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
