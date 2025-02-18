import React from "react";

function Home() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.8rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8rem",
          }}
        >
          <img width={32} src="./logo_v1.svg" />
          <h1
            style={{
              margin: 0,
              fontSize: "1.4rem",
            }}
          >
            BibleWiki
          </h1>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: "1.3rem",
          }}
        >
          Tem algo bom vindo ai...
        </p>
      </div>
    </>
  );
}

export default Home;
