import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import AnimatedCard from '../components/AnimatedCard'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'
import { Check, Star, HelpCircle } from 'lucide-react'

/**
 * 定价页面组件
 * 展示不同的定价计划，支持月付和年付切换
 */
const Pricing = () => {
  // 控制月付/年付切换的状态
  const [isYearly, setIsYearly] = useState(false)

  // 定价计划数据
  const plans = [
    {
      name: "免费版",
      monthlyPrice: "¥0",
      yearlyPrice: "¥0",
      period: "永久免费",
      description: "适合个人开发者和小型项目",
      features: [
        "无限公开仓库",
        "3个私有仓库",
        "基础协作功能",
        "社区支持",
        "2GB存储空间",
        "GitHub Pages"
      ],
      limitations: [
        "有限的私有仓库",
        "基础功能",
        "无企业级支持"
      ],
      cta: "开始使用",
      popular: false
    },
    {
      name: "专业版",
      monthlyPrice: "¥49",
      yearlyPrice: "¥490", // 年付10个月价格
      period: isYearly ? "每年" : "每月",
      description: "适合专业开发者和小团队",
      features: [
        "无限私有仓库",
        "高级协作功能",
        "代码审查工具",
        "项目管理",
        "10GB存储空间",
        "优先支持",
        "GitHub Actions (3000分钟/月)",
        "GitHub Packages"
      ],
      limitations: [],
      cta: "立即升级",
      popular: true
    },
    {
      name: "团队版",
      monthlyPrice: "¥199",
      yearlyPrice: "¥1990", // 年付10个月价格
      period: isYearly ? "每年/5用户" : "每月/5用户",
      description: "适合成长中的团队和组织",
      features: [
        "专业版所有功能",
        "团队管理工具",
        "分支保护规则",
        "代码所有者",
        "50GB存储空间",
        "GitHub Actions (10000分钟/月)",
        "高级安全功能",
        "团队洞察报告"
      ],
      limitations: [],
      cta: "联系销售",
      popular: false
    },
    {
      name: "企业版",
      monthlyPrice: "定制",
      yearlyPrice: "定制",
      period: "联系我们",
      description: "适合大型企业和组织",
      features: [
        "团队版所有功能",
        "SAML单点登录",
        "高级审计日志",
        "企业级支持",
        "无限存储空间",
        "GitHub Actions (50000分钟/月)",
        "高级安全和合规",
        "专属客户经理",
        "SLA保障"
      ],
      limitations: [],
      cta: "联系销售",
      popular: false
    }
  ]

  // 增值服务数据
  const addOns = [
    {
      name: "GitHub Copilot",
      price: "¥69/月",
      description: "AI驱动的代码助手，提升开发效率"
    },
    {
      name: "GitHub Advanced Security",
      price: "¥149/月",
      description: "高级安全扫描和漏洞检测"
    },
    {
      name: "额外存储空间",
      price: "¥5/GB/月",
      description: "扩展您的存储容量"
    }
  ]

  // 常见问题数据
  const faqs = [
    {
      question: "可以随时取消订阅吗？",
      answer: "是的，您可以随时取消订阅。取消后，您的账户将在当前计费周期结束时降级到免费版。"
    },
    {
      question: "是否支持年付优惠？",
      answer: "是的，选择年付可享受2个月免费，相当于83折优惠。"
    },
    {
      question: "企业版包含哪些额外服务？",
      answer: "企业版包含专属客户经理、SLA保障、高级安全功能、审计日志等企业级服务。"
    },
    {
      question: "如何升级或降级计划？",
      answer: "您可以在账户设置中随时升级或降级计划，变更将在下个计费周期生效。"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero区域 */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-purple-600 hover:bg-purple-700">
              灵活的定价方案
            </Badge>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              选择适合您的 <span className="text-purple-300">定价计划</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              从免费版到企业版，GitHub为不同规模的团队和项目
              提供灵活的定价选择。
            </motion.p>
            
            {/* 月付年付切换 */}
            <motion.div 
              className="flex items-center justify-center space-x-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className={`text-lg ${!isYearly ? 'text-white font-semibold' : 'text-purple-200'}`}>
                月付
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-purple-600"
              />
              <span className={`text-lg ${isYearly ? 'text-white font-semibold' : 'text-purple-200'}`}>
                年付 <span className="text-purple-300">(省17%)</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 定价卡片区域 */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className={`relative h-full ${plan.popular ? 'border-2 border-blue-500 shadow-xl' : 'hover:shadow-lg'} transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 hover:bg-blue-700 px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        最受欢迎
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">
                        ¥{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500">
                        {plan.name === "企业版" ? "" : isYearly ? "/年" : "/每月"}
                      </span>
                    </div>
                    <CardDescription className="mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.buttonText}
                    </Button>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 增值服务区域 */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              增值服务
            </h2>
            <p className="text-xl text-gray-600">
              通过这些可选的增值服务，进一步提升您的开发体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-blue-600">
                      ¥{addon.price}/月
                    </div>
                    <CardDescription>
                      {addon.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      了解更多
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      最受欢迎
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.period !== "联系我们" && plan.period !== "永久免费" && (
                      <span className="text-gray-500 ml-1">/{plan.period}</span>
                    )}
                    {plan.period === "永久免费" && (
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    )}
                    {plan.period === "联系我们" && (
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="mt-4">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center text-sm text-gray-500">
                        <X className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                        <span>{limitation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              增值服务
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              通过这些可选的增值服务，进一步提升您的开发体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{addon.name}</CardTitle>
                    <Badge variant="outline">{addon.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {addon.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    了解更多
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              常见问题
            </h2>
            <p className="text-xl text-gray-600">
              关于定价和计划的常见问题解答
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            还有疑问？
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            我们的销售团队随时为您提供个性化的方案建议和支持。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
              联系销售
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white text-purple-600 border-white hover:bg-gray-100">
              预约演示
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

