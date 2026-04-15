export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: {
      I: number; // 直觉派 Intuitive
      D: number; // 推导派 Deductive
      T: number; // 理论家 Theorist
      E: number; // 实验家 Experimenter
      M: number; // 微观视角 Micro
      C: number; // 宏观视角 Cosmo
      N: number; // 创新者 Novel
      R: number; // 严谨者 Rigorous
    };
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "当你第一次遇到一个物理问题时，你通常会怎么做？",
    options: [
      { text: "凭直觉猜测答案的大致方向", scores: { I: 2, D: 0, T: 0, E: 0, M: 0, C: 0, N: 1, R: 0 } },
      { text: "从基本原理出发逐步推导", scores: { I: 0, D: 2, T: 1, E: 0, M: 0, C: 0, N: 0, R: 1 } },
      { text: "先做个小实验或模拟看看", scores: { I: 0, D: 0, T: 0, E: 2, M: 0, C: 0, N: 1, R: 0 } },
    ],
  },
  {
    id: 2,
    text: "你更喜欢研究哪个尺度的物理现象？",
    options: [
      { text: "微观世界：粒子、原子、量子", scores: { I: 0, D: 0, T: 0, E: 0, M: 2, C: 0, N: 0, R: 0 } },
      { text: "宏观宇宙：星系、黑洞、宇宙学", scores: { I: 1, D: 0, T: 0, E: 0, M: 0, C: 2, N: 1, R: 0 } },
      { text: "日常生活尺度：力学、热学、电磁学", scores: { I: 0, D: 1, T: 0, E: 1, M: 0, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 3,
    text: "在解决物理问题时，你更看重什么？",
    options: [
      { text: "创新的思路和非传统方法", scores: { I: 1, D: 0, T: 1, E: 0, M: 0, C: 0, N: 2, R: 0 } },
      { text: "严谨的数学推导和证明", scores: { I: 0, D: 1, T: 1, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "可验证的实验结果", scores: { I: 0, D: 0, T: 0, E: 2, M: 0, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 4,
    text: "你更喜欢哪种学习方式？",
    options: [
      { text: "阅读理论书籍和论文", scores: { I: 0, D: 1, T: 2, E: 0, M: 0, C: 0, N: 0, R: 1 } },
      { text: "动手做实验和观察", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 0, N: 0, R: 0 } },
      { text: "通过图像和物理图像来理解", scores: { I: 2, D: 0, T: 0, E: 0, M: 0, C: 1, N: 1, R: 0 } },
    ],
  },
  {
    id: 5,
    text: "当你推导公式时，你倾向于？",
    options: [
      { text: "先理解物理图像，再补数学细节", scores: { I: 2, D: 0, T: 1, E: 0, M: 0, C: 0, N: 1, R: 0 } },
      { text: "一步一步严格推导，不放过任何细节", scores: { I: 0, D: 2, T: 1, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "用计算机数值验证后再理解", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 0, N: 1, R: 0 } },
    ],
  },
  {
    id: 6,
    text: "你对量子力学的态度是？",
    options: [
      { text: "接受其反直觉性，相信数学结构", scores: { I: 1, D: 1, T: 2, E: 0, M: 2, C: 0, N: 1, R: 1 } },
      { text: "希望通过实验来验证其预言", scores: { I: 0, D: 0, T: 0, E: 2, M: 2, C: 0, N: 0, R: 1 } },
      { text: "试图寻找更深层的物理解释", scores: { I: 2, D: 1, T: 1, E: 0, M: 1, C: 0, N: 2, R: 0 } },
    ],
  },
  {
    id: 7,
    text: "在研究项目中，你更喜欢？",
    options: [
      { text: "独立思考和解决问题", scores: { I: 1, D: 1, T: 1, E: 0, M: 0, C: 0, N: 0, R: 1 } },
      { text: "与团队协作，共同探索", scores: { I: 0, D: 0, T: 0, E: 2, M: 0, C: 0, N: 1, R: 0 } },
      { text: "带领团队，指导他人", scores: { I: 1, D: 0, T: 0, E: 1, M: 0, C: 1, N: 1, R: 0 } },
    ],
  },
  {
    id: 8,
    text: "面对一个复杂的物理系统，你会？",
    options: [
      { text: "寻找对称性和守恒量来简化", scores: { I: 2, D: 1, T: 2, E: 0, M: 0, C: 1, N: 1, R: 1 } },
      { text: "建立精确的数学模型", scores: { I: 0, D: 2, T: 2, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "设计实验来观察其行为", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 9,
    text: "你对数学在物理中的作用怎么看？",
    options: [
      { text: "数学是描述自然的工具，但物理直觉更重要", scores: { I: 2, D: 0, T: 1, E: 0, M: 0, C: 0, N: 1, R: 0 } },
      { text: "数学是物理的基础，必须严格", scores: { I: 0, D: 2, T: 2, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "数学需要与实验结合才有意义", scores: { I: 0, D: 0, T: 0, E: 2, M: 0, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 10,
    text: "当你听到\"黑洞\"这个词时，首先想到的是？",
    options: [
      { text: "时空弯曲和奇点", scores: { I: 1, D: 1, T: 2, E: 0, M: 0, C: 2, N: 0, R: 1 } },
      { text: "霍金辐射和信息悖论", scores: { I: 2, D: 1, T: 2, E: 0, M: 1, C: 1, N: 2, R: 0 } },
      { text: "引力波探测和观测证据", scores: { I: 0, D: 0, T: 0, E: 2, M: 0, C: 2, N: 0, R: 1 } },
    ],
  },
  {
    id: 11,
    text: "在物理学习中，你最享受的是？",
    options: [
      { text: "发现不同现象之间的联系", scores: { I: 2, D: 1, T: 1, E: 0, M: 0, C: 1, N: 1, R: 0 } },
      { text: "完成一个复杂的推导", scores: { I: 0, D: 2, T: 1, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "成功完成一个实验", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 12,
    text: "你如何看待物理中的\"美\"？",
    options: [
      { text: "简洁优雅的公式和定律", scores: { I: 1, D: 1, T: 2, E: 0, M: 0, C: 1, N: 1, R: 1 } },
      { text: "对称性和统一性", scores: { I: 2, D: 1, T: 2, E: 0, M: 0, C: 1, N: 2, R: 1 } },
      { text: "自然现象的奇妙和复杂", scores: { I: 1, D: 0, T: 0, E: 2, M: 1, C: 2, N: 1, R: 0 } },
    ],
  },
  {
    id: 13,
    text: "遇到计算困难时，你会？",
    options: [
      { text: "尝试近似或简化模型", scores: { I: 2, D: 0, T: 1, E: 0, M: 0, C: 0, N: 1, R: 0 } },
      { text: "坚持精确求解，哪怕很繁琐", scores: { I: 0, D: 2, T: 1, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "用数值方法或计算机模拟", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 0, N: 1, R: 0 } },
    ],
  },
  {
    id: 14,
    text: "你更感兴趣的研究方向是？",
    options: [
      { text: "基础理论：统一场论、量子引力", scores: { I: 2, D: 2, T: 2, E: 0, M: 1, C: 2, N: 2, R: 1 } },
      { text: "应用物理：材料、能源、技术", scores: { I: 0, D: 0, T: 0, E: 2, M: 2, C: 0, N: 1, R: 1 } },
      { text: "交叉学科：生物物理、计算物理", scores: { I: 1, D: 1, T: 1, E: 1, M: 2, C: 0, N: 2, R: 0 } },
    ],
  },
  {
    id: 15,
    text: "在物理讨论中，你通常？",
    options: [
      { text: "提出新颖的观点和猜想", scores: { I: 2, D: 0, T: 1, E: 0, M: 0, C: 0, N: 2, R: 0 } },
      { text: "指出逻辑漏洞和错误", scores: { I: 0, D: 2, T: 1, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "分享实验数据和观察", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 16,
    text: "你对相对论的理解方式是？",
    options: [
      { text: "通过思想实验和物理图像", scores: { I: 2, D: 0, T: 1, E: 0, M: 0, C: 1, N: 1, R: 0 } },
      { text: "通过张量分析和微分几何", scores: { I: 0, D: 2, T: 2, E: 0, M: 0, C: 1, N: 0, R: 2 } },
      { text: "通过GPS等实际应用理解", scores: { I: 0, D: 0, T: 0, E: 2, M: 0, C: 1, N: 0, R: 1 } },
    ],
  },
  {
    id: 17,
    text: "在研究一个新领域时，你会？",
    options: [
      { text: "先建立整体的物理图像", scores: { I: 2, D: 0, T: 1, E: 0, M: 0, C: 1, N: 1, R: 0 } },
      { text: "从基础定义和公理开始", scores: { I: 0, D: 2, T: 2, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "先找一些具体问题来计算", scores: { I: 0, D: 1, T: 0, E: 2, M: 1, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 18,
    text: "你认为物理学的终极目标是？",
    options: [
      { text: "发现描述一切的大统一理论", scores: { I: 1, D: 2, T: 2, E: 0, M: 1, C: 2, N: 2, R: 1 } },
      { text: "解释所有自然现象", scores: { I: 2, D: 1, T: 1, E: 1, M: 1, C: 2, N: 1, R: 0 } },
      { text: "推动技术和人类进步", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 1, N: 1, R: 0 } },
    ],
  },
  {
    id: 19,
    text: "在处理数据时，你更倾向于？",
    options: [
      { text: "寻找数据中的模式和趋势", scores: { I: 2, D: 0, T: 0, E: 2, M: 1, C: 0, N: 1, R: 0 } },
      { text: "进行严格的统计分析和误差估计", scores: { I: 0, D: 2, T: 0, E: 2, M: 0, C: 0, N: 0, R: 2 } },
      { text: "用可视化方法呈现数据", scores: { I: 1, D: 0, T: 0, E: 1, M: 0, C: 1, N: 1, R: 0 } },
    ],
  },
  {
    id: 20,
    text: "你对物理教材的态度是？",
    options: [
      { text: "喜欢看有很多图示和直观解释的书", scores: { I: 2, D: 0, T: 0, E: 0, M: 0, C: 1, N: 1, R: 0 } },
      { text: "喜欢严谨、数学化的教材", scores: { I: 0, D: 2, T: 2, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "喜欢有具体例题和应用的书", scores: { I: 0, D: 1, T: 0, E: 2, M: 1, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 21,
    text: "当你有一个新想法时，你会？",
    options: [
      { text: "立即与同行讨论交流", scores: { I: 1, D: 0, T: 0, E: 1, M: 0, C: 0, N: 1, R: 0 } },
      { text: "先自己深入思考和完善", scores: { I: 1, D: 2, T: 1, E: 0, M: 0, C: 0, N: 0, R: 1 } },
      { text: "设计实验来验证这个想法", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 0, N: 1, R: 0 } },
    ],
  },
  {
    id: 22,
    text: "你认为什么是\"理解\"一个物理概念？",
    options: [
      { text: "能够直观地想象其物理图像", scores: { I: 2, D: 0, T: 1, E: 0, M: 0, C: 0, N: 1, R: 0 } },
      { text: "能够进行完整的数学推导", scores: { I: 0, D: 2, T: 2, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "能够预测实验结果", scores: { I: 0, D: 0, T: 0, E: 2, M: 0, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 23,
    text: "在写物理论文时，你更关注？",
    options: [
      { text: "提出新的观点和理论框架", scores: { I: 2, D: 0, T: 2, E: 0, M: 0, C: 0, N: 2, R: 0 } },
      { text: "确保所有推导都严格正确", scores: { I: 0, D: 2, T: 1, E: 0, M: 0, C: 0, N: 0, R: 2 } },
      { text: "提供详实的实验数据和分析", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 0, N: 0, R: 1 } },
    ],
  },
  {
    id: 24,
    text: "你对物理史的态度是？",
    options: [
      { text: "从中获取灵感和物理直觉", scores: { I: 2, D: 0, T: 1, E: 0, M: 0, C: 0, N: 1, R: 0 } },
      { text: "学习其中的数学技巧和方法", scores: { I: 0, D: 2, T: 1, E: 0, M: 0, C: 0, N: 0, R: 1 } },
      { text: "了解实验技术的发展历程", scores: { I: 0, D: 0, T: 0, E: 2, M: 1, C: 0, N: 0, R: 0 } },
    ],
  },
  {
    id: 25,
    text: "如果让你选择一个物理学家的思维方式，你会选择？",
    options: [
      { text: "爱因斯坦：想象力和物理直觉", scores: { I: 2, D: 0, T: 2, E: 0, M: 0, C: 2, N: 2, R: 0 } },
      { text: "狄拉克：数学美感和严格性", scores: { I: 0, D: 2, T: 2, E: 0, M: 2, C: 0, N: 1, R: 2 } },
      { text: "费米：实验和理论的结合", scores: { I: 0, D: 1, T: 1, E: 2, M: 2, C: 0, N: 0, R: 1 } },
    ],
  },
];
