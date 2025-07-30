import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedCard from '../components/AnimatedCard'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'
import { 
  Code2, 
  GitBranch, 
  Shield, 
  Zap, 
  Bot,
  Globe,
  Users,
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Product = () => {
  const products = [
    {
      icon: <Code2 className="h-12 w-12" />,
      title: "GitHub Enterprise",
      description: "企业级代码托管和协作平台",
      features: [
        "无限私有仓库",
        "高级安全功能",
        "企业级支持",
        "SAML单点登录",
        "审计日志"
      ],
      badge: "企业首选"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "GitHub Actions",
      description: "强大的CI/CD自动化平台",
      features: [
        "自动化工作流",
        "多平台构建",
        "丰富的Action市场",
        "并行执行",
        "自定义运行器"
      ],
      badge: "开发者最爱"
    },
    {
      icon: <Bot className="h-12 w-12" />,
      title: "GitHub Copilot",
      description: "AI驱动的代码助手",
      features: [
        "智能代码补全",
        "多语言支持",
        "上下文感知",
        "代码解释",
        "安全建议"
      ],
      badge: "AI驱动"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "GitHub Pages",
      description: "免费的静态网站托管服务",
      features: [
        "免费托管",
        "自定义域名",
        "HTTPS支持",
        "Jekyll集成",
        "自动部署"
      ],
      badge: "免费服务"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "GitHub Security",
      description: "全方位的代码安全解决方案",
      features: [
        "漏洞扫描",
        "依赖检查",
        "代码分析",
        "安全警报",
        "合规报告"
      ],
      badge: "安全保障"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "GitHub Team",
      description: "团队协作和项目管理工具",
      features: [
        "团队管理",
        "项目看板",
        "里程碑跟踪",
        "代码审查",
        "讨论功能"
      ],
      badge: "团队协作"
    }
  ]

  const integrations = [
    { name: "VS Code", logo: "🔧" },
    { name: "IntelliJ IDEA", logo: "💡" },
    { name: "Slack", logo: "💬" },
    { name: "Jira", logo: "📋" },
    { name: "Docker", logo: "🐳" },
    { name: "AWS", logo: "☁️" },
    { name: "Azure", logo: "🌐" },
    { name: "Google Cloud", logo: "☁️" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
       {/* Hero区域 */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
              完整的开发工具链
            </Badge>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              GitHub <span className="text-blue-300">产品生态</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              从代码托管到AI辅助开发，GitHub提供完整的开发工具链，
              满足个人开发者到大型企业的各种需求。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  探索所有产品
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 核心产品区域 */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              核心产品
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              每个产品都经过精心设计，为开发者提供最佳的使用体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-600">
                        {product.icon}
                      </div>
                      <Badge variant={product.badge === "企业首选" ? "default" : product.badge === "开发者最爱" ? "secondary" : "outline"}>
                        {product.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant="outline">
                      了解更多
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 无缝集成区域 */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              无缝集成
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              与您喜爱的开发工具和服务完美集成，构建高效的开发工作流
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors">
                  <div className="text-4xl mb-2">{integration.logo}</div>
                  <div className="text-sm font-medium text-gray-700">{integration.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 功能对比区域 */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择GitHub？
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>易于使用</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  直观的界面设计，无论是新手还是专家都能快速上手
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>安全可靠</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  企业级安全保障，99.9%的服务可用性承诺
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>社区驱动</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  全球最大的开发者社区，丰富的开源项目和学习资源
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA区域 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            准备体验GitHub的强大功能？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            立即开始使用GitHub，体验世界级的开发工具和协作平台。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              免费试用
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white text-blue-600 border-white hover:bg-gray-100">
              查看定价
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product

