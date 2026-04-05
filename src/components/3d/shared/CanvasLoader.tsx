'use client'

import { Html, useProgress } from '@react-three/drei'

export default function CanvasLoader() {
    const { progress } = useProgress()
    return (
        <Html as="div" center>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div
                    style={{
                        width: 40,
                        height: 40,
                        border: '3px solid rgba(255,255,255,0.2)',
                        borderTopColor: '#915EFF',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                    }}
                />
                <p style={{ color: '#fff', fontSize: 13, margin: 0 }}>
                    {progress.toFixed(0)}%
                </p>
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </Html>
    )
}
