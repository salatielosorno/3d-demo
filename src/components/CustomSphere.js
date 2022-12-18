import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useTexture } from "@react-three/drei";

function CustomSphere() {
    const texture = useTexture('moon.jpeg')
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += 0.005));

    return (
        <Sphere material={texture} ref={mesh} args={[2, 32]}>
            <meshBasicMaterial map={texture} />
        </Sphere>
    )
}

export default CustomSphere