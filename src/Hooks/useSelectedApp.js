import { useState, useEffect } from "react";

export default function useSelectedApp() {
    const [app, setApp] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("selectedApp");
        if (stored) setApp(JSON.parse(stored));
        else window.location.href = "/";
    }, []);

    return app;
}
