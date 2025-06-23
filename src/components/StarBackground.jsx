import React from "react";

export const StarBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient blob 1 */}
      <div className="absolute top-1/4 left-1/2 w-[60vw] h-[60vw] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob" />
      
      {/* Gradient blob 2 */}
      <div className="absolute top-1/2 left-1/3 w-[50vw] h-[50vw] bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      {/* Gradient blob 3 */}
      <div className="absolute top-[60%] left-[70%] w-[40vw] h-[40vw] bg-gradient-to-br from-rose-400 via-fuchsia-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
    </div>
  );
};
