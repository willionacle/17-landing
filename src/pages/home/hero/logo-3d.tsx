import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as THREE from "three";
import { useLayoutEffect, useMemo, useRef } from "react";
import { isMobile } from "react-device-detect";

function Logo3D() {
  const svgData = useLoader(SVGLoader, "/svg-logo.svg");
  const pivotRef = useRef<THREE.Group>(null);
  const logoRef = useRef<THREE.Group>(null);

  const shapes = useMemo(() => {
    return svgData.paths.flatMap((path) => SVGLoader.createShapes(path));
  }, [svgData]);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#f84543",
        metalness: 1,
        roughness: 0.3,
        envMapIntensity: 1.5,
      }),
    []
  );

  const meshes = useMemo(() => {
    return shapes.map((shape, i) => {
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 60,
        bevelEnabled: true,
        bevelThickness: 3,
        bevelSize: 2,
        curveSegments: 32,
      });
      geometry.computeBoundingBox();
      return (
        <mesh
          key={i}
          geometry={geometry}
          material={material}
          castShadow
          receiveShadow
        />
      );
    });
  }, [shapes, material]);

  useLayoutEffect(() => {
    if (!logoRef.current) return;

    // YOUR ORIGINAL LOGIC
    const box = new THREE.Box3().setFromObject(logoRef.current);
    const center = box.getCenter(new THREE.Vector3());

    logoRef.current.children.forEach((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.geometry) return;
      mesh.geometry.translate(-center.x, -box.min.y, -center.z);
    });

    logoRef.current.position.set(0, 0, 0);

    // Explicitly update world matrices to "lock" the new position
    logoRef.current.updateWorldMatrix(true, true);
  }, [svgData]); // Only re-runs if the file changes, ignored by scroll/hash clicks

  useFrame((_state, delta) => {
    if (!pivotRef.current) return;
    pivotRef.current.rotation.y += delta * 0.25;
  });

  return (
    <group
      ref={pivotRef}
      scale={isMobile ? [0.037, -0.037, 0.037] : [0.06, -0.06, 0.06]}
    >
      <group ref={logoRef}>{meshes}</group>
    </group>
  );
}

export default function Scene() {
  return (
    /* FIX: Wrapping in a fixed container is the only way to keep the 
      pivot from glitching when the browser jumps to a hash link.
    */
    <div className="absolute inset-0 z-0 -top-52 lg:-top-[27%] pointer-events-none overflow-hidden h-dvh w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 100], fov: 40 }}
        className="h-full w-full"
      >
        <Environment preset="city" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 20, 20]} intensity={4} />

        <Logo3D />

        <ContactShadows
          position={[0, -15, 0]}
          opacity={0.1}
          scale={100}
          blur={2}
          far={20}
        />
        <OrbitControls enableZoom={false} rotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
