import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Github } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Github className="h-8 w-8" />
              <span className="text-xl font-bold">GitHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                首页
              </Link>
              <Link to="/product" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                产品
              </Link>
              <Link to="/pricing" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                定价
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                关于我们
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium">
                联系我们
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Button variant="outline">登录</Button>
              <Button>注册</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              首页
            </Link>
            <Link
              to="/product"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              产品
            </Link>
            <Link
              to="/pricing"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              定价
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              关于我们
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              联系我们
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 space-x-3">
                <Button variant="outline" className="w-full">登录</Button>
                <Button className="w-full">注册</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

