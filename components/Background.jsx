"use client";

import React from "react";
import { Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import * as THREE from "three";

export const Background = ({ start = 0, end = -0.5 }) => {
  return (
    <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
      <LayerMaterial
        color="#ffffff"
        lighting="basic"
        side={THREE.BackSide}
      >
        <Gradient
          colorA="#f52f57"
          colorB="#ffffff"
          axes="y"
          start={start}
          end={end}
        />
      </LayerMaterial>
    </Sphere>
  );
};
