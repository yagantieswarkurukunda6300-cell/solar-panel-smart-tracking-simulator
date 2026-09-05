function SolarPanel({ angle }) {
  return (
    <div
      style={{
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {/* Solar Panel */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          perspective: "900px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "360px",
            height: "240px",
            transform: `rotate(${angle}deg)`,
            transition: "transform 0.3s ease",
            transformOrigin: "center center",
            animation: "panelGlow 3s ease-in-out infinite",
          }}
        >
          {/* Panel Frame */}
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#123f78",
              border: "8px solid #1f2937",
              borderRadius: "10px",
              padding: "8px",
              boxSizing: "border-box",
              boxShadow:
                "0 12px 25px rgba(15, 23, 42, 0.28)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Solar Cells */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: "3px",
              }}
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  style={{
                    background:
                      "linear-gradient(135deg, #1e5aa8, #2874bd)",
                    border: "1px solid #9ed0ff",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Cell Shine */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "60%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                      animation: `cellShine 4s linear infinite ${index * 0.15}s`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Light Reflection */}
            <div
              style={{
                position: "absolute",
                top: "-30%",
                left: "-20%",
                width: "35%",
                height: "160%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                transform: "rotate(20deg)",
                animation: "panelReflection 5s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* Tracker Stand */}
      <div
        style={{
          width: "30px",
          height: "55px",
          background:
            "linear-gradient(90deg, #303846, #5b6574, #303846)",
          margin: "0 auto",
          borderRadius: "4px",
          boxShadow: "0 4px 8px rgba(15, 23, 42, 0.25)",
        }}
      />

      {/* Motor Base */}
      <div
        style={{
          width: "150px",
          height: "25px",
          background:
            "linear-gradient(180deg, #374151, #111827)",
          margin: "0 auto",
          borderRadius: "8px",
          boxShadow: "0 5px 12px rgba(15, 23, 42, 0.25)",
        }}
      />

      {/* Angle */}
      <p
        style={{
          color: "#111827",
          fontSize: "17px",
          fontWeight: "800",
          marginTop: "18px",
        }}
      >
        Tracking Angle:{" "}
        <strong style={{ color: "#0b3d91" }}>
          {angle.toFixed(1)}°
        </strong>
      </p>

      {/* Tracking Indicator */}
      <div
        style={{
          display: "inline-block",
          padding: "8px 16px",
          borderRadius: "20px",
          backgroundColor: "#e8f5e9",
          color: "#15803d",
          fontSize: "14px",
          fontWeight: "900",
          marginTop: "5px",
        }}
      >
        ⚙️ Automatic Tracking Active
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes panelGlow {
            0%, 100% {
              filter: brightness(1);
            }

            50% {
              filter: brightness(1.08);
            }
          }

          @keyframes cellShine {
            0% {
              left: -100%;
            }

            35%, 100% {
              left: 140%;
            }
          }

          @keyframes panelReflection {
            0%, 100% {
              left: -30%;
              opacity: 0;
            }

            30% {
              opacity: 1;
            }

            60% {
              left: 110%;
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default SolarPanel;