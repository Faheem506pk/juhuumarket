import React from 'react';
import "../assets/css/style.css";

function ModelViewer({ src, className }) {
  return (
    <>
       <div className={`model-viewer-container ${className}`}>
      <model-viewer
        className="model-viewer"
        src={src}
        alt="Product 3D Model"
        style={{ width: "100%", height: "auto" }}
        shadow-intensity="2"
        camera-controls
        auto-rotate
        ar
        camera-orbit="0deg 0deg"
      ></model-viewer>
    </div>
      <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
      ></script>
    </>
  );
}

export default ModelViewer;
