import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin, Mail, MessageSquare } from 'lucide-react'

/**
 * 页脚组件
 * 包含公司信息、产品链接、公司链接、社交媒体链接和反馈按钮
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息区域 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Github className="h-8 w-8" />
              <span className="text-xl font-bold">GitHub</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              全球领先的开发者协作平台，为数百万开发者提供代码托管、版本控制和团队协作服务。
            </p>
            {/* 社交媒体链接 */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 产品链接区域 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-gray-300 hover:text-white transition-colors">
                  GitHub Enterprise
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-300 hover:text-white transition-colors">
                  GitHub Actions
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-300 hover:text-white transition-colors">
                  GitHub Pages
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-300 hover:text-white transition-colors">
                  GitHub Copilot
                </Link>
              </li>
            </ul>
          </div>

          {/* 公司链接区域 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">公司</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  招聘信息
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  新闻中心
                </a>
              </li>
              {/* 新增反馈按钮 */}
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                  onClick={(e) => {
                    e.preventDefault()
                    // 这里可以添加反馈功能的逻辑
                    alert('感谢您的反馈！我们会认真考虑您的建议。')
                  }}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>意见反馈</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 GitHub, Inc. 保留所有权利。
            </p>
            {/* 法律链接 */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                服务条款
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookie 政策
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

