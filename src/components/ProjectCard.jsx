import PropTypes from 'prop-types';
import { motion, useAnimationControls } from 'motion/react';

export default function ProjectCard({ name, description, imgUrl }) {
  const liftControls = useAnimationControls();

  const imageVariants = {
    lift: { y: -10 },
    initial: { y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col gap-10 px-5 pt-5 border border-gray-500 rounded-2xl cursor-pointer"
      whileHover={() => liftControls.start('lift')}
      onHoverEnd={() => liftControls.start('initial')}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-medium">{name}</p>
          <p className="text-base font-light text-gray-700">{description}</p>
        </div>
        <div className="flex gap-3">
          <div className="rounded-lg border border-gray-500 px-2 py-1 flex justify-center items-center text-gray-700">
            Visit Site
          </div>
          <div className="rounded-lg border border-gray-500 px-2 py-1 flex justify-center items-center text-gray-700">
            View Source Code
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <motion.img
          src={imgUrl}
          alt="Noteable"
          className="w-3/4 rounded-t-xl border-t border-x border-gray-500"
          variants={imageVariants}
          animate={liftControls}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
