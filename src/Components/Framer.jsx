/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useRef, useState } from 'react';
// import { useAnimationFrame, useScroll } from 'framer-motion';

// const Framer = () => {
//   const canvasRef = useRef(null);
//   const [images, setImages] = useState([]);
//   const frames = useRef({ index: 0, MaxFrames: 270 }).current;
//   const drawImageRef = useRef(null);
  

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     const loadedImages = [];
//     let imageLoaded = 0;

//     const loadImages = () => {
//       for (let i = 1; i <= frames.MaxFrames; i++) {
//         const path = `/Alex/frame_${i.toString().padStart(4, '0')}.jpeg`;
//         const img = new Image();
//         img.src = path;

//         img.onload = () => {
//           imageLoaded++;
//           loadedImages.push(img);

//           if (imageLoaded === frames.MaxFrames) {
//             setImages([...loadedImages]);
//           }
//         };

//         img.onerror = (e) => {
//           console.error(`Failed to load image at ${path}`, e);
//         };
//       }
//     };

//     drawImageRef.current = (val) => {
//       if (val >= 0 && val < frames.MaxFrames) {
//         const img = images[val];
//         if (!img) return;
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         const scaleX = canvas.width / img.width;
//         const scaleY = canvas.height / img.height;
//         const scale = Math.max(scaleX, scaleY);

//         const newWidth = img.width * scale;
//         const newHeight = img.height * scale;
//         const offsetX = (canvas.width - newWidth) / 2;
//         const offsetY = (canvas.height - newHeight) / 2;

//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.imageSmoothingEnabled = true;
//         context.imageSmoothingQuality = 'high';
//         context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
//         frames.index = val;
//       }
//     };

//     loadImages();
//   }, [frames, images]);

//   const { scrollY } = useScroll();
//   useAnimationFrame(() => {
//     if (images.length > 0 && drawImageRef.current) {
//       const scrollProgress = scrollY.get() / (document.body.scrollHeight - window.innerHeight);
//       const currentFrame = Math.min(frames.MaxFrames - 1, Math.floor(scrollProgress * frames.MaxFrames));
//       frames.index = currentFrame;
//       drawImageRef.current(currentFrame);
//     }
//   });

//   return (
//     <div className="h-[250vh]">
//       <div className="parent h-[250vh] w-full relative ">
//         <div className="canva h-screen w-full sticky top-0 left-0 overflow-hidden">
//           <canvas ref={canvasRef} className="h-screen w-full"></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Framer;
import React, { useEffect, useRef, useState } from 'react';
import { useAnimationFrame, useScroll } from 'framer-motion';

const Framer = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frames = useRef({ index: 0, MaxFrames: 270 }).current;
  const drawImageRef = useRef(null);

  // Function to update canvas size and redraw the current frame
  const updateCanvas = () => {
    if (drawImageRef.current) {
      drawImageRef.current(frames.index); // Redraw the current frame
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const loadedImages = [];
    let imageLoaded = 0;

    const loadImages = () => {
      for (let i = 1; i <= frames.MaxFrames; i++) {
        const path = `/Alex/frame_${i.toString().padStart(4, '0')}.jpeg`;
        const img = new Image();
        img.src = path;

        img.onload = () => {
          imageLoaded++;
          loadedImages.push(img);

          if (imageLoaded === frames.MaxFrames) {
            setImages([...loadedImages]);
            updateCanvas(); // Initial canvas update after images are loaded
          }
        };

        img.onerror = (e) => {
          console.error(`Failed to load image at ${path}`, e);
        };
      }
    };

    drawImageRef.current = (val) => {
      if (val >= 0 && val < frames.MaxFrames) {
        const img = images[val];
        if (!img) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;
        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        frames.index = val;
      }
    };

    loadImages();

    // Add resize event listener
    window.addEventListener('resize', updateCanvas);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', updateCanvas);
    };
  }, [frames, images]);

  const { scrollY } = useScroll();
  useAnimationFrame(() => {
    if (images.length > 0 && drawImageRef.current) {
      const scrollProgress = scrollY.get() / (document.body.scrollHeight - window.innerHeight);
      const currentFrame = Math.min(frames.MaxFrames - 1, Math.floor(scrollProgress * frames.MaxFrames));
      frames.index = currentFrame;
      drawImageRef.current(currentFrame);
    }
  });

  return (
    <div className="h-[250vh]">
      <div className="parent h-[250vh] w-full relative">
        <div className="canva h-screen w-full sticky top-0 left-0 overflow-hidden">
          <canvas ref={canvasRef} className="h-screen w-full"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Framer;
