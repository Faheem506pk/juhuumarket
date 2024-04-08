// GLTFViewer.js

import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLTFViewer = ({ url }) => {
  const gltfRef = useRef();

  // Use GLTFLoader to load the model
  const loadGLTFModel = (url, gltfRef) => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      gltfRef.current.add(gltf.scene);
    });
  };

  return (
    <Canvas>
      <group ref={gltfRef}>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 10, 0]} />
      </group>
      <mesh visible position={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial attach="material" color="hotpink" transparent />
      </mesh>
      {url && loadGLTFModel(url, gltfRef)}
    </Canvas>
  );
};

export default GLTFViewer;
