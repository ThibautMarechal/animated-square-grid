import { AnimationProps, motion } from 'framer-motion';

const blockArray = new Array(5 * 5).fill(0);
const animate: AnimationProps['animate'] = {
  scale: [1, 1 / Math.sqrt(Math.pow(1, 2) + Math.pow(1, 2)), 1],
  rotate: [135, 45, 135],
};

function App() {
  return (
    <>
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <motion.div className="paper" style={{ filter: 'url("#filter")' }}>
        {blockArray.map((_, i) => (
          <motion.div
            className="block"
            animate={animate}
            transition={{
              duration: 2,
              delay: (i % 5) + Math.floor(i / 5),
              repeat: Infinity,
            }}
            style={{ filter: 'url("#filter")' }}
          ></motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default App;
