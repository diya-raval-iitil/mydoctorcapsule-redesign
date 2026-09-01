import { motion, type HTMLMotionProps } from 'framer-motion';
import {
  fadeUpVariants,
  fadeLeftVariants,
  fadeRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
  sectionRevealContainerVariants,
  sectionBadgeVariants,
  sectionHeadingVariants,
  sectionBodyVariants,
  sectionActionsVariants,
  defaultViewport,
} from '@/animations';
import { useRevealAnimation } from '@/hooks/useRevealAnimation';
import { cn } from '@/utils/cn';

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  className?: string;
}

function useWrapperReveal(animateProp?: MotionWrapperProps['animate']) {
  const reveal = useRevealAnimation(defaultViewport);
  return {
    ref: reveal.ref,
    animate: animateProp ?? reveal.animate,
  };
}

export function FadeUp({
  className,
  children,
  animate: animateProp,
  ...props
}: MotionWrapperProps) {
  const { ref, animate } = useWrapperReveal(animateProp);

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={animate}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({
  className,
  children,
  animate: animateProp,
  ...props
}: MotionWrapperProps) {
  const { ref, animate } = useWrapperReveal(animateProp);

  return (
    <motion.div
      ref={ref}
      variants={fadeLeftVariants}
      initial="hidden"
      animate={animate}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({
  className,
  children,
  animate: animateProp,
  ...props
}: MotionWrapperProps) {
  const { ref, animate } = useWrapperReveal(animateProp);

  return (
    <motion.div
      ref={ref}
      variants={fadeRightVariants}
      initial="hidden"
      animate={animate}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  className,
  children,
  animate: animateProp,
  ...props
}: MotionWrapperProps) {
  const { ref, animate } = useWrapperReveal(animateProp);

  return (
    <motion.div
      ref={ref}
      variants={staggerContainerVariants}
      initial="hidden"
      animate={animate}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionReveal({
  className,
  children,
  animate: animateProp,
  ...props
}: MotionWrapperProps) {
  const { ref, animate } = useWrapperReveal(animateProp);

  return (
    <motion.div
      ref={ref}
      variants={sectionRevealContainerVariants}
      initial="hidden"
      animate={animate}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionBadge({
  className,
  children,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={sectionBadgeVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  className,
  children,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={sectionHeadingVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionBody({
  className,
  children,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={sectionBodyVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionActions({
  className,
  children,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={sectionActionsVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
