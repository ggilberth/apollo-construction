import { ImageResponse } from "next/og";
import { siteName } from "@/config/seo";

export const alt = `${siteName} — construction and groundworks`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #0a2348 0%, #143b72 100%)",
        color: "white",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          maxWidth: "980px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "5px solid white",
            borderRadius: "18px",
            display: "flex",
            fontSize: "62px",
            fontWeight: 900,
            letterSpacing: "2px",
            lineHeight: 1,
            padding: "10px 24px 7px",
          }}
        >
          APOLLO
        </div>
        <div
          style={{
            color: "#d4a017",
            display: "flex",
            fontSize: "26px",
            fontWeight: 800,
            letterSpacing: "7px",
            marginTop: "38px",
            textTransform: "uppercase",
          }}
        >
          Construction &amp; Groundworks
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "56px",
            fontWeight: 900,
            lineHeight: 1.08,
            marginTop: "24px",
            maxWidth: "960px",
          }}
        >
          Reliable work. Clear communication. Lasting results.
        </div>
        <div
          style={{
            color: "#dbe8f8",
            display: "flex",
            fontSize: "26px",
            fontWeight: 600,
            marginTop: "34px",
          }}
        >
          Leicester, the Midlands and beyond
        </div>
      </div>
    </div>,
    size,
  );
}
