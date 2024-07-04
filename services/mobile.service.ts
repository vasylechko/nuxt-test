import { onMounted, ref, watch, computed } from "vue";


const BREAKPOINT_NAME:Record<string, string> = {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
};

const BREAKPOINT:Record<string, number> = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

const mobileDevices: string[] = ["xs", "sm"];

export default function useBreakpoint() {
    let timeout:number | null;

    const windowWidth = ref<undefined | number>(undefined);
    const currentBreakpoint = ref<string>(BREAKPOINT_NAME.xs);

    const isMobileBreakpoint = computed(():boolean => {
        return mobileDevices.includes(currentBreakpoint.value);
    });


    onMounted(():void => {
        windowWidth.value = window.innerWidth;

        window.addEventListener("resize", resizeListener, { passive: true });
    });

    watch(windowWidth, setBreakpoint , { immediate: true });

    function resizeListener():void {
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }

        timeout = window.requestAnimationFrame(() => {
            windowWidth.value = window.innerWidth;
        });
    }

    function setBreakpoint(newWindowWidth:number | undefined):void {
        if (newWindowWidth === undefined) return;

        currentBreakpoint.value = "xs";

        if (newWindowWidth >= BREAKPOINT.sm && newWindowWidth < BREAKPOINT.smd) {
            currentBreakpoint.value = "sm";
        } else if (newWindowWidth >= BREAKPOINT.md && newWindowWidth < BREAKPOINT.lg) {
            currentBreakpoint.value = "md";
        } else if (newWindowWidth >= BREAKPOINT.lg && newWindowWidth < BREAKPOINT.xl) {
            currentBreakpoint.value = "lg";
        } else if (newWindowWidth >= BREAKPOINT.xl && newWindowWidth < BREAKPOINT["2xl"]) {
            currentBreakpoint.value = "xl";
        } else if (newWindowWidth >= BREAKPOINT["2xl"]) {
            currentBreakpoint.value = "2xl";
        }
    }

    return {
        isMobileBreakpoint,
    };
}
