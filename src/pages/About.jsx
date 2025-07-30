import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AnimatedCard from '../components/AnimatedCard'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Users, 
  Globe, 
  Lightbulb,
  Target,
  Award,
  Calendar,
  MapPin,
  Rocket,
  Shield
} from 'lucide-react'

const About = () => {
  const stats = [
    { number: "2008", label: "成立年份" },
    { number: "100M+", label: "全球用户" },
    { number: "330M+", label: "代码仓库" },
    { number: "4M+", label: "企业客户" }
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "开源精神",
      description: "我们相信开源的力量，致力于推动全球开发者社区的发展和创新。"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "协作共赢",
      description: "通过协作，我们能够创造出比个人努力更伟大的成果。"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "安全可信",
      description: "保护用户的代码和数据安全是我们的首要责任。"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "持续创新",
      description: "我们不断探索新技术，为开发者提供更好的工具和体验。"
    }
  ]

  const team = [
    {
      name: "张伟",
      role: "首席执行官",
      bio: "拥有15年软件开发经验，致力于推动开发者工具的创新。",
      image: "👨‍💼"
    },
    {
      name: "李娜",
      role: "首席技术官",
      bio: "前Google工程师，专注于大规模分布式系统和云计算。",
      image: "👩‍💻"
    },
    {
      name: "王强",
      role: "产品副总裁",
      bio: "产品设计专家，致力于创造直观易用的开发者体验。",
      image: "👨‍🎨"
    },
    {
      name: "陈美",
      role: "工程副总裁",
      bio: "技术架构师，负责GitHub平台的技术架构和工程团队。",
      image: "👩‍🔬"
    }
  ]

  const milestones = [
    {
      year: "2008",
      title: "GitHub成立",
      description: "在旧金山成立，开始为开发者提供Git托管服务"
    },
    {
      year: "2012",
      title: "100万用户",
      description: "用户数突破100万，成为全球最大的代码托管平台"
    },
    {
      year: "2018",
      title: "微软收购",
      description: "被微软以75亿美元收购，获得更强大的资源支持"
    },
    {
      year: "2021",
      title: "GitHub Copilot",
      description: "推出AI代码助手，开启AI辅助编程新时代"
    },
    {
      year: "2024",
      title: "1亿用户",
      description: "全球用户数突破1亿，服务全球开发者社区"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero区域 */}
      <section className="bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">
              关于我们
            </Badge>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              让开发者 <span className="text-green-300">改变世界</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              GitHub致力于为全球开发者提供最好的协作平台，
              让每个人都能通过代码创造美好的未来。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 统计数据区域 */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 使命愿景区域 */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
                我们的使命
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                构建更好的软件，共同创造未来
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                GitHub的使命是为全球开发者提供最好的平台，让他们能够协作构建软件，
                解决世界上最重要的问题。我们相信，通过开源和协作，
                我们能够加速创新，让技术惠及每一个人。
              </p>
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">愿景</h3>
                  <p className="text-gray-600">成为全球开发者首选的协作平台</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <Rocket className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">推动创新</h3>
              <p className="text-blue-100">
                我们不仅仅是一个代码托管平台，更是创新的催化剂。
                通过提供强大的工具和服务，我们帮助开发者将想法变为现实，
                推动整个软件行业的发展。
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 价值观区域 */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我们的价值观
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              这些核心价值观指导着我们的每一个决策和行动
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-green-600 mx-auto mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 发展历程区域 */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              发展历程
            </h2>
            <p className="text-xl text-gray-600">
              见证GitHub从初创公司到全球平台的发展之路
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-600">{milestone.year}</Badge>
                          <Award className="h-5 w-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 团队介绍区域 */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              领导团队
            </h2>
            <p className="text-xl text-gray-600">
              经验丰富的领导团队，致力于推动GitHub的发展
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA区域 */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            加入我们的使命
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            无论您是开发者、企业还是开源项目维护者，
            都欢迎加入GitHub社区，共同构建更好的软件。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
              开始使用GitHub
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white text-green-600 border-white hover:bg-gray-100">
              查看招聘信息
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

