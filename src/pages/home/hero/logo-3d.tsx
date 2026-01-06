import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import * as THREE from "three";
import { useLayoutEffect, useMemo, useRef } from "react";
import { isMobile } from "react-device-detect";

// const GradientMaterial = () => {
//   const material = new THREE.MeshPhongMaterial({
//     shininess: 1000,
//     specular: new THREE.Color(1, 1, 1),
//   });

//   material.onBeforeCompile = (shader) => {
//     shader.fragmentShader = shader.fragmentShader.replace(
//       `#include <dithering_fragment>`,
//       `
//       vec3 topColor = vec3(0.75, 0.08, 0.08);
//       vec3 bottomColor = vec3(0.75, 0.08, 0.08);

//       float grad = smoothstep(-1.0, 1.0, vViewPosition.y);
//       vec3 gradient = mix(bottomColor, topColor, grad);

//       vec3 viewDir = normalize(vViewPosition);
//       vec3 n = normalize(normal);

//       float cavity = 1.0 - max(dot(viewDir, n), 0.0);
//       cavity = pow(cavity, 6.2);

//       float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 2.5);
//       vec3 edgeShine = vec3(1.0, 0.6, 0.6) * fresnel * 0.85;

//       float specBoost = pow(max(dot(reflect(-viewDir, n), viewDir), 0.0), 16.0);
//       vec3 specularHighlight = vec3(1.0) * specBoost * 0.35;

//       vec3 finalColor =
//         gradient + edgeShine + specularHighlight;

//       gl_FragColor = vec4(finalColor, 1.0);
//       #include <dithering_fragment>
//     `
//     );
//   };

//   return material;
// };

function Logo3D() {
  const svgData = useLoader(SVGLoader, "/svg-logo.svg");

  const pivotRef = useRef<THREE.Group>(null);
  const logoRef = useRef<THREE.Group>(null);

  const shapes = useMemo(() => {
    return svgData.paths.flatMap((path) => SVGLoader.createShapes(path));
  }, [svgData]);

  // const material = GradientMaterial();

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#f84543",
        metalness: 1,
        roughness: 0.3, // Shiny silver
        envMapIntensity: 1.5,
      }),
    []
  );

  const meshes = shapes.map((shape, i) => {
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 60,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 2,
      curveSegments: 32,
    });

    // 🔥 VERY IMPORTANT — force correct bounds
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

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

  /**
   * Wait until SVG + geometry are READY
   * then move logo to bottom-center
   */
  useLayoutEffect(() => {
    if (!logoRef.current) return;

    // compute correct bounds AFTER svg + geometry load
    const box = new THREE.Box3().setFromObject(logoRef.current);
    const center = box.getCenter(new THREE.Vector3());

    // 🔥 move GEOMETRY, not the group
    logoRef.current.children.forEach((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.geometry) return;

      mesh.geometry.translate(
        -center.x,
        -box.min.y, // bottom pivot
        -center.z
      );
    });

    // reset group position
    logoRef.current.position.set(0, 0, 0);
  }, [svgData]);

  /**
   * Rotate ONLY pivot (true in-place rotation)
   */
  useFrame((_, delta) => {
    if (!pivotRef.current) return;
    pivotRef.current.rotation.y += delta * 0.25;
  });

  return (
    <group
      ref={pivotRef}
      scale={isMobile ? [0.037, -0.037, 0.037] : [0.04, -0.04, 0.04]}
    >
      <group ref={logoRef}>{meshes}</group>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 100], fov: 40 }}
      className="-top-52 lg:-top-[30%] w-full h-dvh absolute!"
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
  );
}
