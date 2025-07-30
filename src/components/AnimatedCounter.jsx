import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

/**
 * 动画数字计数器组件
 * 当组件进入视口时，数字从起始值递增到目标值
 * 
 * @param {number} from - 起始数值，默认为0
 * @param {number} to - 目标数值
 * @param {number} duration - 动画持续时间（秒），默认为2秒
 * @param {string} suffix - 数字后缀，如"M+"、"%"等
 * @param {string} className - 额外的CSS类名
 */
const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "", className = "" }) => {
  const ref = useRef(null)
  // 检测组件是否进入视口
  const isInView = useInView(ref, { once: true })
  
  // 创建动画值，用于控制数字变化
  const count = useMotionValue(from)
  // 将动画值转换为整数显示
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      // 当组件进入视口时，启动数字递增动画
      const controls = animate(count, to, {
        duration: duration,
        ease: "easeOut" // 缓出动画效果
      })
      // 清理函数，组件卸载时停止动画
      return controls.stop
    }
  }, [isInView, count, to, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }} // 初始状态：透明且缩小
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }} // 进入视口时：不透明且正常大小
      transition={{ duration: 0.5, delay: 0.2 }} // 容器动画配置
      className={className}
    >
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </motion.div>
  )
}

export default AnimatedCounter

