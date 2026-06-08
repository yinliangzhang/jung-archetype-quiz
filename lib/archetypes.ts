export const archetypeOrder = [
  "Innocent",
  "Everyman",
  "Hero",
  "Caregiver",
  "Explorer",
  "Rebel",
  "Lover",
  "Creator",
  "Ruler",
  "Magician",
  "Sage",
  "Jester"
] as const;

export type ArchetypeKey = (typeof archetypeOrder)[number];

export type ArchetypeProfile = {
  key: ArchetypeKey;
  chineseName: string;
  englishName: string;
  keywords: string[];
  core: string;
  strengths: string;
  blindSpots: string;
  growthAdvice: string;
};

export const archetypeProfiles: Record<ArchetypeKey, ArchetypeProfile> = {
  Innocent: {
    key: "Innocent",
    chineseName: "天真者",
    englishName: "Innocent",
    keywords: ["乐观", "信任", "纯粹", "希望"],
    core: "你倾向于相信事情终会变好，也愿意用善意和简单的方式看待世界。你的核心动力是保持希望、追求安全感，并让生活回到纯净明亮的状态。",
    strengths: "你能在复杂环境中保存信任感，给身边人带来安定和鼓励。你擅长发现积极的一面，也容易建立轻松、低防备的关系。",
    blindSpots: "你可能会低估现实中的复杂性，过度相信他人的承诺，或在冲突和风险面前选择回避。",
    growthAdvice: "继续保留你的明亮感，同时学习识别边界和风险。成熟的天真不是逃避现实，而是在看清现实后依然选择善意。"
  },
  Everyman: {
    key: "Everyman",
    chineseName: "平凡者",
    englishName: "Everyman",
    keywords: ["真实", "归属", "平等", "亲和"],
    core: "你重视人与人之间自然、真实、没有距离的连接。你不喜欢过度包装和高高在上的姿态，更愿意在普通生活中找到稳定的价值。",
    strengths: "你容易让人放松，擅长建立信任和团队归属感。你的真诚和接地气会让关系变得更稳，也让合作更有温度。",
    blindSpots: "你可能为了合群而压低自己的独特性，或过度在意他人评价，导致不敢做出更鲜明的选择。",
    growthAdvice: "不要把归属感等同于迎合。真正稳定的关系，能容纳你的真实想法、差异和野心。"
  },
  Hero: {
    key: "Hero",
    chineseName: "英雄",
    englishName: "Hero",
    keywords: ["勇气", "行动", "挑战", "担当"],
    core: "你习惯在关键时刻站出来，用行动证明能力。你渴望突破困难、战胜挑战，并通过结果确认自己的力量。",
    strengths: "你有强烈的目标感和执行力，面对压力不轻易退缩。你能带动他人走出停滞，是团队中的推动者和承担者。",
    blindSpots: "你可能把脆弱视为失败，过度逞强，或把人生长期放在战斗模式里，忽略休息与求助。",
    growthAdvice: "真正的强大不只是不退缩，也包括知道何时休整、何时合作。允许自己被支持，会让你的力量更持久。"
  },
  Caregiver: {
    key: "Caregiver",
    chineseName: "照顾者",
    englishName: "Caregiver",
    keywords: ["关怀", "保护", "支持", "可靠"],
    core: "你很容易注意到他人的需求，并希望通过照顾、支持和守护来创造安全感。关系中的责任感对你来说非常重要。",
    strengths: "你温暖可靠，能在他人脆弱时提供稳定力量。你擅长照顾情绪、修复关系，也能让团队更有凝聚力。",
    blindSpots: "你可能过度承担，把别人的需求放在自己之前，甚至因为害怕让人失望而难以拒绝。",
    growthAdvice: "把照顾自己也纳入责任范围。健康的付出需要边界，只有不耗尽自己，关怀才能长期有效。"
  },
  Explorer: {
    key: "Explorer",
    chineseName: "探索者",
    englishName: "Explorer",
    keywords: ["自由", "体验", "开拓", "独立"],
    core: "你渴望更大的空间和更多可能性，不喜欢被固定身份、规则或路径限制。你通过探索未知来确认自己真正想要什么。",
    strengths: "你适应力强，敢于离开舒适区，也能为停滞的环境带来新视角。你擅长发现机会，并推动自己持续更新。",
    blindSpots: "你可能害怕承诺和稳定，一旦事情进入重复阶段就想离开，导致成果难以沉淀。",
    growthAdvice: "自由不只来自离开，也来自有能力选择留下。为重要目标建立节奏，会让探索产生真正的积累。"
  },
  Rebel: {
    key: "Rebel",
    chineseName: "反叛者",
    englishName: "Rebel",
    keywords: ["颠覆", "突破", "真实", "变革"],
    core: "你对虚假、不合理和压抑性的规则非常敏感。你愿意质疑既定秩序，希望通过打破旧框架释放真实力量。",
    strengths: "你有勇气说出别人不敢说的话，也能在僵化系统中打开突破口。你的锋芒常常带来必要的改变。",
    blindSpots: "你可能为了反对而反对，忽略建设性的路径，或在情绪高点做出破坏大于改变的决定。",
    growthAdvice: "让反叛服务于创造，而不是只服务于否定。把你的判断转化为可执行的新规则，会让影响力更扎实。"
  },
  Lover: {
    key: "Lover",
    chineseName: "爱人",
    englishName: "Lover",
    keywords: ["亲密", "美感", "吸引", "感受"],
    core: "你重视情感、关系、审美和深度体验。你希望人与事物之间有真实吸引力，也希望生活不只是有效，还要动人。",
    strengths: "你有很强的感受力和连接能力，能让关系变得更亲密，也能发现细节中的美。你常常为场景和体验注入魅力。",
    blindSpots: "你可能过度依赖情感回应，容易受关系波动影响，或为了被喜欢而牺牲自己的判断。",
    growthAdvice: "让爱与美建立在自我稳定之上。你不需要通过讨好来获得亲密，清晰表达需求会让关系更成熟。"
  },
  Creator: {
    key: "Creator",
    chineseName: "创造者",
    englishName: "Creator",
    keywords: ["创意", "表达", "独特", "构建"],
    core: "你希望把内在想法变成可见的作品、观点或系统。你追求独特表达，也在创造中确认自己的价值。",
    strengths: "你想象力强，善于重组材料、提出新表达，并把抽象想法落成具体成果。你能让普通事物拥有风格和辨识度。",
    blindSpots: "你可能陷入完美主义，迟迟不发布成果，或过度强调独特而忽略使用者和现实限制。",
    growthAdvice: "把创造拆成可迭代的小版本。先完成，再优化；先被看见，再被打磨。"
  },
  Ruler: {
    key: "Ruler",
    chineseName: "统治者",
    englishName: "Ruler",
    keywords: ["秩序", "掌控", "责任", "成果"],
    core: "你重视结构、规则、资源和结果，希望把混乱变成可控系统。你倾向于承担决策权，也希望事情稳定、有效、可持续。",
    strengths: "你有组织能力和全局意识，能建立标准、推动执行，并让团队或项目进入更可靠的状态。",
    blindSpots: "你可能过度控制，难以信任他人的方法，或把不确定性视为威胁，从而压缩创新空间。",
    growthAdvice: "成熟的掌控不是事事亲自把关，而是设计好边界后让系统自然运行。给别人空间，也是扩大影响力。"
  },
  Magician: {
    key: "Magician",
    chineseName: "魔法师",
    englishName: "Magician",
    keywords: ["转化", "愿景", "洞察", "可能性"],
    core: "你相信事情可以被重新定义，也擅长看到表象背后的转化机会。你被愿景、信念和改变命运的力量吸引。",
    strengths: "你能把分散的线索连接成新的方向，激发他人相信可能性。你适合推动转型、创新和关键节点的突破。",
    blindSpots: "你可能过度沉迷愿景，低估执行细节，或期待一次转变解决所有问题。",
    growthAdvice: "把愿景落到具体路径、节奏和验证标准上。魔法真正发生在洞察被持续执行之后。"
  },
  Sage: {
    key: "Sage",
    chineseName: "智者",
    englishName: "Sage",
    keywords: ["真相", "理性", "洞察", "学习"],
    core: "你追求事实、逻辑和本质理解。相比快速行动，你更希望先弄清楚问题结构，再做出清晰判断。",
    strengths: "你分析力强，能拆解复杂问题并减少盲目决策。你重视知识和证据，常常是团队中的判断校准者。",
    blindSpots: "你可能过度分析而延迟行动，或用理性隔离情感，导致别人觉得你难以靠近。",
    growthAdvice: "知识需要进入行动才会产生力量。给自己设置决策期限，也练习用更有温度的方式表达判断。"
  },
  Jester: {
    key: "Jester",
    chineseName: "小丑",
    englishName: "Jester",
    keywords: ["幽默", "当下", "轻盈", "乐趣"],
    core: "你重视快乐、松弛和当下体验。你不喜欢沉重僵硬的氛围，常常用幽默和灵活感让事情重新流动起来。",
    strengths: "你能化解紧张，给关系带来轻松感，也擅长从不同角度看待问题。你的存在会提醒大家生活不只有压力。",
    blindSpots: "你可能用玩笑回避严肃议题，或在需要持续投入时显得不够稳定。",
    growthAdvice: "幽默可以是力量，也可以是保护壳。学会在关键时刻认真投入，会让你的轻盈更有分量。"
  }
};
