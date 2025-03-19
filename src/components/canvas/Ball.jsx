import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const ballRef = useRef();

  useFrame((state) => {
    // Calculate the current orientation - the Y rotation is what we care about for front/back
    const currentRotation = ballRef.current.rotation.y % (2 * Math.PI);
    
    // Determine if we're facing front (or close to front)
    // Front is around 0, 2π, 4π, etc. (considering modulo)
    // Back is around π, 3π, 5π, etc.
    const isFacingFront = 
      (currentRotation < Math.PI / 4 || currentRotation > 7 * Math.PI / 4) || 
      (currentRotation > 3 * Math.PI / 4 && currentRotation < 5 * Math.PI / 4);
    
    // Rotate slower when facing front, faster when facing back
    const rotationSpeed = isFacingFront ? 0.005 : 0.02;
    
    ballRef.current.rotation.y += rotationSpeed;
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
