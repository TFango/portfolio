import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import "./ProjectTiltCard.css";

interface ProjectTiltCardProps {
  slug: string;
  imageSrc: string;
  title: string;
  description: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  featured?: boolean;
}

const springValues = { damping: 30, stiffness: 100, mass: 2 };

export default function ProjectTiltCard({
  slug,
  imageSrc,
  title,
  description,
  rotateAmplitude = 10,
  scaleOnHover = 1.05,
  featured = false,
}: ProjectTiltCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const overlayOpacity = useSpring(0, { stiffness: 200, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    overlayOpacity.set(1);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    overlayOpacity.set(0);
  }

  return (
    <a
      ref={ref}
      href={`/proyectos/${slug}`}
      className={`tilt-card ${featured ? "tilt-card--featured" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className="tilt-card-inner" style={{ rotateX, rotateY, scale }}>
        <img src={imageSrc} alt={title} className="tilt-card-img" />

        <motion.div className="tilt-card-overlay" style={{ opacity: overlayOpacity }}>
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="tilt-card-cta">Ver más →</span>
        </motion.div>
      </motion.div>
    </a>
  );
}
