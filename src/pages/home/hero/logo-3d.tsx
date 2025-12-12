import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as THREE from "three";
import { useLayoutEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

const GradientMaterial = () => {
  const material = new THREE.MeshPhongMaterial({
    shininess: 1000,
    specular: new THREE.Color(1, 1, 1),
  });

  material.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      `#include <dithering_fragment>`,
      `
      // --- Base gradient ---
      vec3 topColor = vec3(0.75, 0.08, 0.08);
      vec3 bottomColor = vec3(0.75, 0.08, 0.08);

      float grad = smoothstep(-1.0, 1.0, vViewPosition.y);
      vec3 gradient = mix(bottomColor, topColor, grad);

      // --- View direction ---
      vec3 viewDir = normalize(vViewPosition);
      vec3 n = normalize(normal);

      // --- Strong inner shadow (engraved depth) ---
      float cavity = 1.0 - max(dot(viewDir, n), 0.0);
      cavity = pow(cavity, 6.2);              // 🔥 deeper inner shadow
      vec3 innerShadow = vec3(0.0) * cavity * 1.2;

      // --- Fresnel shine (edge glow) ---
      float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 2.5);
      vec3 edgeShine = vec3(1.0, 0.6, 0.6) * fresnel * 0.85;

      // --- Specular punch (fake highlight boost) ---
      float specBoost = pow(max(dot(reflect(-viewDir, n), viewDir), 0.0), 16.0);
      vec3 specularHighlight = vec3(1.0) * specBoost * 0.35;

      vec3 finalColor =
        gradient
        - innerShadow
        + edgeShine
        + specularHighlight;

      gl_FragColor = vec4(finalColor, 1.0);

      #include <dithering_fragment>
    `
    );
  };

  return material;
};

function Logo3D() {
  const svgData = useLoader(SVGLoader, "/svg-logo.svg");
  const ref = useRef<THREE.Group>(null);

  const shapes: THREE.Shape[] = [];

  svgData.paths.forEach((path) => {
    const pathShapes = SVGLoader.createShapes(path);
    shapes.push(...pathShapes);
  });

  const gradientMaterial = GradientMaterial();

  const meshes = shapes.map((shape, i) => {
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 60,
      bevelEnabled: true, // logos should NOT bevel
      curveSegments: 32, // smooth curves
    });

    return (
      <mesh
        key={i}
        geometry={geometry}
        material={gradientMaterial}
        castShadow
        receiveShadow
      />
    );
  });

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.getElapsedTime();

    ref.current.rotation.y = Math.sin(t * 0.6) * 0.12;
    ref.current.rotation.x = Math.sin(t * 0.4) * 0.06;
  });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const box = new THREE.Box3().setFromObject(ref.current);
    const center = box.getCenter(new THREE.Vector3());

    ref.current.position.sub(center);
  }, []);

  return (
    <group
      ref={ref}
      scale={isMobile ? [0.03, -0.03, 0.03] : [0.05, -0.05, 0.05]}
    >
      {meshes}
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 100], fov: 40 }}
      className="-top-56 lg:-top-[30%] w-full h-dvh absolute!"
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 20, 20]} intensity={4} />
      <Logo3D />
      <OrbitControls enableZoom={false} rotateSpeed={0.8} />
    </Canvas>
  );
}
