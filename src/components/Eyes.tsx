import { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); // Added dependency array

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center gap-10">
        {/* Eye 1 */}
        <div className="flex items-end justify-center w-[120px] h-[120px] bg-zinc-100 rounded-full">
          <div className="relative size-[68%]  bg-zinc-900 rounded-full">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 w-full h-5"
            >
              <div className="w-5 h-5 m-1 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
        {/* Eye 2 */}
        <div className="flex items-end justify-center w-[120px] h-[120px] bg-zinc-100 rounded-full">
          <div className="relative size-[68%] bg-zinc-900 rounded-full">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 w-full h-5"
            >
              <div className="w-5 h-5 m-1 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
