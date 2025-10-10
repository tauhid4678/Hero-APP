
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function useInstalledApps() {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("installedApps");
        if (stored) setInstalledApps(JSON.parse(stored));
    }, []);

    const uninstallApp = (id) => {
        const updatedApps = installedApps.filter((app) => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        toast.success("App uninstalled successfully!");
    };

    return { installedApps, uninstallApp };
}
