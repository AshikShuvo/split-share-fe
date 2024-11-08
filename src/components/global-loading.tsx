import useSiteStore from "@/store/useSiteStore.ts";
import loadingSvg from "@/assets/loading.gif";

export default function GlobalLoadingComponent() {
    const isGlobalLoading = useSiteStore((state) => state.isGlobalLoading());
    if (isGlobalLoading) {
        return (
            <div className="absolute h-screen w-screen backdrop-blur flex flex-col justify-center items-center">
                <img alt="Loading" src={loadingSvg} />
            </div>
        )
    }
    return <></>
}