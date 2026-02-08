import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const raw = Number(request.nextUrl.searchParams.get("hue"));
  const hue = isNaN(raw) ? 330 : ((raw % 360) + 360) % 360;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="64" fill="#050505"/>
  <polygon points="256,96 416,192 256,288 96,192" fill="hsl(${hue} 55% 65%)"/>
  <polygon points="96,192 256,288 256,416 96,320" fill="hsl(${hue} 55% 45%)"/>
  <polygon points="256,288 416,192 416,320 256,416" fill="hsl(${hue} 55% 35%)"/>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
