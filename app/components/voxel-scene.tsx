"use client";

import { useEffect, useRef } from "react";
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  AmbientLight,
  DirectionalLight,
  BoxGeometry,
  MeshLambertMaterial,
  InstancedMesh,
  Object3D,
  Color,
  Group,
} from "three";

function box(
  x0: number, y0: number, z0: number,
  sx: number, sy: number, sz: number,
): number[][] {
  const r: number[][] = [];
  for (let x = 0; x < sx; x++)
    for (let y = 0; y < sy; y++)
      for (let z = 0; z < sz; z++)
        r.push([x0 + x, y0 + y, z0 + z]);
  return r;
}

// Filled cylinder along Y axis, centered at (cx, cz) with radius r, from y0 to y1 inclusive
function cyl(
  cx: number, cz: number, r: number, y0: number, y1: number,
): number[][] {
  const result: number[][] = [];
  const r2 = (r + 0.3) * (r + 0.3);
  for (let y = y0; y <= y1; y++)
    for (let x = Math.ceil(cx - r); x <= Math.floor(cx + r); x++)
      for (let z = Math.ceil(cz - r); z <= Math.floor(cz + r); z++)
        if ((x - cx) * (x - cx) + (z - cz) * (z - cz) <= r2)
          result.push([x, y, z]);
  return result;
}

function dedup(v: number[][]): number[][] {
  const s = new Set<string>();
  return v.filter(([x, y, z]) => {
    const k = `${x},${y},${z}`;
    if (s.has(k)) return false;
    s.add(k);
    return true;
  });
}

function center(v: number[][]): number[][] {
  if (!v.length) return v;
  let mnX = Infinity, mxX = -Infinity;
  let mnY = Infinity, mxY = -Infinity;
  let mnZ = Infinity, mxZ = -Infinity;
  for (const [x, y, z] of v) {
    if (x < mnX) mnX = x; if (x > mxX) mxX = x;
    if (y < mnY) mnY = y; if (y > mxY) mxY = y;
    if (z < mnZ) mnZ = z; if (z > mxZ) mxZ = z;
  }
  const cx = Math.round((mnX + mxX) / 2);
  const cy = Math.round((mnY + mxY) / 2);
  const cz = Math.round((mnZ + mxZ) / 2);
  return v.map(([x, y, z]) => [x - cx, y - cy, z - cz]);
}

const model = (v: number[][]) => center(dedup(v));

// ============================================================
// MACBOOK - open laptop, 18 wide, ~17 tall
// ============================================================
const MACBOOK = model([
  // Base slab (18w x 2h x 10d)
  ...box(-9, 0, -5, 18, 2, 10),
  // Keyboard function row
  ...box(-7, 2, -4, 14, 1, 1),
  // Keyboard number row
  ...box(-7, 2, -2, 14, 1, 1),
  // Keyboard QWERTY
  ...box(-7, 2, 0, 13, 1, 1),
  // Keyboard home row
  ...box(-6, 2, 2, 12, 1, 1),
  // Keyboard space bar
  ...box(-3, 2, 3, 6, 1, 1),
  // Trackpad
  ...box(-2, 2, -5, 4, 1, 2),
  // Hinge (back edge)
  ...box(-9, 2, 4, 18, 2, 1),
  // Screen back panel
  ...box(-9, 4, 5, 18, 13, 1),
  // Screen display (inset)
  ...box(-8, 5, 4, 16, 11, 1),
  // Webcam
  ...box(-1, 16, 4, 2, 1, 1),
  // Screen bezel bottom accent
  ...box(-9, 4, 4, 18, 1, 1),
  // Base front lip
  ...box(-9, 1, -5, 18, 1, 1),
]);

// ============================================================
// CHAINSAW — Bosch cordless chainsaw. The extremely LONG bar
// is the defining silhouette. Compact motor body at rear.
// Distinctive top wrap handle + chain brake guard + rear grip.
// ============================================================
const CHAINSAW = model([
  // === GUIDE BAR (the defining shape — very long, thin, flat) ===
  ...box(0, 1, -1, 24, 2, 2),

  // === CHAIN (wraps around bar edges — the teeth outline) ===
  ...box(0, 3, -1, 24, 1, 2),     // top chain line
  ...box(0, 0, -1, 24, 1, 2),     // bottom chain line

  // === SPROCKET NOSE (rounded tip of bar) ===
  ...box(23, 0, -1, 1, 4, 2),     // tip block
  ...box(24, 1, 0, 1, 2, 1),      // rounded extension

  // === MOTOR BODY (compact, sits behind bar) ===
  ...box(-8, -1, -3, 8, 7, 6),
  // Body top chamfer (rounds the motor housing)
  ...box(-7, 6, -2, 6, 1, 4),
  // Exhaust / vent slots on side
  ...box(-7, 3, -4, 4, 2, 1),
  ...box(-7, 3, 3, 4, 2, 1),

  // === CHAIN BRAKE / FRONT HAND GUARD ===
  // (the distinctive flat plate in front of the top handle)
  ...box(-1, 4, -3, 2, 5, 6),

  // === TOP WRAP HANDLE (the arch — second most recognizable) ===
  ...box(-8, 6, -1, 1, 3, 2),     // rear post
  ...box(-8, 9, -1, 8, 1, 2),     // top bar
  ...box(-1, 9, -1, 2, 1, 2),     // front post (meets brake)
  // Handle grip texture
  ...box(-6, 9, -2, 4, 1, 1),
  ...box(-6, 9, 1, 4, 1, 1),

  // === REAR PISTOL GRIP ===
  ...box(-10, 0, -2, 2, 1, 4),    // bridge from body
  ...box(-10, -5, -2, 3, 5, 4),   // grip block
  ...box(-10, -6, -1, 3, 1, 2),   // grip bottom swell

  // === TRIGGER ===
  ...box(-9, 0, -1, 2, 1, 2),

  // === BATTERY PACK (underneath body) ===
  ...box(-7, -2, -3, 5, 1, 6),
  ...box(-7, -3, -2, 5, 1, 4),

  // === BAR BOLTS / COVER PLATE (side detail on body near bar) ===
  ...box(-2, 1, -3, 2, 2, 1),
  ...box(-2, 1, 2, 2, 2, 1),
]);

// ============================================================
// DRILL — Akkuschrauber. The classic cordless drill shape:
// long drill bit, tapered keyless chuck, torque ring, cylindrical
// motor, pistol grip, trigger, battery pack.
// ============================================================
const DRILL = model([
  // === DRILL BIT (long thin shaft — instant recognition) ===
  ...box(0, 13, 0, 1, 4, 1),

  // === CHUCK (keyless, tapered — widens toward body) ===
  ...cyl(0, 0, 1, 11, 12),        // narrow tip
  ...cyl(0, 0, 2, 9, 10),         // wider base

  // === TORQUE ADJUSTMENT RING (the wider collar) ===
  ...cyl(0, 0, 3.5, 8, 8),

  // === MOTOR HOUSING (cylindrical body) ===
  ...cyl(0, 0, 3, 3, 7),

  // === GRIP (pistol handle, drops straight down) ===
  ...cyl(0, 0, 2, -4, 2),

  // === TRIGGER (forward-facing) ===
  ...box(-1, -1, -4, 3, 2, 2),

  // === BATTERY PACK (rectangular block at bottom) ===
  ...box(-3, -8, -3, 7, 4, 7),
]);

// ============================================================
// DUSPOL - Benning two-pole voltage tester. TWO separate
// pen-shaped probes connected by a U-shaped cable
// ============================================================
const DUSPOL = model([
  // === MAIN PROBE (left, larger - has display) ===
  // Body
  ...box(-8, -5, -1, 4, 14, 3),
  // LCD display window (front face)
  ...box(-7, 3, -2, 2, 4, 1),
  // LED indicators (row above display)
  ...box(-8, 7, -2, 1, 1, 1),
  ...box(-7, 7, -2, 1, 1, 1),
  ...box(-6, 7, -2, 1, 1, 1),
  // Test button
  ...box(-7, 1, -2, 2, 1, 1),
  // Selector switch area
  ...box(-7, -1, -2, 2, 1, 1),
  // Hand guard (flared lip near probe end)
  ...box(-9, 8, -2, 6, 1, 5),
  // Probe base (tapers from body to probe)
  ...box(-7, 9, 0, 2, 1, 2),
  // Probe shaft
  ...box(-7, 10, 0, 1, 3, 1),
  // Probe fine tip (metal)
  ...box(-7, 13, 0, 1, 2, 1),
  // Grip ridges (textured sides)
  ...box(-9, -2, 0, 1, 6, 2),
  ...box(-5, -2, 0, 1, 6, 2),
  // Logo area
  ...box(-7, -3, -2, 2, 1, 1),

  // === SECOND PROBE (right, thinner/simpler) ===
  // Body
  ...box(4, -3, -1, 3, 10, 3),
  // Hand guard
  ...box(3, 6, -2, 5, 1, 5),
  // Probe base
  ...box(5, 7, 0, 1, 1, 2),
  // Probe shaft
  ...box(5, 8, 0, 1, 3, 1),
  // Probe tip (metal)
  ...box(5, 11, 0, 1, 2, 1),
  // Grip ridges
  ...box(3, 0, 0, 1, 4, 2),
  ...box(7, 0, 0, 1, 4, 2),

  // === CABLE (U-shape connecting the two probes) ===
  // Exits bottom of main probe
  ...box(-7, -6, 0, 1, 1, 1),
  ...box(-6, -7, 0, 1, 1, 1),
  ...box(-5, -8, 0, 1, 1, 1),
  // Horizontal run along bottom
  ...box(-4, -9, 0, 1, 1, 1),
  ...box(-3, -9, 0, 1, 1, 1),
  ...box(-2, -10, 0, 1, 1, 1),
  ...box(-1, -10, 0, 1, 1, 1),
  ...box(0, -10, 0, 1, 1, 1),
  ...box(1, -10, 0, 1, 1, 1),
  ...box(2, -9, 0, 1, 1, 1),
  ...box(3, -9, 0, 1, 1, 1),
  // Rises to second probe
  ...box(4, -8, 0, 1, 1, 1),
  ...box(5, -7, 0, 1, 1, 1),
  ...box(5, -6, 0, 1, 1, 1),
  ...box(5, -5, 0, 1, 1, 1),
  ...box(5, -4, 0, 1, 1, 1),
]);

const OBJECTS = [MACBOOK, CHAINSAW, DRILL, DUSPOL];

const RENDER_W = 480;
const MORPH_DURATION = 1500;
const DISPLAY_INTERVAL = 6000;
const AUTO_SPEED = 0.004;
const IDLE_MS = 2000;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function VoxelScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const renderer = new WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(1);
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.className = "voxel-canvas";
    el.appendChild(canvas);

    // Resize handler — keeps pixel-art chunky but matches viewport aspect ratio
    const camera = new PerspectiveCamera(50, 1, 0.1, 200);
    function handleResize() {
      const w = el!.clientWidth || 1;
      const h = el!.clientHeight || 1;
      const aspect = w / h;
      const renderW = RENDER_W;
      const renderH = Math.round(RENDER_W / aspect);
      renderer.setSize(renderW, renderH);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }
    const resizeObs = new ResizeObserver(handleResize);
    resizeObs.observe(el);
    handleResize();

    const scene = new Scene();
    // Camera offset left so the object renders right-of-center
    camera.position.set(-18, 2, 26);
    camera.lookAt(0, 0, 0);

    scene.add(new AmbientLight(0xffffff, 0.5));
    const d1 = new DirectionalLight(0xffffff, 1.0);
    d1.position.set(8, 15, 10);
    scene.add(d1);
    const d2 = new DirectionalLight(0xffffff, 0.3);
    d2.position.set(-8, -3, -8);
    scene.add(d2);

    const maxV = 1600;
    const geo = new BoxGeometry(0.88, 0.88, 0.88);
    const mat = new MeshLambertMaterial({ color: 0xffffff });
    const mesh = new InstancedMesh(geo, mat, maxV);
    mesh.count = 0;

    const dummy = new Object3D();
    const col = new Color();
    const pivot = new Group();
    scene.add(pivot);
    pivot.add(mesh);

    let curIdx = Math.floor(Math.random() * OBJECTS.length);
    let curPos = OBJECTS[curIdx].map((p) => [...p] as [number, number, number]);
    let tgtPos: [number, number, number][] = [];
    let morphing = false;
    let morphStart = 0;
    let lastSwitch = performance.now();
    let hue = 200;
    let meshDirty = true;
    let dead = false;
    let hidden = false;

    // Rotation
    let rotY = 0, rotX = 0.3;
    let tRotY = 0, tRotX = 0.3;
    let dragging = false;
    let lastInput = 0;
    let pX = 0, pY = 0;

    function readHue() {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-hue").trim();
      const n = parseFloat(v);
      if (!isNaN(n) && n !== hue) {
        hue = n;
        meshDirty = true;
      }
    }
    readHue();

    const obs = new MutationObserver(readHue);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });

    function updateMesh(positions: [number, number, number][]) {
      mesh.count = positions.length;
      for (let i = 0; i < positions.length; i++) {
        dummy.position.set(positions[i][0], positions[i][1], positions[i][2]);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        const hv = (i / positions.length) * 20 - 10;
        col.setHSL((((hue + hv) % 360 + 360) % 360) / 360, 0.5, 0.5);
        mesh.setColorAt(i, col);
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }

    updateMesh(curPos);

    // Pointer interaction — window-level so it works regardless of
    // stacking context / z-index. Skips interactive elements.
    const onDown = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, input, select, textarea, [role="button"]')) return;
      dragging = true;
      pX = e.clientX; pY = e.clientY;
      lastInput = performance.now();
      if (e.pointerType === "mouse") e.preventDefault();
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      tRotY += (e.clientX - pX) * 0.008;
      tRotX += (e.clientY - pY) * 0.008;
      tRotX = Math.max(-1.2, Math.min(1.2, tRotX));
      pX = e.clientX; pY = e.clientY;
      lastInput = performance.now();
    };
    const onUp = () => {
      dragging = false;
    };

    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll reactivity — fade out and drift upward as user scrolls
    let scrollFactor = 0;
    function handleScroll() {
      const vh = window.innerHeight;
      scrollFactor = Math.min(window.scrollY / vh, 1);
      el!.style.opacity = String(0.4 * (1 - scrollFactor * 0.85));
      pivot.position.y = scrollFactor * 6;
    }
    if (!prefersReduced) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    function handleVisibility() {
      hidden = document.hidden;
      if (!hidden && !dead) requestAnimationFrame(animate);
    }
    document.addEventListener("visibilitychange", handleVisibility);

    function animate() {
      if (dead || hidden) return;
      requestAnimationFrame(animate);
      const now = performance.now();

      // Auto-rotate when idle (skip if user prefers reduced motion)
      if (!prefersReduced && !dragging && now - lastInput > IDLE_MS) {
        tRotY += AUTO_SPEED;
      }
      rotY += (tRotY - rotY) * 0.08;
      rotX += (tRotX - rotX) * 0.08;
      pivot.rotation.y = rotY;
      pivot.rotation.x = rotX;

      // Morph
      if (!morphing && now - lastSwitch > DISPLAY_INTERVAL) {
        morphing = true;
        morphStart = now;
        const nIdx = (curIdx + 1) % OBJECTS.length;
        tgtPos = OBJECTS[nIdx].map((p) => [...p] as [number, number, number]);
        const ml = Math.max(curPos.length, tgtPos.length);
        // Surplus source voxels scatter outward; deficit spawn from center
        while (curPos.length < ml) {
          curPos.push([(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2]);
        }
        while (tgtPos.length < ml) {
          const a = Math.random() * Math.PI * 2;
          const r = 12 + Math.random() * 8;
          tgtPos.push([Math.cos(a) * r, (Math.random() - 0.5) * 16, Math.sin(a) * r]);
        }
        // Sort both arrays by spatial key so nearby voxels pair together
        const sk = (p: [number, number, number]) => p[1] * 10000 + p[0] * 100 + p[2];
        curPos.sort((a, b) => sk(a) - sk(b));
        tgtPos.sort((a, b) => sk(a) - sk(b));
        curIdx = nIdx;
      }

      if (morphing) {
        const t = Math.min((now - morphStart) / MORPH_DURATION, 1);
        const e = easeInOutCubic(t);
        const interp: [number, number, number][] = curPos.map((f, i) => [
          f[0] + (tgtPos[i][0] - f[0]) * e,
          f[1] + (tgtPos[i][1] - f[1]) * e,
          f[2] + (tgtPos[i][2] - f[2]) * e,
        ]);
        updateMesh(interp);
        if (t >= 1) {
          morphing = false;
          lastSwitch = now;
          curPos = OBJECTS[curIdx].map((p) => [...p] as [number, number, number]);
          meshDirty = true;
        }
      } else if (meshDirty) {
        updateMesh(curPos);
        meshDirty = false;
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      dead = true;
      document.removeEventListener("visibilitychange", handleVisibility);
      obs.disconnect();
      resizeObs.disconnect();
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("scroll", handleScroll);
      mesh.dispose();
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      scene.clear();
      canvas.remove();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0"
      aria-hidden="true"
      style={{ opacity: 0.4 }}
    />
  );
}
