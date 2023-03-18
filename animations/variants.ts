// // // export const linkVariants = {
// // //     initial : {
// // //       opacity : 75
// // //     },
// // //     hover: {
// // //       // scale: 1.1,
// // //       textShadow: "0px 0px 8px rgb(255,255,255)",
// // //       opacity : 100,
// // //       transition: {
// // //         duration: 0.3,
        
// // //       },
// // //     },
// // //     tap: {
// // //       // scale: 0.9,
// // //     },
// //   };
  
//   export const svgVariants = {
//     hidden: { rotate: -180 },
//     visible: {
//       rotate: 0,
//       transition: { duration: 1 },
//     },
//   };
  
  export const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  export const headerVariants = {
    hidden: { 
      opacity: 0, 
      x: '100vw' 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', staggerChildren: 0.8, ease: "easeInOut", duration: 1, when: "beforeChildren"  }
    },
  };
  export const imageVariants = {
    hidden: { 
      opacity: 0, 
    },
    visible: { 
      opacity: 1, 
      transition: { delay:4, ease: "easeInOut", duration: 1 }
    },
  };