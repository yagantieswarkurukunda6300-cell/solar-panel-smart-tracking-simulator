function PowerGraph({ data }) {
  const width = 800;
  const height = 300;
  const padding = 50;

  const maxPower = 100;

  const points = data
    .map((item, index) => {
      const x =
        padding +
        (index / Math.max(data.length - 1, 1)) *
          (width - padding * 2);

      const y =
        height -
        padding -
        (item.power / maxPower) *
          (height - padding * 2);

      return `${x},${y}`;
    })
    .join(" ");

  const powers = data.map((item) => item.power);

  const maximumPower =
    powers.length > 0 ? Math.max(...powers) : 0;

  const minimumPower =
    powers.length > 0 ? Math.min(...powers) : 0;

  const averagePower =
    powers.length > 0
      ? powers.reduce((sum, value) => sum + value, 0) /
        powers.length
      : 0;

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "25px",
        borderRadius: "18px",
        border: "1px solid #d9e2ec",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
        color: "#17202a",
      }}
    >
      {/* Graph Title */}
      <h2
        style={{
          color: "#111827",
          fontSize: "26px",
          fontWeight: "900",
          marginBottom: "20px",
        }}
      >
        📈 Power Generation Graph
      </h2>

      {/* Graph */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{
          maxWidth: "800px",
          display: "block",
          margin: "0 auto",
        }}
      >
        {/* Y Axis */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#374151"
          strokeWidth="2"
        />

        {/* X Axis */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#374151"
          strokeWidth="2"
        />

        {/* Power Line */}
        {data.length > 0 && (
          <polyline
            points={points}
            fill="none"
            stroke="#1e5aa8"
            strokeWidth="4"
          />
        )}

        {/* X Axis Label */}
        <text
          x={width / 2}
          y={height - 10}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#374151"
        >
          Simulation Time
        </text>

        {/* Y Axis Label */}
        <text
          x="15"
          y={height / 2}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#374151"
          transform={`rotate(-90 15 ${height / 2})`}
        >
          Power (W)
        </text>

        {/* Maximum Label */}
        <text
          x={padding - 10}
          y={padding + 5}
          textAnchor="end"
          fontSize="12"
          fontWeight="700"
          fill="#374151"
        >
          100 W
        </text>

        {/* Minimum Label */}
        <text
          x={padding - 10}
          y={height - padding + 5}
          textAnchor="end"
          fontSize="12"
          fontWeight="700"
          fill="#374151"
        >
          0 W
        </text>
      </svg>

      {/* Description */}
      <p
        style={{
          color: "#4b5563",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "15px",
        }}
      >
        This graph shows how simulated power output changes
        during the tracking simulation.
      </p>

      {/* Simulation Statistics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {/* Maximum */}
        <div
          style={{
            padding: "18px",
            borderRadius: "12px",
            backgroundColor: "#f4f7fb",
          }}
        >
          <h3
            style={{
              color: "#111827",
              fontSize: "18px",
              fontWeight: "900",
              margin: "0 0 8px",
            }}
          >
            ⬆️ Maximum
          </h3>

          <strong
            style={{
              color: "#0b3d91",
              fontSize: "24px",
              fontWeight: "900",
            }}
          >
            {maximumPower.toFixed(1)} W
          </strong>
        </div>

        {/* Minimum */}
        <div
          style={{
            padding: "18px",
            borderRadius: "12px",
            backgroundColor: "#f4f7fb",
          }}
        >
          <h3
            style={{
              color: "#111827",
              fontSize: "18px",
              fontWeight: "900",
              margin: "0 0 8px",
            }}
          >
            ⬇️ Minimum
          </h3>

          <strong
            style={{
              color: "#0b3d91",
              fontSize: "24px",
              fontWeight: "900",
            }}
          >
            {minimumPower.toFixed(1)} W
          </strong>
        </div>

        {/* Average */}
        <div
          style={{
            padding: "18px",
            borderRadius: "12px",
            backgroundColor: "#f4f7fb",
          }}
        >
          <h3
            style={{
              color: "#111827",
              fontSize: "18px",
              fontWeight: "900",
              margin: "0 0 8px",
            }}
          >
            📊 Average
          </h3>

          <strong
            style={{
              color: "#0b3d91",
              fontSize: "24px",
              fontWeight: "900",
            }}
          >
            {averagePower.toFixed(1)} W
          </strong>
        </div>
      </div>
    </div>
  );
}

export default PowerGraph;