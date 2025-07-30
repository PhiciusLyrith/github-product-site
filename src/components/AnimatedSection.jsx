import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * 动画区域组件
 * 为整个区域提供容器级别的动画，支持子元素的错位动画效果
 * 
 * @param {React.ReactNode} children - 区域内容
 * @param {string} className - 额外的CSS类名
 * @param {number} staggerChildren - 子元素动画的错位时间间隔（秒）
 */
const AnimatedSection = ({ children, className = "", staggerChildren = 0.1 }) => {
  const ref = useRef(null)
  // 检测区域是否进入视口，触发动画
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  // 容器动画变体配置
  const containerVariants = {
    hidden: {
      opacity: 0 // 初始状态：完全透明
    },
    visible: {
      opacity: 1, // 最终状态：完全不透明
      transition: {
        duration: 0.6, // 容器淡入时间
        staggerChildren: staggerChildren, // 子元素错位动画间隔
        delayChildren: 0.2 // 子元素动画延迟开始时间
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection

