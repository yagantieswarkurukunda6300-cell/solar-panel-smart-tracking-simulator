import { useEffect, useState } from "react";
import SolarPanel from "./components/SolarPanel";
import Sun from "./components/Sun";
import PowerDisplay from "./components/PowerDisplay";
import TrackingStatus from "./components/TrackingStatus";
import Comparison from "./components/Comparison";
import PowerGraph from "./components/PowerGraph";

function App() {
  const [sunPosition, setSunPosition] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const [direction, setDirection] = useState(1);
  const [speed, setSpeed] = useState(100);
  const [powerHistory, setPowerHistory] = useState([]);

  const trackingAngle = (sunPosition - 50) * 1.2;

  const powerOutput =
    100 * Math.cos((Math.abs(trackingAngle) * Math.PI) / 180);

  const safePowerOutput = Math.max(0, powerOutput);

  // Reset Simulation
  const resetSimulation = () => {
    setSunPosition(50);
    setIsRunning(false);
    setDirection(1);
    setSpeed(100);
    setPowerHistory([]);
  };

  // Automatic Sun Movement
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setSunPosition((currentPosition) => {
        let nextPosition = currentPosition + direction;

        if (nextPosition >= 90) {
          nextPosition = 90;
          setDirection(-1);
        }

        if (nextPosition <= 10) {
          nextPosition = 10;
          setDirection(1);
        }

        return nextPosition;
      });
    }, speed);

    return () => clearInterval(timer);
  }, [isRunning, direction, speed]);

  // Power History
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    setPowerHistory((previousHistory) => {
      const newData = [
        ...previousHistory,
        {
          position: sunPosition,
          power: safePowerOutput,
        },
      ];

      return newData.slice(-50);
    });
  }, [sunPosition, isRunning, safePowerOutput]);

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.96)",
    padding: "25px",
    borderRadius: "18px",
    border: "1px solid rgba(203, 213, 225, 0.9)",
    boxShadow: "0 8px 30px rgba(15, 23, 42, 0.10)",
    color: "#17202a",
    boxSizing: "border-box",
    backdropFilter: "blur(8px)",
  };

  const titleStyle = {
    color: "#111827",
    fontSize: "25px",
    fontWeight: "900",
    marginBottom: "15px",
  };

  const liveValueStyle = {
    color: "#0b3d91",
    fontSize: "46px",
    fontWeight: "900",
    margin: "15px 0",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px 20px 50px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        color: "#17202a",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #eaf4ff 0%, #f8fbff 45%, #fff7df 100%)",
      }}
    >
      {/* Animated Background Layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {/* Sun Glow */}
        <div
          style={{
            position: "absolute",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            top: "-80px",
            right: "-60px",
            background:
              "radial-gradient(circle, rgba(255,193,7,0.42) 0%, rgba(255,193,7,0.12) 45%, transparent 72%)",
            animation: "sunGlow 4s ease-in-out infinite",
          }}
        />

        {/* Blue Energy Glow */}
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            bottom: "-150px",
            left: "-120px",
            background:
              "radial-gradient(circle, rgba(30,90,168,0.20) 0%, rgba(30,90,168,0.05) 50%, transparent 72%)",
            animation: "energyFloat 7s ease-in-out infinite",
          }}
        />

        {/* Floating Energy Particles */}
        <span
          style={{
            position: "absolute",
            top: "18%",
            left: "8%",
            fontSize: "24px",
            opacity: 0.35,
            animation: "floatParticle 5s ease-in-out infinite",
          }}
        >
          ⚡
        </span>

        <span
          style={{
            position: "absolute",
            top: "35%",
            right: "8%",
            fontSize: "22px",
            opacity: 0.3,
            animation: "floatParticle 6s ease-in-out infinite 1s",
          }}
        >
          ✦
        </span>

        <span
          style={{
            position: "absolute",
            bottom: "20%",
            left: "15%",
            fontSize: "20px",
            opacity: 0.3,
            animation: "floatParticle 7s ease-in-out infinite 2s",
          }}
        >
          ⚡
        </span>

        <span
          style={{
            position: "absolute",
            bottom: "30%",
            right: "15%",
            fontSize: "22px",
            opacity: 0.28,
            animation: "floatParticle 5.5s ease-in-out infinite 1.5s",
          }}
        >
          ✦
        </span>

        {/* Circuit Lines */}
        <div
          style={{
            position: "absolute",
            top: "14%",
            left: 0,
            width: "25%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(30,90,168,0.25), transparent)",
            animation: "circuitMove 4s linear infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "72%",
            right: 0,
            width: "30%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(30,90,168,0.20), transparent)",
            animation: "circuitMove 5s linear infinite reverse",
          }}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <header
          style={{
            maxWidth: "1000px",
            margin: "0 auto 25px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 16px",
              borderRadius: "20px",
              backgroundColor: "rgba(219, 234, 254, 0.92)",
              color: "#0b3d91",
              fontSize: "14px",
              fontWeight: "800",
              marginBottom: "12px",
              boxShadow: "0 4px 15px rgba(30, 90, 168, 0.08)",
            }}
          >
            ☀️ EEE • SOLAR ENERGY • SIMULATION
          </div>

          <h1
            style={{
              color: "#111827",
              fontSize: "clamp(30px, 5vw, 42px)",
              fontWeight: "900",
              margin: "5px 0 10px",
              textShadow: "0 3px 12px rgba(15, 23, 42, 0.08)",
            }}
          >
            Solar Panel Smart Tracking Simulator
          </h1>

          <p
            style={{
              color: "#4b5563",
              fontSize: "17px",
              fontWeight: "600",
              margin: 0,
            }}
          >
            Simulating automatic solar panel tracking based on sun position
          </p>
        </header>

        {/* Simulation Controls */}
        <div
          style={{
            ...cardStyle,
            maxWidth: "650px",
            margin: "0 auto 30px",
          }}
        >
          <h2 style={titleStyle}>🎮 Simulation Control</h2>

          {/* Start / Stop */}
          <button
            onClick={() => setIsRunning(!isRunning)}
            style={{
              padding: "14px 30px",
              fontSize: "17px",
              fontWeight: "900",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              margin: "8px",
              backgroundColor: "#0b3d91",
              color: "#ffffff",
              boxShadow: "0 4px 10px rgba(11, 61, 145, 0.25)",
            }}
          >
            {isRunning ? "⏸ Stop Simulation" : "▶ Start Simulation"}
          </button>

          {/* Reset */}
          <button
            onClick={resetSimulation}
            style={{
              padding: "14px 25px",
              fontSize: "17px",
              fontWeight: "900",
              border: "1px solid #cbd5e1",
              borderRadius: "10px",
              cursor: "pointer",
              margin: "8px",
              backgroundColor: "#ffffff",
              color: "#111827",
            }}
          >
            🔄 Reset
          </button>

          <p
            style={{
              color: "#374151",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Status:{" "}
            <strong
              style={{
                color: isRunning ? "#15803d" : "#b45309",
              }}
            >
              {isRunning ? "Simulation Running" : "Simulation Paused"}
            </strong>
          </p>

          {/* Speed */}
          <h3
            style={{
              color: "#111827",
              fontSize: "20px",
              fontWeight: "900",
              marginTop: "22px",
            }}
          >
            Simulation Speed
          </h3>

          <div>
            <button
              onClick={() => setSpeed(250)}
              style={{
                padding: "10px 18px",
                margin: "5px",
                borderRadius: "8px",
                border: "1px solid #b8c4d1",
                cursor: "pointer",
                backgroundColor:
                  speed === 250 ? "#dbeafe" : "#ffffff",
                color: "#111827",
                fontWeight: "800",
              }}
            >
              🐢 Slow
            </button>

            <button
              onClick={() => setSpeed(100)}
              style={{
                padding: "10px 18px",
                margin: "5px",
                borderRadius: "8px",
                border: "1px solid #b8c4d1",
                cursor: "pointer",
                backgroundColor:
                  speed === 100 ? "#dbeafe" : "#ffffff",
                color: "#111827",
                fontWeight: "800",
              }}
            >
              ⚡ Normal
            </button>

            <button
              onClick={() => setSpeed(50)}
              style={{
                padding: "10px 18px",
                margin: "5px",
                borderRadius: "8px",
                border: "1px solid #b8c4d1",
                cursor: "pointer",
                backgroundColor:
                  speed === 50 ? "#dbeafe" : "#ffffff",
                color: "#111827",
                fontWeight: "800",
              }}
            >
              🚀 Fast
            </button>
          </div>

          <p
            style={{
              color: "#374151",
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Current Speed:{" "}
            <strong style={{ color: "#0b3d91" }}>
              {speed === 250
                ? "Slow"
                : speed === 100
                ? "Normal"
                : "Fast"}
            </strong>
          </p>
        </div>

        {/* Dashboard */}
        <main
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
            alignItems: "stretch",
          }}
        >
          {/* Sun Position */}
          <div style={cardStyle}>
            <Sun
              position={sunPosition}
              setPosition={setSunPosition}
            />
          </div>

          {/* Solar Panel */}
          <div style={cardStyle}>
            <h2 style={titleStyle}>🔄 Solar Panel</h2>

            <SolarPanel angle={trackingAngle} />
          </div>

          {/* Tracking Angle */}
          <div style={cardStyle}>
            <h2 style={titleStyle}>🎯 Tracking Angle</h2>

            <div style={liveValueStyle}>
              {trackingAngle.toFixed(1)}°
            </div>

            <p
              style={{
                color: "#4b5563",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Current Panel Rotation
            </p>
          </div>

          {/* Tracking Status */}
          <div style={cardStyle}>
            <TrackingStatus angle={trackingAngle} />
          </div>

          {/* Power Output */}
          <div
            style={{
              ...cardStyle,
              gridColumn: "1 / -1",
            }}
          >
            <PowerDisplay power={safePowerOutput} />
          </div>

          {/* Comparison */}
          <div
            style={{
              gridColumn: "1 / -1",
            }}
          >
            <Comparison trackingPower={safePowerOutput} />
          </div>

          {/* Power Graph */}
          <div
            style={{
              gridColumn: "1 / -1",
            }}
          >
            <PowerGraph data={powerHistory} />
          </div>
        </main>

        {/* Footer */}
        <footer
          style={{
            maxWidth: "1000px",
            margin: "35px auto 0",
            paddingTop: "20px",
            borderTop: "1px solid rgba(203, 213, 225, 0.9)",
            color: "#64748b",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Solar Panel Smart Tracking Simulator • EEE Project
        </footer>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes sunGlow {
            0%, 100% {
              transform: scale(1);
              opacity: 0.75;
            }
            50% {
              transform: scale(1.15);
              opacity: 1;
            }
          }

          @keyframes energyFloat {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(35px, -25px);
            }
          }

          @keyframes floatParticle {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-25px) rotate(12deg);
            }
          }

          @keyframes circuitMove {
            0% {
              transform: translateX(-30px);
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              transform: translateX(30px);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;