import { useOnScreen } from "@/hooks/useOnScreen";
import { lazy, Suspense } from "react";

const LeftSide = lazy(() => import("./left-side"));
const RightSide = lazy(() => import("./right-side"));

export default function About() {
  const { ref, isVisible } = useOnScreen();
  return (
    <section ref={ref} id="about" className="py-18 text-center">
      <div className="max-w-11/12 lg:max-w-8xl mx-auto flex flex-col items-center lg:flex-row gap-10">
        <Suspense fallback={<div></div>}>
          <LeftSide />
        </Suspense>
        {isVisible && (
          <Suspense fallback={<div></div>}>
            <RightSide />
          </Suspense>
        )}
      </div>
    </section>
  );
}
