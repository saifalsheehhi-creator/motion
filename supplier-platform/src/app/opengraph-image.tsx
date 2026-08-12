import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #b89a63 0%, #8a6a35 35%, #4a3216 70%, #1c1206 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "24px 48px",
            borderRadius: 32,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#eab84f",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 64, fontWeight: 700, color: "#fbf3e2" }}>Maward</span>
            <span style={{ fontSize: 22, color: "#e3d2ac", letterSpacing: 2 }}>SUPPLIER DISCOVERY</span>
          </div>
        </div>
        <span style={{ marginTop: 36, fontSize: 28, color: "#fbf3e2", maxWidth: 820, textAlign: "center" }}>
          Find the right supplier, faster
        </span>
      </div>
    ),
    { ...size }
  );
}
