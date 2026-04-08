// "use client";

// import { useEffect, useState } from "react";

// export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(onComplete, 500); // Small delay after reaching 100%
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5; // Random progress between 5-20%
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-white mb-8">
//           Loading Omar Portfolio
//         </h1>

//         <div className="w-80 h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
//           <div
//             className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
//             style={{ width: `${progress}%` }}
//           />
//         </div>

//         <p className="text-gray-400 text-lg">{Math.round(progress)}%</p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + Math.random() * 15 + 5, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 px-4">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
          Loading Omar Portfolio
        </h1>

        <div className="w-64 sm:w-80 md:w-96 h-2 sm:h-2.5 md:h-3 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium drop-shadow-sm">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
