// "use client";

// import { motion } from "framer-motion";

// interface SunBackgroundProps {
//   className?: string;
// }

// export const SunBackground = ({ className = "" }: SunBackgroundProps) => {
//   return (
//     <div className={`absolute inset-0 ${className}`}>
//       {/* Main gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 via-orange-50 to-amber-50">
//         {/* Animated sun glow - top right */}
//         <motion.div
//           className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-bl from-yellow-200/50 to-orange-300/30 rounded-full blur-3xl"
//           animate={{
//             y: [-20, 20, -20],
//             x: [20, -20, 20],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         {/* Secondary warm glow */}
//         <motion.div
//           className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-bl from-yellow-300/40 to-amber-200/30 rounded-full blur-3xl"
//           animate={{
//             y: [0, -30, 0],
//             x: [-30, 0, -30],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />

//         {/* Soft top light effect */}
//         <motion.div
//           className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-b from-yellow-50/60 via-transparent to-transparent"
//           animate={{
//             opacity: [0.4, 0.6, 0.4],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>
//     </div>
//   );
// };
