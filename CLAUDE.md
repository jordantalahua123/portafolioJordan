# CLAUDE.md — Portfolio Jordan

Documentación técnica para referencia de desarrollo.  
Proyecto: Next.js portfolio personal. Referencia 3D extraída de `src_example` (proyecto React base).

---

## Librerías 3D utilizadas

| Librería | Rol |
|---|---|
| `@react-three/fiber` | Motor principal — renderiza Three.js dentro de React via `<Canvas>` |
| `@react-three/drei` | Utilidades preconstruidas (controles, loaders, efectos, helpers) |
| `three` | Motor gráfico subyacente (implícito via R3F) |
| `maath` (`maath/random`) | Matemáticas: distribución aleatoria en esfera para partículas |
| `framer-motion` | Animaciones DOM/CSS (no 3D) |

---

## Arquitectura 3D

Todos los componentes 3D viven en `/components/canvas/` y son escenas **aisladas** — cada una tiene su propio `<Canvas>`.

### Patrón base de cada Canvas

```jsx
<Canvas
  frameloop="demand"          // Solo renderiza cuando cambia algo (performance)
  shadows                     // Habilitar si el modelo necesita sombras
  dpr={[1, 2]}               // Device pixel ratio: máximo 2x
  gl={{ preserveDrawingBuffer: true }}
  camera={{ position: [...], fov: 25 }}
>
  <Suspense fallback={<CanvasLoader />}>
    <OrbitControls enableZoom={false} />
    {/* contenido 3D */}
    <Preload all />
  </Suspense>
</Canvas>
```

---

## Escenas 3D — Detalle por sección

### 1. Skills — `Ball.jsx` / `BallCanvas`

Esferas icosaédricas con el logo de cada tecnología proyectado como decal.

**Canvas config:**
```jsx
<Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
```

**Geometría:** `<icosahedronGeometry args={[1, 1]} />` (radio 1, subdivisión 1)

**Material:** `meshStandardMaterial` con `flatShading`, color `#fff8eb`, `polygonOffset` para evitar Z-fighting con el decal.

**Decal (logo de la tecnología):**
```jsx
const [decal] = useTexture([props.imgUrl]);  // hook de Drei
<Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} />
```

**Animación de flotación:**
```jsx
<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
  {/* esfera + decal */}
</Float>
```

**Iluminación:**
```jsx
<ambientLight intensity={0.25} />
<directionalLight position={[0, 0, 0.05]} />
```

**Controles:** `<OrbitControls enableZoom={false} />` — el usuario puede rotar pero no hacer zoom.

**Uso en la sección Tech:**
```jsx
// Por cada tecnología del array:
<div className="w-28 h-28">
  <BallCanvas icon={technology.icon} />
</div>
```

---

### 2. Hero — `Computers.jsx` / `ComputersCanvas`

Modelo GLTF de un PC de escritorio.

**Canvas config:**
```jsx
<Canvas
  frameloop="demand"
  shadows
  dpr={[1, 2]}
  camera={{ position: [20, 3, 5], fov: 25 }}  // lateral, FOV estrecho
  gl={{ preserveDrawingBuffer: true }}
>
```

**Carga del modelo:**
```jsx
const computer = useGLTF("./desktop_pc/scene.gltf");  // hook de Drei
<primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
```

**Iluminación completa:**
```jsx
<hemisphereLight intensity={0.15} groundColor="black" />
<spotLight
  position={[-20, 50, 10]}
  angle={0.12}
  penumbra={1}
  intensity={1}
  castShadow
  shadow-mapSize={1024}
/>
<pointLight intensity={1} />
```

**Controles (cámara bloqueada en el eje horizontal):**
```jsx
<OrbitControls
  enableZoom={false}
  maxPolarAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 2}
/>
```

**Responsive:**
```jsx
const [isMobile, setIsMobile] = useState(false);
// mediaQuery "(max-width: 500px)"
// Mobile: scale=0.7, position=[0, -3, -2.2]
// Desktop: scale=0.75, position=[0, -3.25, -1.5]
```

---

### 3. Contact — `Earth.jsx` / `EarthCanvas`

Modelo GLTF de un planeta con auto-rotación.

**Canvas config:**
```jsx
<Canvas
  shadows
  frameloop="demand"
  dpr={[1, 2]}
  gl={{ preserveDrawingBuffer: true }}
  camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
>
```

**Modelo:**
```jsx
const earth = useGLTF("./planet/scene.gltf");
<primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
```

**Auto-rotación via OrbitControls:**
```jsx
<OrbitControls
  autoRotate                    // gira automáticamente
  enableZoom={false}
  maxPolarAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 2}
/>
```

---

### 4. Background Stars — `Stars.jsx` / `StarsCanvas`

Sistema de partículas que simula estrellas en todo el fondo.

**Canvas config:**
```jsx
<Canvas camera={{ position: [0, 0, 1] }}>
```

**CSS: posicionado detrás de todo el contenido:**
```jsx
<div className="w-full h-auto absolute inset-0 z-[-1]">
```

**Generación de 5000 partículas en esfera:**
```jsx
import { random } from "maath";
const [sphere] = useState(() =>
  random.inSphere(new Float32Array(5000), { radius: 1.2 })
);
```

**Renderizado eficiente con Points:**
```jsx
<Points positions={sphere} stride={3} frustumCulled>
  <PointMaterial
    transparent
    color="#f272c8"
    size={0.002}
    sizeAttenuation={true}
    depthWrite={false}
  />
</Points>
```

**Animación continua via `useFrame`:**
```jsx
useFrame((state, delta) => {
  ref.current.rotation.x -= delta / 10;  // ~0.1 rad/seg
  ref.current.rotation.y -= delta / 15;  // ~0.067 rad/seg
});
```

**Rotación inicial del grupo:** `rotation={[0, 0, Math.PI / 4]}` (45°)

---

## Hooks de Drei más usados

| Hook | Uso |
|---|---|
| `useGLTF(path)` | Carga modelos `.gltf`/`.glb`, cachea automáticamente. Devuelve `{ scene }` |
| `useTexture([url])` | Carga imágenes como texturas Three.js |
| `useProgress()` | Progreso de carga de assets (0–100) para el loader |
| `useFrame((state, delta) => {})` | Callback que corre cada frame — para animaciones |

## Componentes de Drei más usados

| Componente | Uso |
|---|---|
| `<Float>` | Animación de flotación automática (bob + rotación suave) |
| `<Decal>` | Proyecta una textura sobre una malla (logos en las esferas) |
| `<OrbitControls>` | Controles de cámara con mouse/touch |
| `<Preload all />` | Pre-carga todos los assets antes de renderizar |
| `<Html>` | Renderiza HTML/DOM dentro de una escena 3D |
| `<Points>` + `<PointMaterial>` | Sistema de partículas eficiente |

---

## Carga de modelos GLTF

Los modelos `.gltf` se ponen en la carpeta `public/` para que sean accesibles como rutas estáticas.

```
public/
  desktop_pc/scene.gltf   → Hero
  planet/scene.gltf        → Contact
```

```jsx
// Carga y uso básico
const model = useGLTF("./desktop_pc/scene.gltf");
<primitive object={model.scene} scale={0.75} position={[0, -3, -1.5]} />
```

---

## Loader de Canvas

```jsx
// Loader.jsx
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center>
      <span className="canvas-loader" />
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
};

// Uso en cada Canvas:
<Suspense fallback={<CanvasLoader />}>
  {/* contenido 3D */}
</Suspense>
```

---

## Optimizaciones de performance aplicadas

1. `frameloop="demand"` en todos los Canvas — no renderiza si no hay cambios.
2. `dpr={[1, 2]}` — cap en 2x para no sobrecargar pantallas retina.
3. `<Preload all />` — carga assets antes del primer frame.
4. `PointMaterial` para partículas — más eficiente que `MeshMaterial`.
5. `Float32Array` para partículas — memoria optimizada vs arrays normales.
6. Sombras (`shadows`) solo donde se necesitan (Computers, Earth).
7. `useGLTF` cachea modelos automáticamente — no los recarga.

---

## Lo que NO usa este proyecto 3D

- Sin GSAP para animaciones 3D (solo Framer Motion para DOM)
- Sin shaders personalizados (GLSL)
- Sin post-processing (bloom, blur, etc.)
- Sin físicas (Cannon.js, Rapier, etc.)
- Sin environment maps / reflecciones
- Sin animaciones de esqueleto en modelos
- Sin React Suspense en múltiples niveles

---

## Estructura de carpetas 3D (referencia src_example)

```
src/
  components/
    canvas/
      index.js          ← barrel export
      Ball.jsx           ← Skills: esferas con logos
      Computers.jsx      ← Hero: modelo PC escritorio
      Earth.jsx          ← Contact: planeta giratorio
      Stars.jsx          ← Background: partículas estrella
    Loader.jsx           ← Spinner de carga para Canvas
    Tech.jsx             ← Grid de BallCanvas (una por tecnología)
    Hero.jsx             ← Usa ComputersCanvas
    Contact.jsx          ← Usa EarthCanvas

public/
  desktop_pc/
    scene.gltf
  planet/
    scene.gltf
```

---

## Configuraciones de cámara por escena

| Escena | Position | FOV | Notas |
|---|---|---|---|
| Ball (skills) | default | default | Vista isométrica neutra |
| Computers (hero) | `[20, 3, 5]` | 25 | Lateral, muy estrecho (zoom) |
| Earth (contact) | `[-4, 3, 6]` | 45 | Vista orbital amplia |
| Stars (bg) | `[0, 0, 1]` | default | Cámara dentro de la esfera de partículas |
