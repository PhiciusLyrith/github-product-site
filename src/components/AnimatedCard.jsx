import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * 动画卡片组件
 * 当卡片进入视口时触发弹出动画，支持延迟和悬停效果
 * 
 * @param {React.ReactNode} children - 卡片内容
 * @param {number} delay - 动画延迟时间（秒）
 * @param {string} className - 额外的CSS类名
 */
const AnimatedCard = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null)
  // 使用Intersection Observer检测元素是否进入视口
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // 卡片动画变体配置
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50, // 从下方50px开始
      scale: 0.95 // 稍微缩小
    },
    visible: {
      opacity: 1,
      y: 0, // 移动到原位置
      scale: 1, // 恢复原始大小
      transition: {
        duration: 0.6, // 动画持续时间
        delay: delay, // 延迟时间
        ease: [0.25, 0.46, 0.45, 0.94] // 自定义缓动函数
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{ 
        scale: 1.02, // 悬停时轻微放大
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard

