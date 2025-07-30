import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedCard from '../components/AnimatedCard'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCounter from '../components/AnimatedCounter'
import { motion } from 'framer-motion'
import { 
  Code, 
  GitBranch, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Star,
  GitCommit,
  CheckCircle
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "代码托管",
      description: "安全可靠的Git仓库托管，支持无限私有仓库"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "协作开发",
      description: "强大的分支管理和合并请求功能，让团队协作更高效"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "团队管理",
      description: "灵活的权限控制和团队管理工具"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "安全保障",
      description: "企业级安全防护，保护您的代码资产"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "CI/CD",
      description: "内置的持续集成和部署工具GitHub Actions"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "全球访问",
      description: "全球CDN加速，随时随地访问您的代码"
    }
  ]

  const testimonials = [
    {
      name: "张三",
      role: "技术总监",
      company: "科技公司A",
      content: "GitHub让我们的开发团队协作效率提升了300%，代码质量也得到了显著改善。"
    },
    {
      name: "李四",
      role: "开源项目维护者",
      company: "开源社区",
      content: "GitHub的开源生态系统帮助我的项目获得了全球开发者的关注和贡献。"
    },
    {
      name: "王五",
      role: "创业公司CTO",
      company: "初创企业B",
      content: "从初创到规模化，GitHub一直是我们最可靠的开发平台合作伙伴。"
    }
  ]

  const stats = [
    { number: "100M+", label: "开发者用户" },
    { number: "330M+", label: "代码仓库" },
    { number: "4M+", label: "企业客户" },
    { number: "99.9%", label: "服务可用性" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
                全球领先的开发者平台
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              让开发协作
              <span className="text-blue-400"> 更简单</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              GitHub是全球数百万开发者信赖的代码托管和协作平台，
              为您的项目提供安全、高效的版本控制和团队协作解决方案。
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  免费开始使用
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white text-gray-900 border-white hover:bg-gray-100">
                  查看企业方案
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <AnimatedCounter
                  from={0}
                  to={parseInt(stat.number.replace(/[^\d]/g, '')) || 0}
                  duration={2}
                  suffix={stat.number.includes('M') ? 'M+' : stat.number.includes('%') ? '.%' : '+'}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                />
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              强大的功能特性
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              从代码托管到团队协作，GitHub提供完整的开发工具链，
              让您专注于创造优秀的软件产品。
            </motion.p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <motion.div 
                      className="text-blue-600 mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              用户好评如潮
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              看看全球开发者和企业如何评价GitHub
            </motion.p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <motion.div 
                      className="flex items-center mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </motion.div>
                    <p className="text-gray-600 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              准备开始您的开发之旅？
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              加入数百万开发者的行列，体验世界级的代码托管和协作平台。
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                  免费注册
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white text-blue-600 border-white hover:bg-gray-100">
                  联系销售
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Home

