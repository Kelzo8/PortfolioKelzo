"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  color: string;
  position: [number, number, number];
}

const skills: Skill[] = [
  { name: "React", color: "#61DAFB", position: [2, 1, 0] },
  { name: "TypeScript", color: "#3178C6", position: [-2, 1, 0] },
  { name: "Python", color: "#3776AB", position: [0, 2, 1] },
  { name: "Next.js", color: "#000000", position: [0, -2, 1] },
  { name: "Three.js", color: "#000000", position: [1, 0, 2] },
  { name: "Node.js", color: "#339933", position: [-1, 0, 2] },
  { name: "Tailwind", color: "#06B6D4", position: [1.5, -1, 1] },
  { name: "Framer", color: "#0055FF", position: [-1.5, -1, 1] },
  { name: "Docker", color: "#2496ED", position: [1.5, 1, -1] },
  { name: "PostgreSQL", color: "#336791", position: [-1.5, 1, -1] },
  { name: "AWS", color: "#FF9900", position: [0, 0, -2] },
  { name: "Git", color: "#F05032", position: [0, 0, 2] },
];

function SkillPoint({ skill, index }: { skill: Skill; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const speed = 0.5 + index * 0.1;
      meshRef.current.rotation.y = time * speed;
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group position={skill.position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color={skill.color} 
          emissive={skill.color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
      <Text
        position={[0, 0.2, 0]}
        fontSize={0.15}
        color={skill.color}
        anchorX="center"
        anchorY="middle"
        visible={hovered}
      >
        {skill.name}
      </Text>
    </group>
  );
}

function SkillSphere() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.2;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <SkillPoint key={skill.name} skill={skill} index={index} />
      ))}
    </group>
  );
}

export function SkillSphereComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm text-foreground/60">Loading 3D Skills...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-96 relative"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="rounded-2xl overflow-hidden"
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <SkillSphere />
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxDistance={8}
          minDistance={3}
        />
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="text-center bg-black/20 backdrop-blur-sm rounded-full px-6 py-2">
          <p className="text-sm font-medium text-white">Hover to explore skills</p>
        </div>
      </div>
    </motion.div>
  );
} 