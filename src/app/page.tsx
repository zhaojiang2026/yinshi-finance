"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("感谢您的咨询，我们会尽快与您联系！");
    setFormData({ name: "", phone: "", company: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      title: "日常财税服务",
      items: [
        "代理记账",
        "账务处理",
        "凭证整理",
        "报表编制",
        "纳税申报",
        "发票管理",
        "税务汇算清缴",
        "税务异常处理",
        "出口退税协助",
        "个人所得税申报",
        "社保公积金对接",
      ],
    },
    {
      title: "税务服务",
      items: [
        "税务咨询",
        "税收优惠政策解读",
        "纳税风险评估",
        "税务合规指导",
        "常年税务顾问",
        "税务筹划建议",
        "企业税务规范梳理",
      ],
    },
    {
      title: "工商及企业管理服务",
      items: [
        "公司注册、变更、注销",
        "企业年报公示",
        "经营异常解除",
        "工商事项代办",
        "企业管理咨询",
        "财务制度搭建",
        "内控优化",
      ],
    },
    {
      title: "财务咨询服务",
      items: [
        "财务数据分析",
        "成本管控建议",
        "乱账整理",
        "财务流程规范",
        "企业财务顾问",
        "经营决策支持",
      ],
    },
  ];

  const advantages = [
    {
      title: "资质正规，执业规范",
      description: "具备官方核准代理记账资质，合法合规开展业务，流程透明，服务有保障。",
    },
    {
      title: "专业团队，经验丰富",
      description: "由专业财税人员组成服务团队，熟悉政策、精通实务，账务严谨、报税及时，严控风险。",
    },
    {
      title: "本地深耕，响应高效",
      description: "扎根常熟，熟悉本地政策与办事流程，沟通便捷、上门服务、快速响应。",
    },
    {
      title: "一站式服务，省心高效",
      description: "覆盖财税、工商、管理等全链条服务，一揽子解决企业各类问题，降低企业运营成本。",
    },
    {
      title: "诚信可靠，长期陪伴",
      description: "坚持诚信合作、透明收费，无隐形消费，以长期服务思维陪伴企业成长。",
    },
  ];

  const coreValues = ["诚信", "专业", "务实", "共赢"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/ys-logo.png"
                alt="殷实财务"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="ml-3 text-xl font-bold text-blue-900">
                殷实财务
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-900 font-medium hover:text-blue-700">
                首页
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-blue-700">
                服务项目
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-700">
                关于我们
              </Link>
              <Link href="#advantages" className="text-gray-600 hover:text-blue-700">
                选择理由
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-700">
                联系我们
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
            >
              立即咨询
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 51, 102, 0.75), rgba(0, 51, 102, 0.85)), url('/hero-bg.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            殷实财务 | 专业财税服务，陪伴企业稳健成长
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            专注代理记账 | 税务服务 | 财税咨询 | 工商代办 | 企业管理服务
          </p>
          <p className="text-lg mb-8 opacity-80">
            为中小微企业提供一站式、规范化、全周期财税解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              立即咨询
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">关于我们</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              殷实财务：专业财税，让经营更殷实
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">常熟殷实财务服务有限公司</h3>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                常熟殷实财务服务有限公司成立于2019年，是经财政部门核准、具备正规代理记账资质的专业财税服务机构。公司立足常熟，服务本地及周边企业，以专业的财税团队、规范的服务流程、严谨的执业态度，为各类企业提供高效、合规、可靠的一站式财税支持。
              </p>
              <p>
                自成立以来，殷实财务始终坚持诚信为本、专业立身、服务至上的经营理念，专注于中小微企业财务与税务领域，不断优化服务体系、提升专业能力。我们熟悉地方财税政策、工商办事流程，能够为客户提供从基础记账报税到财税咨询、工商代办、企业管理的全方位服务，助力企业规范经营、降低风险、稳步发展。
              </p>
              <p className="font-medium text-blue-800">
                殷实财务以专业创造价值，以信任赢得长久合作，致力于成为企业身边最可靠的财税伙伴。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">专业财税服务</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              为中小微企业提供全方位、一站式财税解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center text-lg font-bold mr-3">
                    {index + 1}
                  </span>
                  {service.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-500 hover:text-blue-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">为什么选择殷实财务</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              资质正规 | 专业团队 | 本地深耕 | 一站式服务 | 诚信可靠
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-sm text-blue-200">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">企业文化</h2>
            <p className="text-gray-600">诚信为本，专业致远</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center text-white text-2xl font-bold hover:scale-110 transition-transform"
              >
                {value}
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-4">
              殷实财务始终以诚信为基石，以专业为核心，以务实为态度，以共赢为目标。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              我们坚持用心服务每一位客户，用专业解决每一个问题，用责任守护每一份信任。
            </p>
            <p className="text-xl font-semibold text-blue-900">
              让企业经营更简单，让财税管理更安心。
            </p>
          </div>
        </div>
      </section>

      {/* Brand Slogan Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            殷实财务：专业财税，让经营更殷实
          </p>
          <p className="text-lg text-blue-200">
            诚信为本，专业致远：殷实相伴，企业稳健
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">联系我们</h2>
            <p className="text-gray-600">选择殷实，选择安心</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">联系方式</h3>
              <div className="space-y-4">
                <p className="flex items-start">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    📍
                  </span>
                  <span>常熟市（具体地址）</span>
                </p>
                <p className="flex items-start">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    📞
                  </span>
                  <span>服务热线：400-XXX-XXXX</span>
                </p>
                <p className="flex items-start">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    ✉️
                  </span>
                  <span>邮箱：contact@yinshicaiwu.com</span>
                </p>
                <p className="flex items-start">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    🕐
                  </span>
                  <span>服务时间：周一至周五 9:00-18:00</span>
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-blue-200 text-sm">
                  账实清晰，业兴财旺
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">在线咨询</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    姓名
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    电话
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入您的联系电话"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    公司名称
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入您的公司名称（选填）"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    咨询业务
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">请选择咨询业务</option>
                    <option value="代理记账">代理记账</option>
                    <option value="税务服务">税务服务</option>
                    <option value="工商服务">工商服务</option>
                    <option value="财税咨询">财税咨询</option>
                    <option value="其他">其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    留言
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入您的留言（选填）"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
                >
                  提交咨询
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/ys-logo.png"
                  alt="殷实财务"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="ml-2 text-lg font-bold">殷实财务</span>
              </div>
              <p className="text-gray-400 text-sm">
                专业财税，让经营更殷实
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">服务项目</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>代理记账</li>
                <li>税务服务</li>
                <li>工商代办</li>
                <li>财税咨询</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">关于我们</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>公司简介</li>
                <li>企业文化</li>
                <li>专业团队</li>
                <li>加入我们</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>电话：400-XXX-XXXX</li>
                <li>邮箱：contact@yinshicaiwu.com</li>
                <li>地址：常熟市</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 常熟殷实财务服务有限公司 版权所有 | 
              <span className="text-blue-400"> 选择殷实，选择安心</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
