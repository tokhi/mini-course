import React, { useState, useCallback } from "react";
import {
  BrowserView,
  MobileView
} from "react-device-detect";

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
          <BrowserView>
            <img src="https://storage.googleapis.com/shop-bucket/meditate/beach.jpg" />
          </BrowserView>
          <MobileView>
            <img src="https://storage.googleapis.com/shop-bucket/meditate/beachMobile.jpg" />
          </MobileView>

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
    backgroundColor: "rgba(140, 218, 231, 0.92)",
    fontSize: 32,
    color: "white"
  }
};

export default Screensaver;