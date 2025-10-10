import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function useAppInstallation(app) {
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const storedInstalled = localStorage.getItem("installedApps");
        if (storedInstalled && app) {
            const installedList = JSON.parse(storedInstalled);
            const exists = installedList.some((a) => a.id === app.id);
            if (exists) setInstalled(true);
        }
    }, [app]);

    const handleInstall = () => {
        if (!app) return;

        setInstalled(true);
        toast.success(`${app.title} installed successfully!`);

        const stored = localStorage.getItem("installedApps");
        const installedList = stored ? JSON.parse(stored) : [];

        const exists = installedList.some((a) => a.id === app.id);
        if (!exists) {
            installedList.push(app);
            localStorage.setItem("installedApps", JSON.stringify(installedList));
        }
    };

    return { installed, handleInstall };
}
