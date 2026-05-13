import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function MorphingBlob() {
  const mesh = useRef<Mesh>(null);
  useFrame(({ clock, mouse }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.15 + mouse.y * 0.3;
    mesh.current.rotation.y = t * 0.2 + mouse.x * 0.5;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={mesh} args={[1.6, 6]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#a855f7"
          emissiveIntensity={0.35}
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.6}
        />
      </Icosahedron>
    </Float>
  );
}

function OrbitingSpheres() {
  const group = useRef<any>(null);
  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = clock.getElapsedTime() * 0.25;
  });
  const colors = ["#22d3ee", "#a855f7", "#f472b6", "#34d399"];
  return (
    <group ref={group}>
      {colors.map((c, i) => {
        const angle = (i / colors.length) * Math.PI * 2;
        const r = 3.2;
        return (
          <Float key={i} speed={2} floatIntensity={1.5}>
            <mesh position={[Math.cos(angle) * r, Math.sin(angle * 1.3) * 0.6, Math.sin(angle) * r]}>
              <sphereGeometry args={[0.18, 32, 32]} />
              <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.8} />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-5, -3, 2]} intensity={1} color="#a855f7" />
        <Stars radius={50} depth={40} count={1500} factor={4} saturation={0} fade speed={1} />
        <MorphingBlob />
        <OrbitingSpheres />
      </Suspense>
    </Canvas>
  );
}
