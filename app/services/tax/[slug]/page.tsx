"use client"

import { Header } from "@/components/header"
import { FloatingConsultButton } from "@/components/floating-consult-button"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { WeChatQRDialog } from "@/components/wechat-qr-dialog"
import { useParams } from "next/navigation"

const serviceDetails: Record<
  string,
  {
    title: string
    subtitle: string
    description: string
    features: string[]
    included: string[]
    materials: string[]
    timeframe: string
    price: string
  }
> = {
  "general-taxpayer": {
    title: "一般纳税人代理记账",
    subtitle: "专业财税服务，让您专注业务发展",
    description: "为一般纳税人企业提供专业的代理记账服务，包括账务处理、税务申报、财务报表编制等全方位服务。一般纳税人涉及增值税进项发票的认证和抵扣，账务处理标准高，需要专业会计团队。我们配备资深会计师，确保账务清晰、申报准确，帮助企业规避税务风险。",
    features: [
      "专业会计团队服务，注册会计师把关",
      "实时账务处理，当月账务当月清",
      "税务筹划建议，合理降低税负",
      "财务报表分析，提供经营决策支持",
      "税务风险预警，及时发现问题",
      "每月报税，增值税、企业所得税申报",
    ],
    included: [
      "每月账务处理（整理原始凭证、编制记账凭证）",
      "增值税申报（进项发票认证、销项发票开具）",
      "企业所得税申报（季度预缴、年度汇算）",
      "财务报表编制（资产负债表、利润表、现金流量表）",
      "税务咨询服务（财税政策解读、税务筹划）",
      "工商年报公示（企业年度报告填报）",
      "账本装订（年度账本整理装订）",
      "税务风险提示（及时告知税务异常）",
    ],
    materials: [
      "企业营业执照副本复印件",
      "法人及股东身份证复印件",
      "公司章程复印件",
      "每月银行对账单及回单",
      "每月进项发票和销项发票",
      "员工工资表及社保缴纳明细",
      "费用报销单据（差旅费、办公费等）",
      "一般纳税人资格认定书",
    ],
    timeframe: "签约后即可开始服务，每月1-15日完成报税",
    price: "¥500/月起",
  },
  "small-scale": {
    title: "小规模代理记账",
    subtitle: "小企业财税管家",
    description: "专为小规模纳税人设计的代理记账服务，价格实惠，服务专业。小规模纳税人按季度报税，账务相对简单，但同样需要规范处理。我们提供专业的记账报税服务，确保企业财务合规，让创业者专注业务发展，无后顾之忧。",
    features: [
      "价格实惠，适合小微企业",
      "服务专业，经验丰富",
      "响应及时，一对一服务",
      "账务清晰，便于查账",
      "合规申报，避免罚款",
      "季度报税，减少申报频率",
    ],
    included: [
      "每月账务处理（凭证录入、账簿登记）",
      "增值税申报（按季度申报）",
      "个人所得税申报（代扣代缴）",
      "财务报表编制（资产负债表、利润表）",
      "税务咨询服务（政策解答）",
      "工商年报（年度报告公示）",
      "发票管理（发票领用、开具指导）",
      "年度企业所得税汇算清缴",
    ],
    materials: [
      "营业执照副本及税务登记证",
      "法人身份证复印件",
      "银行开户许可证及对账单",
      "每月收入发票（销项发票）",
      "每月费用票据（进项发票、收据）",
      "员工工资明细（如有员工）",
      "社保公积金缴纳凭证",
    ],
    timeframe: "签约后即可服务，每季度1-15日报税",
    price: "¥200/月起",
  },
  "tax-verification": {
    title: "税务核定",
    subtitle: "合理核定税种税率",
    description: "协助企业进行税务核定，确保税种税率合理合规。新注册企业需要进行税务核定，确定适用的税种、税目和征收方式。我们熟悉税务流程，协助企业与税务机关沟通，争取最优惠的核定结果，为企业合理节税。",
    features: [
      "税种核定（增值税、企业所得税等）",
      "税率确认（一般纳税人或小规模）",
      "政策咨询（最新税收优惠政策）",
      "合规建议（税务风险提示）",
      "快速办理（3-5个工作日）",
      "全程代办（无需企业跑腿）",
    ],
    included: [
      "税种核定申请（提交核定申请材料）",
      "资料准备（营业执照、章程等）",
      "税务沟通（与税务专管员对接）",
      "核定结果跟进（及时获取核定通知书）",
      "税务登记证领取",
      "发票种类核定",
    ],
    materials: [
      "营业执照副本原件及复印件",
      "法人身份证原件及复印件",
      "公司章程复印件",
      "办公场所租赁合同或产权证明",
      "公司公章、法人章、财务章",
      "银行开户许可证",
      "会计人员身份证及会计证",
    ],
    timeframe: "提交资料后3-5个工作日完成核定",
    price: "¥800起",
  },
  "taxpayer-application": {
    title: "一般纳税人申请",
    subtitle: "升级为一般纳税人",
    description: "协助小规模纳税人升级为一般纳税人，享受更多税收优惠。当企业年销售额达到500万元或客户要求开具增值税专用发票时，需要申请一般纳税人资格。我们提供专业评估，协助企业顺利完成资格认定，提升企业形象。",
    features: [
      "资格评估（判断是否符合申请条件）",
      "材料准备（整理申请所需资料）",
      "申请代办（全程代理申请流程）",
      "全程跟进（实时反馈办理进度）",
      "成功率高（经验丰富，熟悉流程）",
      "后续辅导（一般纳税人账务处理培训）",
    ],
    included: [
      "资格审核（评估企业是否符合条件）",
      "申请材料准备（营业执照、财务报表等）",
      "税务局沟通（与专管员对接）",
      "认定跟进（及时获取认定结果）",
      "税控设备办理",
      "增值税发票领用",
    ],
    materials: [
      "营业执照副本复印件",
      "税务登记证副本复印件",
      "法人身份证复印件",
      "近期财务报表（资产负债表、利润表）",
      "银行开户许可证复印件",
      "办公场所产权证明或租赁合同",
      "公司章程复印件",
      "一般纳税人申请表",
    ],
    timeframe: "资料齐全后10-15个工作日",
    price: "¥1,500起",
  },
  "annual-inspection": {
    title: "年检服务",
    subtitle: "企业年度检查代办",
    description: "代办企业工商年检、税务年检等各类年检服务。企业每年需要进行工商年报公示、税务年度汇算清缴等年检工作。我们提供专业的年检代办服务，及时提醒企业年检时间，避免因逾期而产生罚款，确保企业正常经营。",
    features: [
      "工商年检（企业年度报告公示）",
      "税务年检（企业所得税汇算清缴）",
      "社保年检（社保基数申报）",
      "及时提醒（提前通知年检时间）",
      "避免罚款（按时完成年检）",
      "一站式服务（所有年检项目代办）",
    ],
    included: [
      "年检材料准备（财务报表、年度报告）",
      "网上申报（工商年报网上公示）",
      "现场办理（税务年度汇算清缴）",
      "结果跟进（及时获取年检结果）",
      "异常处理（解决年检中的问题）",
      "年检完成证明",
    ],
    materials: [
      "营业执照副本",
      "年度财务报表（资产负债表、利润表）",
      "纳税申报表（全年申报记录）",
      "社保缴纳证明",
      "员工花名册",
      "办公场所证明",
      "企业联系方式",
    ],
    timeframe: "工商年报每年1-6月，税务汇算次年1-5月",
    price: "¥500起",
  },
  "custom-finance": {
    title: "定制财务服务",
    subtitle: "个性化财务解决方案",
    description: "根据企业实际需求，提供定制化的财务管理服务。每个企业的财务需求不同，我们提供灵活的定制服务，包括财务顾问、财务诊断、内部控制建设、成本管理、预算管理等，帮助企业建立健全的财务管理体系。",
    features: [
      "个性化方案（根据企业需求定制）",
      "灵活服务（按需选择服务项目）",
      "专业团队（资深财务专家）",
      "长期合作（建立稳定合作关系）",
      "优质服务（一对一专属服务）",
      "持续优化（定期评估改进）",
    ],
    included: [
      "财务诊断（分析企业财务状况）",
      "方案设计（制定财务管理方案）",
      "实施指导（辅导方案落地执行）",
      "持续优化（定期评估和调整）",
      "财务培训（提升企业财务管理能力）",
      "专家咨询（提供专业建议）",
    ],
    materials: [
      "企业基本信息（营业执照、章程）",
      "历史财务数据（近3年财务报表）",
      "业务流程说明",
      "组织架构图",
      "现有财务制度",
      "企业发展规划",
      "特殊需求说明",
    ],
    timeframe: "根据项目复杂程度确定，一般1-3个月",
    price: "面议",
  },
  "old-accounts": {
    title: "旧账整理",
    subtitle: "清理历史账务问题",
    description: "专业整理企业历史账务，解决账务混乱问题。企业因各种原因可能存在账务混乱、凭证缺失、账实不符等问题。我们提供专业的旧账整理服务，重新梳理企业账务，规范财务核算，为企业提供清晰准确的财务信息。",
    features: [
      "账务清理（梳理历史账务）",
      "凭证整理（补充缺失凭证）",
      "报表重编（重新编制财务报表）",
      "问题解决（处理账务疑难问题）",
      "合规调整（按会计准则调整）",
      "税务风险排查（发现并解决税务问题）",
    ],
    included: [
      "账务诊断（全面检查账务问题）",
      "凭证整理（补充、修正凭证）",
      "账务调整（纠正错误账务）",
      "报表编制（重新编制准确报表）",
      "税务清理（补申报、更正申报）",
      "账簿装订（规范账簿管理）",
    ],
    materials: [
      "营业执照及税务登记证",
      "银行对账单（整理期间全部）",
      "现有账簿和凭证（不完整也可以）",
      "历史合同、协议",
      "历史发票（收入和支出）",
      "资产清单",
      "往来明细（应收应付）",
    ],
    timeframe: "根据账务量确定，一般1-3个月",
    price: "¥2,000起",
  },
}

export default function TaxServiceDetailPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950">
      <Header />

      <main className="pt-20">
        <div className="glass-effect border-b border-purple-500/20">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="inline-flex items-center text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </div>
        </div>

        <section className="bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl mb-6">{service.subtitle}</p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">{service.price}</span>
              <Button size="lg" className="glass-effect text-cyan-400 hover:bg-gray-100" onClick={handleConsultClick}>
                <Phone className="w-5 h-5 mr-2" />
                立即咨询
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 glass-effect">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6">服务介绍</h2>
            <p className="text-lg text-gray-400 leading-relaxed">{service.description}</p>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">服务优势</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="glass-effect rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 glass-effect">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">服务内容</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.included.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Required */}
        <section className="py-12 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">所需材料</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.materials.map((material, index) => (
                <div key={index} className="flex items-start gap-3 glass-effect rounded-lg p-4 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{material}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 glass-effect border-l-4 border-cyan-500 p-6 rounded">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-white text-lg">服务时间</h3>
                  <p className="text-gray-400 mt-1">{service.timeframe}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">立即开始专业财税服务</h2>
            <p className="text-xl mb-8">20年经验团队，值得信赖</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass-effect text-cyan-400 hover:bg-gray-100" onClick={handlePhoneClick}>
                <Phone className="w-5 h-5 mr-2" />
                电话咨询：13728777024
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:glass-effect hover:text-cyan-400 bg-transparent"
                onClick={handleConsultClick}
              >
                在线咨询
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
