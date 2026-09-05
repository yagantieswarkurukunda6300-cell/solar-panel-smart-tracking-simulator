function TrackingStatus({ angle }) {
  const absoluteAngle = Math.abs(angle);

  let status = "Perfect Alignment";
  let message = "Panel is aligned with the sunlight.";
  let direction = "🎯 Center";
  
  if (angle > 5) {
    direction = "➡️ Tracking Right";
  } else if (angle < -5) {
    direction = "⬅️ Tracking Left";
  }

  if (absoluteAngle > 30) {
    status = "Low Alignment";
    message = "Panel needs more tracking adjustment.";
  } else if (absoluteAngle > 10) {
    status = "Good Alignment";
    message = "Panel is reasonably aligned with the sunlight.";
  }

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <h2>📊 Tracking Status</h2>

      <div
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          margin: "15px 0",
        }}
      >
        {status}
      </div>

      <p>{message}</p>

      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          margin: "15px 0",
        }}
      >
        {direction}
      </div>

      <p>
        Tracking Angle: <strong>{angle.toFixed(1)}°</strong>
      </p>
    </div>
  );
}

export default TrackingStatus;