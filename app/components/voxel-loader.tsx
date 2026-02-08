"use client";

import dynamic from "next/dynamic";

const VoxelScene = dynamic(() => import("./voxel-scene"), { ssr: false });

export default function VoxelLoader() {
  return <VoxelScene />;
}
