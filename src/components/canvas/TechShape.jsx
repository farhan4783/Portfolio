import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Preload, OrbitControls } from "@react-three/drei";

const TechShapeMesh = (props) => {
    const meshRef = useRef();
    const wireframeRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
        if (wireframeRef.current) {
            wireframeRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            wireframeRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <group {...props} scale={2}>
            {/* Solid Core */}
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="#7000ff"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.9}
                />
            </mesh>

            {/* Wireframe Overlay */}
            <mesh ref={wireframeRef} scale={1.05}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#00f2ff"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </group>
    );
};

const TechShapeCanvas = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ width: "100%", height: "100%", minHeight: "400px" }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#00f2ff" />
            <directionalLight position={[-10, -10, -5]} intensity={1} color="#7000ff" />

            <TechShapeMesh />

            <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={5}
                enablePan={false}
            />
            <Preload all />
        </Canvas>
    );
};

export default TechShapeCanvas;
