import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// El logo real es un wordmark caligráfico horizontal (1182x482) sin isotipo
// aislado — no sirve recortado a 32x32. Monograma provisional con las
// iniciales del doctor en el azul de marca (#0072d8) hasta que exista un
// isotipo dedicado.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0072d8",
          color: "#ffffff",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        GA
      </div>
    ),
    { ...size }
  );
}
