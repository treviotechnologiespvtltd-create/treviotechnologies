"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 140;
const CONNECT_DISTANCE = 2.6;

function Network() {
  const pointsRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport, pointer } = useThree();

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(NODE_COUNT * 3);
    const velocities = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      velocities[i * 3] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
    }
    return { positions, velocities };
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const maxSegments = NODE_COUNT * 8;
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(maxSegments * 6), 3)
    );
    return geo;
  }, []);

  useFrame((state) => {
    const posAttr = pointsRef.current?.geometry.attributes
      .position as THREE.BufferAttribute;
    if (!posAttr) return;

    for (let i = 0; i < NODE_COUNT; i++) {
      posAttr.array[i * 3] += velocities[i * 3];
      posAttr.array[i * 3 + 1] += velocities[i * 3 + 1];
      posAttr.array[i * 3 + 2] += velocities[i * 3 + 2];

      for (let a = 0; a < 3; a++) {
        const bound = a === 2 ? 3 : a === 1 ? 4 : 7;
        if (Math.abs(posAttr.array[i * 3 + a]) > bound) {
          velocities[i * 3 + a] *= -1;
        }
      }
    }
    posAttr.needsUpdate = true;

    // Rebuild connecting lines within distance threshold
    const linePos = lineGeometry.attributes.position
      .array as Float32Array;
    let segIndex = 0;
    for (let i = 0; i < NODE_COUNT && segIndex < linePos.length - 6; i++) {
      let connections = 0;
      for (
        let j = i + 1;
        j < NODE_COUNT && connections < 4 && segIndex < linePos.length - 6;
        j++
      ) {
        const dx = posAttr.array[i * 3] - posAttr.array[j * 3];
        const dy = posAttr.array[i * 3 + 1] - posAttr.array[j * 3 + 1];
        const dz = posAttr.array[i * 3 + 2] - posAttr.array[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECT_DISTANCE) {
          linePos[segIndex++] = posAttr.array[i * 3];
          linePos[segIndex++] = posAttr.array[i * 3 + 1];
          linePos[segIndex++] = posAttr.array[i * 3 + 2];
          linePos[segIndex++] = posAttr.array[j * 3];
          linePos[segIndex++] = posAttr.array[j * 3 + 1];
          linePos[segIndex++] = posAttr.array[j * 3 + 2];
          connections++;
        }
      }
    }
    for (let k = segIndex; k < linePos.length; k++) linePos[k] = 0;
    lineGeometry.attributes.position.needsUpdate = true;

    if (groupRef.current) {
      const targetY = (pointer.x * viewport.width) / 90;
      const targetX = (-pointer.y * viewport.height) / 90;
      groupRef.current.rotation.y +=
        (targetY - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x +=
        (targetX - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#4fe0ff"
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#3b5bff" transparent opacity={0.18} />
      </lineSegments>
    </group>
  );
}

export default function ParticleNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <Network />
      <fog attach="fog" args={["#05070d", 6, 14]} />
    </Canvas>
  );
}
