function Comparison({ trackingPower }) {
  const fixedPower = 70;

  const improvement =
    ((trackingPower - fixedPower) / fixedPower) * 100;

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "25px",
        borderRadius: "15px",
        border: "1px solid #d9e2ec",
        boxShadow: "0 5px 18px rgba(0, 0, 0, 0.10)",
        color: "#17202a",
      }}
    >
      {/* Title */}
      <h2
        style={{
          color: "#111827",
          fontSize: "26px",
          fontWeight: "900",
          marginBottom: "20px",
        }}
      >
        ⚡ Fixed vs Smart Tracking
      </h2>

      {/* Comparison Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Fixed Panel */}
        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#f1f5f9",
          }}
        >
          <h3
            style={{
              color: "#374151",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            🧱 Fixed Panel
          </h3>

          <p
            style={{
              color: "#111827",
              fontSize: "32px",
              fontWeight: "900",
              margin: "12px 0",
            }}
          >
            {fixedPower.toFixed(1)} W
          </p>

          <p
            style={{
              color: "#6b7280",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Constant panel position
          </p>
        </div>

        {/* Smart Tracking */}
        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#e8f5e9",
          }}
        >
          <h3
            style={{
              color: "#166534",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            🤖 Smart Tracking
          </h3>

          <p
            style={{
              color: "#15803d",
              fontSize: "32px",
              fontWeight: "900",
              margin: "12px 0",
            }}
          >
            {trackingPower.toFixed(1)} W
          </p>

          <p
            style={{
              color: "#166534",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Automatically follows sunlight
          </p>
        </div>
      </div>

      {/* Improvement */}
      <div
        style={{
          marginTop: "25px",
          padding: "18px",
          borderRadius: "12px",
          backgroundColor: "#eff6ff",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#374151",
            fontSize: "17px",
            fontWeight: "700",
            margin: "0 0 8px",
          }}
        >
          📈 Tracking Improvement
        </p>

        <div
          style={{
            color: "#0b3d91",
            fontSize: "34px",
            fontWeight: "900",
          }}
        >
          {Math.max(0, improvement).toFixed(1)}%
        </div>

        <p
          style={{
            color: "#6b7280",
            fontSize: "14px",
            fontWeight: "600",
            marginTop: "8px",
          }}
        >
          Compared with the fixed panel assumption
        </p>
      </div>
    </div>
  );
}

export default Comparison;