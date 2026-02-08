import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stephan Bönnemann-Walenta — Builder of Things";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow — top right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-50px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, hsla(330, 70%, 50%, 0.12) 0%, transparent 70%)",
          }}
        />

        {/* Ambient glow — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-60px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, hsla(330, 70%, 50%, 0.06) 0%, transparent 70%)",
          }}
        />

        {/* Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              color: "#ededed",
              lineHeight: 0.95,
              letterSpacing: "-3px",
            }}
          >
            Stephan
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              color: "#ededed",
              lineHeight: 0.95,
              letterSpacing: "-3px",
            }}
          >
            Bönnemann-
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              color: "#ededed",
              lineHeight: 0.95,
              letterSpacing: "-3px",
            }}
          >
            Walenta
          </div>
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "hsl(330, 55%, 65%)",
            marginTop: 44,
            borderRadius: 2,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 21,
            color: "hsl(330, 55%, 65%)",
            marginTop: 28,
            letterSpacing: 6,
            textTransform: "uppercase" as const,
          }}
        >
          BUILDER OF THINGS
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 80,
            fontSize: 18,
            color: "#555",
            letterSpacing: 3,
          }}
        >
          sbw.one
        </div>
      </div>
    ),
    { ...size }
  );
}
