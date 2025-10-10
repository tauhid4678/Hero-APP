import { useState, useMemo } from "react";

export default function useAppSorting(apps) {
    const [sortBy, setSortBy] = useState("");

    const sortedApps = useMemo(() => {
        if (!sortBy) return apps;

        const appsCopy = [...apps];
        switch (sortBy) {
            case "size":
                return appsCopy.sort((a, b) => b.size - a.size);
            case "downloads":
                return appsCopy.sort((a, b) => b.downloads - a.downloads);
            case "rating":
                return appsCopy.sort((a, b) => b.ratingAvg - a.ratingAvg);
            default:
                return appsCopy;
        }
    }, [apps, sortBy]);

    return { sortedApps, sortBy, setSortBy };
}
