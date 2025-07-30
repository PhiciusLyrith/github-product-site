import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  MapPin, 
  Clock,
  Headphones,
  Users,
  Building
} from 'lucide-react'

/**
 * 联系我们页面组件
 * 提供多种联系方式、联系表单、办公地点信息和常见问题解答
 */
const Contact = () => {
  // 联系方式数据（移除了电话支持和在线客服）
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "邮件支持",
      description: "发送邮件给我们的支持团队",
      contact: "support@github.com",
      availability: "24/7 响应"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "技术支持",
      description: "专业技术问题咨询",
      contact: "tech@github.com",
      availability: "工作日响应"
    }
  ]

  // 办公地点数据
  const offices = [
    {
      city: "北京",
      address: "北京市朝阳区建国门外大街1号",
      phone: "+86 10-1234-5678",
      email: "beijing@github.com"
    },
    {
      city: "上海",
      address: "上海市浦东新区陆家嘴环路1000号",
      phone: "+86 21-1234-5678",
      email: "shanghai@github.com"
    },
    {
      city: "深圳",
      address: "深圳市南山区科技园南区高新南一道",
      phone: "+86 755-1234-5678",
      email: "shenzhen@github.com"
    }
  ]

  // 用户类型数据
  const supportTypes = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "个人用户",
      description: "个人开发者和小型项目支持"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "企业用户",
      description: "企业级支持和定制服务"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero区域 */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-700">
              联系我们
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              我们随时
              <span className="text-indigo-300"> 为您服务</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              无论您有任何问题、建议或需要帮助，
              我们的专业团队都会及时为您提供支持。
            </p>
          </div>
        </div>
      </section>

      {/* 联系方式区域 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              联系方式
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              选择最适合您的联系方式，我们会尽快回复
            </p>
          </div>
          
          {/* 调整网格布局以适应减少的联系方式 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-indigo-600 mx-auto mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900">{method.contact}</div>
                    <div className="text-sm text-gray-500 flex items-center justify-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {method.availability}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    立即联系
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 联系表单区域 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              发送消息
            </h2>
            <p className="text-xl text-gray-600">
              填写下面的表单，我们会在24小时内回复您
            </p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">联系表单</CardTitle>
              <CardDescription className="text-center">
                请详细描述您的问题或需求
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 基本信息输入区域 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">姓名 *</label>
                  <Input placeholder="请输入您的姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">邮箱 *</label>
                  <Input type="email" placeholder="请输入您的邮箱" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">公司/组织</label>
                  <Input placeholder="请输入公司或组织名称" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">电话</label>
                  <Input placeholder="请输入联系电话" />
                </div>
              </div>
              
              {/* 用户类型选择区域 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">用户类型</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {supportTypes.map((type, index) => (
                    <Card key={index} className="cursor-pointer hover:bg-gray-50 transition-colors">
                      <CardContent className="flex items-center space-x-3 p-4">
                        <input type="radio" name="userType" className="text-indigo-600" />
                        <div className="text-indigo-600">{type.icon}</div>
                        <div>
                          <div className="font-medium">{type.title}</div>
                          <div className="text-sm text-gray-500">{type.description}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* 问题描述区域 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">主题 *</label>
                <Input placeholder="请简要描述您的问题" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">详细描述 *</label>
                <Textarea 
                  placeholder="请详细描述您的问题、需求或建议..."
                  className="min-h-[120px]"
                />
              </div>
              
              {/* 同意条款复选框 */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="text-indigo-600" />
                <label className="text-sm text-gray-600">
                  我同意接收GitHub的产品更新和营销信息
                </label>
              </div>
              
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700" size="lg">
                发送消息
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 办公地点区域 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              办公地点
            </h2>
            <p className="text-xl text-gray-600">
              我们在全国主要城市设有办公室
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">地址</div>
                    <div className="text-gray-900">{office.address}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">电话</div>
                    <div className="text-gray-900">{office.phone}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">邮箱</div>
                    <div className="text-gray-900">{office.email}</div>
                  </div>
                  <Button variant="outline" className="w-full">
                    查看地图
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 常见问题区域 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              常见问题
            </h2>
            <p className="text-xl text-gray-600">
              查看常见问题解答，或许能快速解决您的疑问
            </p>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>如何获得技术支持？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  您可以通过邮件获得技术支持。企业用户享有优先支持服务。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>支持团队的工作时间是什么？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  我们的邮件支持24/7可用，技术支持在工作日响应。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>如何联系销售团队？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  您可以通过填写联系表单选择"企业用户"类型，我们的销售团队会主动联系您。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            还有其他问题？
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            我们的支持团队随时准备为您提供帮助。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3">
              立即联系
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-indigo-600">
              查看帮助文档
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
                <label className="text-sm font-medium">主题 *</label>
                <Input placeholder="请简要描述您的问题" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">详细描述 *</label>
                <Textarea 
                  placeholder="请详细描述您的问题、需求或建议..."
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="text-indigo-600" />
                <label className="text-sm text-gray-600">
                  我同意接收GitHub的产品更新和营销信息
                </label>
              </div>
              
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700" size="lg">
                发送消息
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              办公地点
            </h2>
            <p className="text-xl text-gray-600">
              我们在全国主要城市设有办公室
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">地址</div>
                    <div className="text-gray-900">{office.address}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">电话</div>
                    <div className="text-gray-900">{office.phone}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">邮箱</div>
                    <div className="text-gray-900">{office.email}</div>
                  </div>
                  <Button variant="outline" className="w-full">
                    查看地图
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              常见问题
            </h2>
            <p className="text-xl text-gray-600">
              查看常见问题解答，或许能快速解决您的疑问
            </p>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>如何获得技术支持？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  您可以通过邮件、电话或在线客服获得技术支持。企业用户享有优先支持服务。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>支持团队的工作时间是什么？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  我们的在线客服和邮件支持24/7可用。电话支持时间为工作日9:00-18:00。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>如何联系销售团队？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  您可以通过填写联系表单选择"企业用户"类型，或直接拨打销售热线与我们的销售团队联系。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            还有其他问题？
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            我们的支持团队随时准备为您提供帮助。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3">
              立即联系
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-indigo-600">
              查看帮助文档
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

