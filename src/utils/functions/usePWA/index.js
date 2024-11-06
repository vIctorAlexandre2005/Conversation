import { useEffect, useState } from "react";

export function usePWA() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        setInstallPrompt(event);
      });

      window.addEventListener("appinstalled", (event) => {
        console.log("App installed");
      });

      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope,
            );
          },
          (err) => {
            console.log("ServiceWorker registration failed: ", err);
          },
        );
      });
    }
  }, []);

  return installPrompt;
}
