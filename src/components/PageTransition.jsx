import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// 页面切换动画变体配置
const pageVariants = {
  initial: {
    opacity: 0,
    // 移除横向滑动，只保留淡入效果
  },
  in: {
    opacity: 1,
    // 页面逐渐显现
  },
  out: {
    opacity: 0,
    // 页面淡出
  }
}

// 页面切换动画配置
const pageTransition = {
  type: "tween",
  ease: "easeInOut", // 使用更平滑的缓动函数
  duration: 0.4 // 稍微缩短动画时长
}

/**
 * 页面切换动画组件
 * 提供页面间的平滑过渡效果，使用淡入淡出动画
 */
const PageTransition = ({ children }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition

