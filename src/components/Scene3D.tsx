import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedTorus = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh position={position} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[0.8, 0.3, 16, 100]} />
        <MeshDistortMaterial
          color="#06B6D4"
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#06B6D4" intensity={0.5} />
        
        <AnimatedSphere />
        <AnimatedTorus position={[-3, 2, -2]} />
        <AnimatedTorus position={[3, -2, -1]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;