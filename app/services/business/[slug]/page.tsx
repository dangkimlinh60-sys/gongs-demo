"use client"

import { Header } from "@/components/header"
import { FloatingConsultButton } from "@/components/floating-consult-button"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { WeChatQRDialog } from "@/components/wechat-qr-dialog"
import { useParams } from "next/navigation"

const serviceDetails: Record<
  string,
  {
    title: string
    subtitle: string
    description: string
    features: string[]
    process: string[]
    materials: string[]
    timeframe: string
    price: string
  }
> = {
  "limited-company": {
    title: "有限公司注册",
    subtitle: "专业快速办理有限责任公司注册",
    description:
      "有限责任公司是最常见的企业类型，适合大多数创业者。我们提供一站式注册服务，从核名到领取营业执照，全程专业指导。整合企业设立登记、公章刻制、申领发票和税控设备等环节，实现企业开办一表填报、一窗通取。",
    features: [
      "股东责任有限，风险可控，个人资产与企业资产分离",
      "注册资本认缴制，降低创业门槛，无需实际出资",
      "企业信誉度高，便于融资和商业合作",
      "税收优惠政策多，可享受小微企业税收优惠",
      "适合长期发展，公司结构稳定可扩展",
      "一站式服务，5个工作日快速办结",
    ],
    process: [
      "企业名称核准（3-5个工作日，提供5个备选名称）",
      "准备并提交注册材料（股东身份证、公司章程等）",
      "工商签字确认（工商网点核实身份约1个工作日）",
      "领取营业执照（工商局审核通过后领取）",
      "公章刻制备案（公司公章、财务章、法人章等）",
      "银行开户及税务登记（完成企业基本账户开设）",
    ],
    materials: [
      "拟成立公司备用名称5个以上",
      "全体投资人身份证原件及复印件",
      "公司注册资本金额及各股东出资比例",
      "公司经营范围（主营业务及附带业务）",
      "公司注册地址证明（租赁合同或产权证明）",
      "法定代表人、监事任职文件及身份证明",
    ],
    timeframe: "整体办理周期：5-10个工作日",
    price: "¥1,999起",
  },
  "joint-stock": {
    title: "股份有限公司注册",
    subtitle: "适合大型企业和上市公司",
    description: "股份有限公司适合规模较大、需要融资的企业。我们提供专业的注册咨询和全程代办服务。股份公司具有资本划分为等额股份、股东以其认购股份为限承担责任的特点，是现代企业制度的典型代表。",
    features: [
      "股份可以自由转让，流动性强",
      "便于融资和上市，可发行股票债券",
      "公司治理结构完善，三会制度健全",
      "适合大规模经营，组织架构规范",
      "股东人数要求2-200人，可扩展性强",
      "企业形象好，商业信誉度高",
    ],
    process: [
      "发起人协议签订（明确各发起人权利义务）",
      "公司章程制定（股东大会、董事会、监事会规则）",
      "股份认购（发起人认购股份并出资）",
      "验资报告（会计师事务所出具验资证明）",
      "工商登记申请（提交全套注册材料）",
      "领取营业执照及后续手续办理",
    ],
    materials: [
      "全体发起人签署的公司章程",
      "发起人的主体资格证明或自然人身份证明",
      "董事、监事和经理的任职文件及身份证明",
      "法定代表人任职文件及身份证明",
      "验资报告（注册资本实缴部分）",
      "公司住所使用证明及经营场所租赁协议",
    ],
    timeframe: "整体办理周期：15-30个工作日",
    price: "¥5,999起",
  },
  "sole-proprietorship": {
    title: "个人独资企业注册",
    subtitle: "个人创业首选，税收优惠",
    description: "个人独资企业由一个自然人投资，适合小规模经营和个人创业。享受税收优惠政策，不需要缴纳企业所得税，只需缴纳个人所得税。投资人对企业债务承担无限责任，适合风险可控的行业。",
    features: [
      "注册简单快捷，手续简便",
      "税收优惠明显，核定征收政策",
      "经营灵活自由，无需股东会决议",
      "决策效率高，投资人独立决策",
      "适合个人创业，启动资金要求低",
      "利润分配灵活，无需经过股东会",
    ],
    process: [
      "企业名称核准（个人独资企业名称预先登记）",
      "提交申请材料（投资人身份证明、经营场所证明）",
      "工商部门审核（材料齐全当场受理）",
      "领取营业执照（审核通过后3个工作日）",
      "刻制印章（企业公章、财务章）",
      "税务登记及银行开户",
    ],
    materials: [
      "投资人身份证原件及复印件",
      "企业名称预先核准通知书",
      "投资人签署的个人独资企业设立申请书",
      "经营场所使用证明（房产证或租赁合同）",
      "从事法律规定须报经审批的业务需提交批准文件",
      "委托代理人证明及代理人身份证明",
    ],
    timeframe: "整体办理周期：3-7个工作日",
    price: "¥999起",
  },
  "branch-company": {
    title: "分公司注册",
    subtitle: "扩展业务，设立分支机构",
    description: "分公司是总公司的分支机构，不具有独立法人资格，不独立承担民事责任。适合企业扩展业务范围、异地经营。分公司的财务可以独立核算也可以由总公司统一核算，税务可合并申报。",
    features: [
      "无需注册资本，降低设立成本",
      "设立程序简单，审批快捷",
      "便于业务扩展，拓展市场",
      "统一管理方便，财务可合并核算",
      "税务可合并申报，降低税务成本",
      "便于调配资源，提高运营效率",
    ],
    process: [
      "总公司决议（董事会或股东会决议设立分公司）",
      "名称预先核准（分公司名称需包含总公司名称）",
      "准备设立材料（总公司证照、负责人任命书等）",
      "提交设立申请（工商部门受理登记）",
      "领取营业执照（分公司营业执照）",
      "刻制印章及后续手续办理",
    ],
    materials: [
      "总公司营业执照副本复印件（加盖公章）",
      "总公司章程复印件（加盖公章）",
      "总公司股东会或董事会设立分公司的决议",
      "分公司负责人任职文件及身份证明",
      "分公司经营场所使用证明",
      "总公司出具的分公司负责人的任命书",
    ],
    timeframe: "整体办理周期：5-10个工作日",
    price: "¥1,499起",
  },
  subsidiary: {
    title: "子公司注册",
    subtitle: "独立法人，独立核算",
    description: "子公司具有独立法人资格，独立承担民事责任，独立核算、独立纳税。适合集团化运营、业务板块独立的企业。子公司可以保护母公司资产，分散经营风险，同时便于专业化管理。",
    features: [
      "独立法人资格，独立承担法律责任",
      "独立财务核算，账目清晰",
      "责任独立，保护母公司资产安全",
      "便于集团管理，专业化运营",
      "税务独立申报，灵活税务筹划",
      "可独立融资，拓展融资渠道",
    ],
    process: [
      "母公司董事会或股东会决议",
      "子公司名称核准（可不包含母公司名称）",
      "注册资本到位（母公司出资或其他方式）",
      "准备并提交注册材料",
      "领取子公司营业执照",
      "办理税务登记、银行开户等后续手续",
    ],
    materials: [
      "母公司营业执照副本及公司章程",
      "母公司股东会或董事会投资设立子公司的决议",
      "子公司章程（全体股东签署）",
      "子公司法定代表人、董事、监事任职文件",
      "注册资本到位证明或出资承诺书",
      "子公司经营场所使用证明",
    ],
    timeframe: "整体办理周期：10-15个工作日",
    price: "¥2,499起",
  },
  "foreign-company": {
    title: "外资公司注册",
    subtitle: "外商投资企业专业服务",
    description: "为外国投资者在中国设立公司提供专业服务，熟悉外资审批流程。外资企业可享受国家对外商投资的优惠政策，便于开展跨境业务。我们提供从商务备案、外汇登记到工商注册的全程代办服务。",
    features: [
      "享受外资优惠政策，税收减免",
      "国际化运营，提升企业形象",
      "便于跨境业务，资金进出便利",
      "品牌国际化，增强市场竞争力",
      "专业外资服务，熟悉审批流程",
      "外汇管理便利，资本金结汇灵活",
    ],
    process: [
      "外资企业名称核准（中英文名称）",
      "商务部门备案（外商投资信息报告）",
      "工商登记注册（提交外资企业设立材料）",
      "领取营业执照（外资企业营业执照）",
      "外汇登记（外汇管理局资本金账户开设）",
      "税务登记及后续手续办理",
    ],
    materials: [
      "外国投资者的主体资格证明或身份证明",
      "外国投资者的资信证明（银行出具）",
      "外资企业章程（中英文对照）",
      "法定代表人、董事、监事任职文件及身份证明",
      "经营场所使用证明（租赁合同需外事办备案）",
      "外商投资企业设立申请书",
    ],
    timeframe: "整体办理周期：20-30个工作日",
    price: "¥8,999起",
  },
  "joint-venture": {
    title: "中外合资公司注册",
    subtitle: "中外合作，优势互补",
    description: "中外合资企业结合中外双方优势，适合国际合作项目。合资企业可以引进外方的先进技术、管理经验和国际市场渠道，同时利用中方的本地资源和市场优势，实现互利共赢。",
    features: [
      "中外优势互补，资源整合",
      "享受优惠政策，税收支持",
      "便于技术引进，国际化管理",
      "市场资源共享，拓展双边市场",
      "国际化管理团队，提升管理水平",
      "风险共担，投资安全性高",
    ],
    process: [
      "合资协议签订（中外双方达成投资协议）",
      "外资审批（商务部门审批合资项目）",
      "公司章程制定（中英文合资公司章程）",
      "工商登记（提交合资企业设立材料）",
      "外汇登记（外汇管理部门登记）",
      "领取执照及税务登记等后续手续",
    ],
    materials: [
      "中外投资各方的营业执照或身份证明",
      "合资双方签订的合资协议书",
      "合资企业可行性研究报告",
      "合资企业章程（中英文）",
      "董事会成员名单及董事任职文件",
      "法定代表人、总经理任职文件及身份证明",
      "注册资本出资承诺书及验资证明",
      "经营场所使用证明",
    ],
    timeframe: "整体办理周期：30-45个工作日",
    price: "¥9,999起",
  },
  "address-verification": {
    title: "注册地址/免费核名",
    subtitle: "提供合法注册地址，免费核名服务",
    description: "为没有注册地址的企业提供合法注册地址，同时提供免费公司名称核准服务。我们的注册地址均为工商局认可的商务地址，可用于工商注册、银行开户、税务登记等，解决创业者的地址难题。",
    features: [
      "合法注册地址，工商认可",
      "免费核名服务，提供5个备选名称",
      "快速办理，当天提交核名申请",
      "价格优惠，年费制收费",
      "一站式服务，地址+核名+注册全包",
      "可用于银行开户和税务登记",
    ],
    process: [
      "咨询地址需求（了解企业类型和行业）",
      "提交核名申请（提供5个公司备选名称）",
      "名称审核（工商局审核名称3-5个工作日）",
      "地址确认（选择合适的注册地址）",
      "签订地址协议（签订地址使用服务协议）",
      "提供地址证明（出具地址使用证明文件）",
    ],
    materials: [
      "企业拟用名称5个（按优先顺序排列）",
      "投资人身份证复印件",
      "企业经营范围（初步确定）",
      "注册资本金额",
      "地址使用期限要求",
    ],
    timeframe: "核名1-3个工作日，地址当天可提供",
    price: "¥500起/年",
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [showWeChatDialog, setShowWeChatDialog] = useState(false)
  const service = serviceDetails[slug]

  if (!service) {
    return <div>服务未找到</div>
  }

  const handleConsultClick = () => {
    setShowWeChatDialog(true)
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:13728777024'
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="inline-flex items-center text-slate-700 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-white py-10 md:py-12 border-b border-slate-200">
          {/* 动画背景 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-glow-pulse" />

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-black text-blue-900 mb-2">{service.title}</h1>
            <p className="text-lg md:text-xl text-slate-600 mb-4">{service.subtitle}</p>
            <div className="flex items-center gap-6">
              <span className="text-2xl font-black text-blue-700">{service.price}</span>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-slate-900 rounded-md px-4" onClick={handleConsultClick}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Phone className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">立即咨询</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-white relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px),linear-gradient(to_bottom,#4f46e508_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-black text-slate-900 mb-4">服务介绍</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{service.description}</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-black text-slate-900 mb-12 bg-gradient-to-r from-purple-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">服务优势</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="group relative  rounded-2xl p-6 border border-blue-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 tech-border">
                  <div className="absolute inset-0" />
                  <div className="flex items-start gap-3 relative z-10">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d408_1px,transparent_1px),linear-gradient(to_bottom,#06b6d408_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-black text-slate-900 mb-12 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">办理流程</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-slate-900 rounded-2xl w-14 h-14 flex items-center justify-center text-2xl font-black mb-4 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/60 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {index + 1}
                    </div>
                    <div className="absolute inset-0" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all">{step}</h3>
                  <div className="h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Required */}
        <section className="py-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-black text-slate-900 mb-12 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">所需材料</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.materials.map((material, index) => (
                <div key={index} className="flex items-start gap-3  rounded-2xl p-5 border border-blue-200 hover:border-cyan-500/40 transition-all duration-300 group">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{material}</span>
                </div>
              ))}
            </div>
            <div className="mt-10  border-l-4 border-cyan-500 p-8 rounded-2xl shadow-2xl shadow-blue-200/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-xl mb-1">办理时间</h3>
                  <p className="text-cyan-200 text-lg">{service.timeframe}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 bg-white border-t border-slate-200">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-glow-pulse" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">准备好开始了吗？</h2>
            <p className="text-lg mb-6 text-slate-600">专业团队为您提供一对一服务</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="relative bg-white text-purple-600 hover:bg-purple-50 shadow-2xl shadow-white/20 hover:scale-105 transition-all duration-300 rounded-xl px-8 py-6 text-lg font-bold overflow-hidden group" onClick={handlePhoneClick}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Phone className="w-6 h-6 mr-2 relative z-10" />
                <span className="relative z-10">电话咨询：13728777024</span>
              </Button>
              <Button
                size="lg"
                className="relative  border-2 border-white text-slate-900 hover:bg-white hover:text-purple-600 rounded-xl px-8 py-6 text-lg font-bold transition-all duration-300 hover:scale-105 overflow-hidden group"
                onClick={handleConsultClick}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">在线咨询</span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <WeChatQRDialog open={showWeChatDialog} onOpenChange={setShowWeChatDialog} />
      <FloatingConsultButton />
    </div>
  )
}
