import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function FallbackMesh() {
  return (
    <mesh>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color="#cbd5e1" />
    </mesh>
  );
}

function AutoFramedModel({
  modelPath,
  rotation = [0, 0, 0],
  controlsRef,
}) {
  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const modelGroupRef = useRef();
  const { camera } = useThree();

  useLayoutEffect(() => {
    if (!modelGroupRef.current) return;

    const object = modelGroupRef.current;
    object.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(object);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    object.position.set(-center.x, -center.y, -center.z);
    object.updateWorldMatrix(true, true);

    const centeredBox = new THREE.Box3().setFromObject(object);
    const centeredSize = new THREE.Vector3();
    const centeredCenter = new THREE.Vector3();

    centeredBox.getSize(centeredSize);
    centeredBox.getCenter(centeredCenter);

    const maxDim = Math.max(centeredSize.x, centeredSize.y, centeredSize.z) || 1;
    const fov = (camera.fov * Math.PI) / 180;
    const distance = (maxDim / 2) / Math.tan(fov / 2);

    // centraliza melhor no meio do viewer
    const verticalOffset = centeredSize.y * 0.12;

    camera.position.set(0, verticalOffset, distance * 1.35);
    camera.near = Math.max(0.01, maxDim / 100);
    camera.far = Math.max(1000, maxDim * 20);
    camera.updateProjectionMatrix();

    if (controlsRef?.current) {
      controlsRef.current.target.set(0, verticalOffset, 0);
      controlsRef.current.update();
    }
  }, [clonedScene, camera, controlsRef]);

  return (
    <group ref={modelGroupRef} rotation={rotation}>
      <primitive object={clonedScene} />
    </group>
  );
}

export default function ModelViewer({
  modelPath,
  title,
  rotation = [0, 0, 0],
}) {
  const controlsRef = useRef();

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
            Modelo 3D
          </p>
          <h3 className="mt-1 text-xl font-bold text-slate-900">{title}</h3>
        </div>
        <span className="text-xs text-slate-500">arraste para girar</span>
      </div>

      <div className="h-[380px] w-full">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 35 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1.25} />
          <directionalLight position={[8, 8, 8]} intensity={1.4} />
          <directionalLight position={[-6, 5, 4]} intensity={0.7} />
          <directionalLight position={[0, -3, 2]} intensity={0.35} />

          <Suspense fallback={<FallbackMesh />}>
            <AutoFramedModel
              modelPath={modelPath}
              rotation={rotation}
              controlsRef={controlsRef}
            />
            <Environment preset="studio" />
          </Suspense>

          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.9}
            dampingFactor={0.08}
            enableDamping
          />
        </Canvas>
      </div>
    </div>
  );
}