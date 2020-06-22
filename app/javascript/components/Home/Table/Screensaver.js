import React, { useState, useCallback } from "react";

// import "./styles.css";

const SCREENSAVER_DELAY_MS = 31000;

function Screensaver() {
  const [screensaverActive, setScreensaverActive] = useState(true);
  const [screensaverTimeout, setScreensaverTimeout] = useState(-1);
  
  const screensaverClicked = useCallback(() => {
    setScreensaverActive(false);
    startTimeout();
  });

  const startTimeout = useCallback(() => {
    clearTimeout(screensaverTimeout);
    const timeout = setTimeout(
      () => setScreensaverActive(true),
      SCREENSAVER_DELAY_MS
    );
    setScreensaverTimeout(timeout);
  });

  const appTouched = useCallback(ev => {
    if (ev.target.id !== "screensaver") {
      startTimeout();
    }
  });

  return (
    <div className="Screensaver" onClick={appTouched}>
      
      {screensaverActive && (
        <div
          id="screensaver"
          style={styles.screensaver}
          onClick={screensaverClicked}
        >
          <img src="/beach.jpg" />
        </div>
      )}
    </div>
  );
}

const styles = {
  screensaver: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(100, 100, 150, 0.92)",
    fontSize: 32,
    color: "white"
  }
};

export default Screensaver;