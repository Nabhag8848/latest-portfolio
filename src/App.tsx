import Motion from "./Motion";
import "./index.css";

function App() {
  return (
    <div style={{ backgroundColor: "#030303", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#ffffff",
          marginBottom: "30vh",
          paddingRight: "50vh",
          paddingTop: "20vh",
        }}
      >
        <div
          style={{
            paddingLeft: "50vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Motion
            styles={{
              borderRadius: "40%",
              paddingTop: "20vh",
            }}
            transition={{
              duration: undefined,
              repeat: undefined,
            }}
            animate={{ rotateZ: 100, rotateX: 100 }}
          />
          <Motion
            styles={{
              marginLeft: "40vw",
              borderRadius: "40%",
              paddingTop: "20vh",
            }}
            transition={{
              duration: undefined,
              repeat: undefined,
            }}
            animate={{ rotateZ: 100, rotateX: 100 }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Motion
          styles={{
            height: "20px",
            width: "400px",
          }}
        />
      </div>
    </div>
  );
}

export default App;
