import {create} from "zustand";


interface SiteStoreState {
    globalLoadingCount: number;
    localLoading: Record<string, number>;

    setGlobalLoading: (isLoading: boolean) => void;
    setLocalLoading: (key: string, isLoading: boolean) => void;

    isGlobalLoading: () => boolean;
    isLocalLoading: (key: string) => boolean;
}

const useSiteStore = create<SiteStoreState>()((set) => ({
    globalLoadingCount: 0,
    localLoading: {},
    setGlobalLoading: (isLoading) =>
        set((state) => ({
            globalLoadingCount: isLoading
                ? state.globalLoadingCount + 1
                : Math.max(0, state.globalLoadingCount - 1),
        })),
        setLocalLoading: (key, isLoading) =>
        set((state) => ({
            localLoading: {
                ...state.localLoading,
                [key]: isLoading
                    ? (state.localLoading[key] || 0) + 1
                    : Math.max(0, (state.localLoading[key] || 0) - 1),
            },
        })),

    isGlobalLoading: ():boolean => {
        return useSiteStore.getState().globalLoadingCount > 0;
    },

    isLocalLoading: (key):boolean => {
        return (useSiteStore.getState().localLoading[key] || 0) > 0;
    },
}))


export default useSiteStore;