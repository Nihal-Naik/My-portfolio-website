import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { BsRocket } from "react-icons/bs";

const Startup = ({ setLoading }) => {
  return (
    <div>
      <CountUp
        start={0}
        end={100}
        duration={4}
        suffix="%"
        delay={0}
        onEnd={() => setLoading(false)}
      >
        {({ countUpRef }) => (
          <div className="h-screen flex flex-col gap-5 justify-center items-center place-items-center font-space">
            <motion.p
              initial={{ y: 0 }}
              animate={{ y: -600 }}
              transition={{
                delay:1.5,
                duration: 1.5,
                ease: 'easeIn',
              }}
              className="text-white text-8xl sm:text-9xl"
            >
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              >
                <BsRocket />
              </motion.span>
            </motion.p>

            <p
              className="text-white text-3xl sm:text-6xl "
              ref={countUpRef}
            />
          </div>
        )}
      </CountUp>

    </div>
  );
};

export default Startup;
