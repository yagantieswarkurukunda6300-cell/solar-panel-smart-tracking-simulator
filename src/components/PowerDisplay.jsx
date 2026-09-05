function PowerDisplay({ power }) {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#111827",
          fontSize: "26px",
          fontWeight: "900",
          marginBottom: "10px",
        }}
      >
        ⚡ LIVE POWER OUTPUT
      </h2>

      <div
        style={{
          fontSize: "52px",
          fontWeight: "900",
          color: "#0b3d91",
          margin: "15px 0",
          letterSpacing: "1px",
        }}
      >
        {power.toFixed(1)} W
      </div>

      <div
        style={{
          display: "inline-block",
          padding: "8px 18px",
          borderRadius: "20px",
          backgroundColor: "#e8f5e9",
          color: "#15803d",
          fontSize: "15px",
          fontWeight: "800",
        }}
      >
        ● LIVE SIMULATION
      </div>

      <p
        style={{
          color: "#4b5563",
          fontSize: "16px",
          fontWeight: "600",
          marginTop: "15px",
        }}
      >
        Current simulated power generation
      </p>
    </div>
  );
}

export default PowerDisplay;