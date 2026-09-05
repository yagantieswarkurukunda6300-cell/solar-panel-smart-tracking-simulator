function Sun({ position, setPosition }) {
  return (
    <div
      style={{
        padding: "15px",
        textAlign: "center",
      }}
    >
      {/* Sun Visual Area */}
      <div
        style={{
          position: "relative",
          width: "140px",
          height: "140px",
          margin: "5px auto 15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateX(${(position - 50) * 2}px)`,
          transition: "transform 0.25s ease",
        }}
      >
        {/* Rotating Sun Rays */}
        <div
          style={{
            position: "absolute",
            width: "125px",
            height: "125px",
            borderRadius: "50%",
            border: "3px dashed rgba(255, 193, 7, 0.65)",
            animation: "sunRotate 12s linear infinite",
          }}
        />

        {/* Outer Glow */}
        <div
          style={{
            position: "absolute",
            width: "105px",
            height: "105px",
            borderRadius: "50%",
            backgroundColor: "#FFD54A",
            opacity: 0.25,
            filter: "blur(12px)",
            animation: "sunPulse 2.5s ease-in-out infinite",
          }}
        />

        {/* Sun */}
        <div
          style={{
            width: "82px",
            height: "82px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 30%, #fff7a8, #FFD54A 45%, #f59e0b 100%)",
            boxShadow:
              "0 0 25px rgba(255, 193, 7, 0.65), 0 0 55px rgba(255, 193, 7, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            zIndex: 2,
            animation: "sunFloat 3s ease-in-out infinite",
          }}
        >
          ☀️
        </div>
      </div>

      {/* Title */}
      <h2
        style={{
          color: "#111827",
          fontSize: "26px",
          fontWeight: "900",
          marginBottom: "10px",
        }}
      >
        ☀️ LIVE SUN POSITION
      </h2>

      {/* Live Reading */}
      <div
        style={{
          fontSize: "48px",
          fontWeight: "900",
          color: "#0b3d91",
          margin: "10px 0 20px",
        }}
      >
        {position}%
      </div>

      <p
        style={{
          color: "#4b5563",
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "15px",
        }}
      >
        Current sunlight direction
      </p>

      {/* Slider */}
      <input
        type="range"
        min="10"
        max="90"
        value={position}
        onChange={(event) =>
          setPosition(Number(event.target.value))
        }
        style={{
          width: "90%",
          cursor: "pointer",
          accentColor: "#0b3d91",
        }}
      />

      {/* Position Labels */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          margin: "8px auto 0",
          fontSize: "14px",
          fontWeight: "700",
          color: "#374151",
        }}
      >
        <span>← Left</span>
        <span>Center</span>
        <span>Right →</span>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes sunFloat {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-6px);
            }
          }

          @keyframes sunPulse {
            0%, 100% {
              transform: scale(0.95);
              opacity: 0.20;
            }

            50% {
              transform: scale(1.08);
              opacity: 0.35;
            }
          }

          @keyframes sunRotate {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Sun;