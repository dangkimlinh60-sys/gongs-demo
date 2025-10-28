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
    scope: string[]
    materials: string[]
    timeframe: string
    price: string
  }
> = {
  "popular-audit": {
    title: "热门审计服务",
    subtitle: "最受欢迎的审计服务套餐",
    description: "综合性审计服务，涵盖企业最常需要的审计项目，性价比高。我们的审计服务由注册会计师执行，严格遵守审计准则，为企业提供独立、客观、公正的审计报告，帮助企业发现财务问题、规范管理、降低风险。",
    features: [
      "资深审计师团队，注册会计师执业",
      "全面审计服务，覆盖主要审计项目",
      "快速出具报告，10-15个工作日",
      "专业意见建议，改善财务管理",
      "后续咨询支持，解答审计问题",
      "严格保密制度，保护企业信息",
    ],
    scope: [
      "财务报表审计（资产负债表、利润表、现金流量表）",
      "内部控制审计（评估内部控制有效性）",
      "合规性审计（检查财税合规情况）",
      "风险评估（识别经营和财务风险）",
      "审计报告出具（标准无保留意见报告）",
      "管理建议书（提出改进建议）",
    ],
    materials: [
      "营业执照、公司章程、验资报告",
      "全年财务报表及账簿（总账、明细账）",
      "全年记账凭证及原始凭证",
      "银行对账单及余额调节表",
      "纳税申报表及完税凭证",
      "重大合同、协议（购销、租赁等）",
      "固定资产清单及盘点表",
      "应收应付款明细及账龄分析",
    ],
    timeframe: "现场审计3-5天，出具报告10-15个工作日",
    price: "¥8,000起",
  },
  "annual-audit": {
    title: "年度审计",
    subtitle: "企业年度财务审计",
    description: "对企业年度财务报表进行全面审计，出具审计报告。年度审计是对企业整个会计年度的财务状况、经营成果和现金流量进行全面审查，确保财务报表的真实性、完整性和合规性。审计报告可用于工商年检、银行贷款、投资决策等。",
    features: [
      "全面财务审计，覆盖所有会计科目",
      "合规性检查，确保符合会计准则",
      "风险识别，发现潜在财务风险",
      "专业报告，符合审计准则要求",
      "审计建议，提供管理改进意见",
      "持续服务，提供后续咨询",
    ],
    scope: [
      "资产负债表审计（资产、负债、所有者权益）",
      "利润表审计（收入、成本、费用、利润）",
      "现金流量表审计（经营、投资、筹资活动）",
      "财务报表附注审计（会计政策、重要事项说明）",
      "审计报告编制（标准审计报告）",
      "管理建议书（内控缺陷及改进建议）",
    ],
    materials: [
      "企业基本证照（营业执照、税务登记证等）",
      "会计账簿（总账、明细账、日记账）",
      "会计凭证（记账凭证、原始凭证）",
      "财务报表（月度、季度、年度报表）",
      "银行存款证明及对账单",
      "存货盘点表及仓库明细",
      "固定资产卡片及折旧计算表",
      "债权债务函证（应收应付确认函）",
    ],
    timeframe: "审计周期15-20个工作日",
    price: "¥6,000起",
  },
  "high-tech-audit": {
    title: "高新审计",
    subtitle: "高新技术企业专项审计",
    description: "为申请高新技术企业认定提供专项审计服务。高新企业专项审计主要审查企业近三年的研发费用和高新技术产品(服务)收入情况，出具专项审计报告，用于高新技术企业认定或复审。我们熟悉高新认定政策，确保审计报告符合要求。",
    features: [
      "高新认定专业，熟悉认定政策",
      "研发费用审计，准确归集核算",
      "收入审计，高新收入占比分析",
      "通过率高，经验丰富",
      "经验丰富，服务过百家高新企业",
      "政策咨询，提供高新认定指导",
    ],
    scope: [
      "研发费用专项审计（近三年研发投入）",
      "高新收入审计（高新产品服务收入）",
      "知识产权审计（专利、软著等）",
      "审计报告出具（符合高新认定要求）",
      "研发费用归集辅导",
      "高新认定条件评估",
    ],
    materials: [
      "企业基本信息（营业执照、公司章程）",
      "近三年财务报表及审计报告",
      "研发项目立项书及研发计划",
      "研发费用明细账及凭证",
      "研发人员名单及工资表",
      "知识产权证书（专利、软著等）",
      "高新产品（服务）合同及发票",
      "产品技术说明及检测报告",
    ],
    timeframe: "审计周期10-15个工作日",
    price: "¥5,000起",
  },
  "financial-audit": {
    title: "财务审计",
    subtitle: "全面财务状况审计",
    description: "对企业财务状况、经营成果进行全面审计。财务审计主要关注财务报表的准确性、完整性和合规性，评估内部控制有效性，识别财务风险。审计报告可用于投融资、并购重组、上市辅导等多种场景。",
    features: [
      "全面审计，深入分析财务状况",
      "深度分析，发现深层次问题",
      "风险预警，及时提示财务风险",
      "改进建议，优化财务管理",
      "专业团队，资深注册会计师",
      "灵活服务，可定制审计范围",
    ],
    scope: [
      "财务报表审计（真实性、完整性审计）",
      "会计政策审查（会计政策合理性）",
      "内部控制评价（内控设计和执行）",
      "财务分析（偿债、营运、盈利能力）",
      "审计报告（标准或专项审计报告）",
      "管理建议（内控缺陷及改进措施）",
    ],
    materials: [
      "企业营业执照及组织机构代码证",
      "公司章程及股东会决议",
      "全套财务账簿及凭证",
      "财务报表（含附注）",
      "银行对账单及银行函证",
      "重大经济合同及协议",
      "资产评估报告（如有）",
      "税务申报表及纳税凭证",
    ],
    timeframe: "审计周期15-25个工作日",
    price: "¥7,000起",
  },
  "special-audit": {
    title: "专项审计",
    subtitle: "针对性专项审计服务",
    description: "根据特定需求进行的专项审计，如并购审计、离任审计等。专项审计针对特定事项或特定期间进行审计，目的明确、范围清晰。我们提供灵活的专项审计服务，满足企业多样化的审计需求。",
    features: [
      "针对性强，聚焦特定事项",
      "灵活定制，按需设计审计方案",
      "专业深入，深度挖掘问题",
      "快速响应，紧急项目优先安排",
      "保密性好，严格保护商业秘密",
      "经验丰富，处理过各类专项审计",
    ],
    scope: [
      "并购审计（尽职调查、财务审计）",
      "离任审计（经济责任审计）",
      "项目审计（专项资金使用审计）",
      "专项调查（舞弊调查、资产调查）",
      "审计报告（针对性审计报告）",
      "专业意见（问题分析及建议）",
    ],
    materials: [
      "审计委托书及审计目的说明",
      "被审计对象基本信息",
      "相关财务资料及账簿凭证",
      "业务合同及协议",
      "银行流水及资金往来记录",
      "相关人员访谈记录",
      "其他与审计事项相关的资料",
      "前期审计报告（如有）",
    ],
    timeframe: "根据审计范围确定，一般10-30个工作日",
    price: "面议",
  },
  "tax-audit": {
    title: "税务审计",
    subtitle: "税务合规性审计",
    description: "审查企业税务处理的合规性，识别税务风险。税务审计重点检查企业的纳税申报是否准确、税款缴纳是否及时、税收优惠是否合规。通过税务审计，帮助企业发现税务风险，规避税务处罚，合理降低税负。",
    features: [
      "税务合规审查，全面检查税务处理",
      "风险识别，发现潜在税务风险",
      "筹划建议，合理合法节税",
      "问题整改，指导税务问题处理",
      "专业指导，提供税务政策咨询",
      "持续服务，建立长期合作关系",
    ],
    scope: [
      "税务申报审查（增值税、企业所得税等）",
      "税务风险评估（识别重大税务风险）",
      "税务筹划建议（合法节税方案）",
      "税务审计报告（税务合规性报告）",
      "税务问题整改指导",
      "税务争议处理支持",
    ],
    materials: [
      "企业营业执照及税务登记证",
      "近期纳税申报表（增值税、所得税等）",
      "完税凭证及税款缴纳记录",
      "财务账簿及凭证",
      "发票管理台账（进项、销项）",
      "税收优惠备案资料",
      "税务稽查通知（如有）",
      "往期税务审计报告（如有）",
    ],
    timeframe: "审计周期10-15个工作日",
    price: "¥4,000起",
  },
  "liquidation-audit": {
    title: "清算审计",
    subtitle: "企业注销清算专项审计",
    description: "为企业注销清算提供专业审计服务。企业注销前需要进行清算审计，清理企业债权债务，核实企业资产，编制清算报告。我们提供专业的清算审计服务，确保企业合法合规注销，保护股东利益。",
    features: [
      "清算专业，熟悉注销流程",
      "程序规范，严格按照清算程序",
      "快速办理，缩短注销时间",
      "合规保障，确保合法注销",
      "经验丰富，处理过各类清算审计",
      "一站式服务，清算审计+注销代办",
    ],
    scope: [
      "清算资产审计（资产清查盘点）",
      "债权债务审计（往来核对确认）",
      "清算损益审计（清算期间损益）",
      "清算报告编制（清算审计报告）",
      "税务清算（税款结算及注销）",
      "工商注销辅导",
    ],
    materials: [
      "企业营业执照正副本",
      "股东会清算决议",
      "清算组成立文件",
      "全套财务账簿及凭证",
      "资产负债表（清算基准日）",
      "债权债务清单及证明",
      "银行对账单及余额证明",
      "公司公章、财务章等",
    ],
    timeframe: "审计周期10-15个工作日",
    price: "¥5,000起",
  },
}

export default function AccountingServiceDetailPage() {
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
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </div>
        </div>

        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl mb-6">{service.subtitle}</p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">{service.price}</span>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" onClick={handleConsultClick}>
                <Phone className="w-5 h-5 mr-2" />
                立即咨询
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">服务介绍</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">服务优势</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">审计范围</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.scope.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Required */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">所需材料</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.materials.map((material, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{material}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">审计周期</h3>
                  <p className="text-gray-600 mt-1">{service.timeframe}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">专业审计团队为您服务</h2>
            <p className="text-xl mb-8">10+年审计经验，值得信赖</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" onClick={handlePhoneClick}>
                <Phone className="w-5 h-5 mr-2" />
                电话咨询：13728777024
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
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
