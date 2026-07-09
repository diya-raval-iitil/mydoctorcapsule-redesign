import { motion, type HTMLMotionProps } from 'framer-motion';
import {
  fadeUpVariants,
  fadeInVariants,
  scaleInVariants,
  blurRevealVariants,
  fadeLeftVariants,
  fadeRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
  defaultViewport,
} from '@/animations';
import { cn } from '@/utils/cn';

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  className?: string;
}

export function FadeUp({ className, children, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ className, children, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({ className, children, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      variants={fadeLeftVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({ className, children, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      variants={fadeRightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ className, children, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      variants={scaleInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function BlurReveal({ className, children, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      variants={blurRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ className, children, ...props }: MotionWrapperProps) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ className, children, ...props }: MotionWrapperProps) {
  return (
    <motion.div variants={staggerItemVariants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}
