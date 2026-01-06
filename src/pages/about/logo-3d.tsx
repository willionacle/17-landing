import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as THREE from "three";
import { useLayoutEffect, useRef, useMemo } from "react";
// import { isMobile } from "react-device-detect"; // Uncomment if using

function Logo3D() {
  const svgData = useLoader(SVGLoader, "/svg-logo.svg");
  const pivotRef = useRef<THREE.Group>(null);
  const logoRef = useRef<THREE.Group>(null);

  // 1. Create a high-quality Metallic Material
  // We use MeshStandardMaterial for PBR realism (reflections)
  const silverMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        metalness: 1,
        roughness: 0.1, // Shiny silver
        envMapIntensity: 1.5,
      }),
    []
  );

  const shapes = useMemo(() => {
    return svgData.paths.flatMap((path) => SVGLoader.createShapes(path));
  }, [svgData]);

  // 2. Build Meshes
  const meshes = shapes.map((shape, i) => {
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 40,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 2,
      curveSegments: 32,
    });

    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    return (
      <mesh
        key={i}
        geometry={geometry}
        material={silverMaterial}
        castShadow
        receiveShadow
      />
    );
  });

  // 3. YOUR CENTERING LOGIC (Fixed for perfect rotation)
  useLayoutEffect(() => {
    if (!logoRef.current) return;

    const box = new THREE.Box3().setFromObject(logoRef.current);
    const center = box.getCenter(new THREE.Vector3());

    logoRef.current.children.forEach((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.geometry) return;

      // This moves the individual vertices so the local (0,0,0) is the center
      mesh.geometry.translate(
        -center.x,
        -center.y, // Changed from box.min.y to center.y for perfect middle rotation
        -center.z
      );
    });

    logoRef.current.position.set(0, 0, 0);
  }, [svgData]);

  // 4. In-place Auto-rotation
  useFrame((_, delta) => {
    if (!pivotRef.current) return;
    pivotRef.current.rotation.y += delta * 0.5;
  });

  const scale: [number, number, number] = [0.04, -0.04, 0.04];

  return (
    <group ref={pivotRef} scale={scale}>
      <group ref={logoRef}>{meshes}</group>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 80], fov: 13 }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      {/* <color attach="background" args={["#f0f0f0"]} /> */}

      {/* 5. The "Silver" Secret: Environment mapping */}
      <Environment preset="city" />

      {/* Studio Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 20]} intensity={2} castShadow />

      <Logo3D />

      {/* 6. Realistic Shadow Line (Softened) */}
      <ContactShadows
        position={[0, -15, 0]}
        opacity={0.4}
        scale={100}
        blur={2}
        far={20}
      />

      <OrbitControls enableZoom={false} rotateSpeed={0.8} />
    </Canvas>
  );
}
