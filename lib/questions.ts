import type { ArchetypeKey } from "./archetypes";

export type QuizOption = {
  text: string;
  archetype: ArchetypeKey;
};

export type QuizQuestion = {
  id: number;
  text: string;
  options: QuizOption[];
};

export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: "面对一个全新的机会，你通常会：",
    options: [
      { text: "直接去尝试，看看会发生什么", archetype: "Explorer" },
      { text: "先收集资料，分析清楚再决定", archetype: "Sage" },
      { text: "思考如何做出自己的特色", archetype: "Creator" },
      { text: "判断它是否有实际价值和可控性", archetype: "Ruler" }
    ]
  },
  {
    id: 2,
    text: "别人最常觉得你：",
    options: [
      { text: "乐观、简单、容易相信美好", archetype: "Innocent" },
      { text: "亲和、真实、没有距离感", archetype: "Everyman" },
      { text: "有担当，关键时刻能站出来", archetype: "Hero" },
      { text: "会照顾人，让人有安全感", archetype: "Caregiver" }
    ]
  },
  {
    id: 3,
    text: "你最不能接受的是：",
    options: [
      { text: "被限制自由", archetype: "Explorer" },
      { text: "混乱和失控", archetype: "Ruler" },
      { text: "虚伪和不真实", archetype: "Everyman" },
      { text: "愚昧和不讲逻辑", archetype: "Sage" }
    ]
  },
  {
    id: 4,
    text: "你理想中的自己更像：",
    options: [
      { text: "不断开拓的人", archetype: "Explorer" },
      { text: "看透问题本质的人", archetype: "Sage" },
      { text: "创造独特作品的人", archetype: "Creator" },
      { text: "掌控局面的人", archetype: "Ruler" }
    ]
  },
  {
    id: 5,
    text: "团队遇到危机时，你更可能：",
    options: [
      { text: "挺身而出解决问题", archetype: "Hero" },
      { text: "安抚大家，照顾情绪", archetype: "Caregiver" },
      { text: "寻找新的突破方法", archetype: "Magician" },
      { text: "推翻旧规则，重新来过", archetype: "Rebel" }
    ]
  },
  {
    id: 6,
    text: "你更喜欢哪种生活状态：",
    options: [
      { text: "简单、安心、没有太多复杂事", archetype: "Innocent" },
      { text: "和朋友、家人保持真实连接", archetype: "Everyman" },
      { text: "充满激情和情感体验", archetype: "Lover" },
      { text: "轻松有趣，享受当下", archetype: "Jester" }
    ]
  },
  {
    id: 7,
    text: "做决定时，你最看重：",
    options: [
      { text: "是否让我更自由", archetype: "Explorer" },
      { text: "是否符合逻辑和事实", archetype: "Sage" },
      { text: "是否能带来改变", archetype: "Magician" },
      { text: "是否能建立秩序和成果", archetype: "Ruler" }
    ]
  },
  {
    id: 8,
    text: "你最希望别人记住你：",
    options: [
      { text: "勇敢、强大、敢挑战", archetype: "Hero" },
      { text: "善良、可靠、愿意付出", archetype: "Caregiver" },
      { text: "独特、有创造力", archetype: "Creator" },
      { text: "有魅力、懂关系和情感", archetype: "Lover" }
    ]
  },
  {
    id: 9,
    text: "你面对规则时通常会：",
    options: [
      { text: "遵守规则，让事情稳定运行", archetype: "Ruler" },
      { text: "理解规则背后的逻辑", archetype: "Sage" },
      { text: "如果规则不合理，就打破它", archetype: "Rebel" },
      { text: "看情况，不想太严肃", archetype: "Jester" }
    ]
  },
  {
    id: 10,
    text: "你更容易被什么打动：",
    options: [
      { text: "纯粹和善意", archetype: "Innocent" },
      { text: "真实和平等", archetype: "Everyman" },
      { text: "爱与美", archetype: "Lover" },
      { text: "快乐和幽默", archetype: "Jester" }
    ]
  },
  {
    id: 11,
    text: "面对压力时，你通常会：",
    options: [
      { text: "告诉自己坚持住，扛过去", archetype: "Hero" },
      { text: "先保护身边的人", archetype: "Caregiver" },
      { text: "重新设计解决方案", archetype: "Creator" },
      { text: "寻找一个彻底转变的办法", archetype: "Magician" }
    ]
  },
  {
    id: 12,
    text: "你最害怕：",
    options: [
      { text: "失去希望", archetype: "Innocent" },
      { text: "被群体排斥", archetype: "Everyman" },
      { text: "失败和软弱", archetype: "Hero" },
      { text: "别人受到伤害", archetype: "Caregiver" }
    ]
  },
  {
    id: 13,
    text: "你最享受的状态是：",
    options: [
      { text: "在路上，发现新东西", archetype: "Explorer" },
      { text: "安静研究，搞懂复杂问题", archetype: "Sage" },
      { text: "把想法变成作品", archetype: "Creator" },
      { text: "把混乱变成秩序", archetype: "Ruler" }
    ]
  },
  {
    id: 14,
    text: "你更像哪一种角色：",
    options: [
      { text: "挑战者", archetype: "Hero" },
      { text: "守护者", archetype: "Caregiver" },
      { text: "变革者", archetype: "Rebel" },
      { text: "点燃可能性的人", archetype: "Magician" }
    ]
  },
  {
    id: 15,
    text: "在人际关系中，你更重视：",
    options: [
      { text: "真诚自然", archetype: "Everyman" },
      { text: "亲密和吸引力", archetype: "Lover" },
      { text: "快乐轻松", archetype: "Jester" },
      { text: "彼此照顾", archetype: "Caregiver" }
    ]
  },
  {
    id: 16,
    text: "你做事的动力更多来自：",
    options: [
      { text: "追求更好的世界", archetype: "Innocent" },
      { text: "证明自己的能力", archetype: "Hero" },
      { text: "表达内心的想法", archetype: "Creator" },
      { text: "建立影响力和掌控感", archetype: "Ruler" }
    ]
  },
  {
    id: 17,
    text: "当别人说“不可能”时，你会：",
    options: [
      { text: "想办法证明可以做到", archetype: "Hero" },
      { text: "思考有没有新的路径", archetype: "Magician" },
      { text: "质疑这个限制本身", archetype: "Rebel" },
      { text: "先分析“不可能”的原因", archetype: "Sage" }
    ]
  },
  {
    id: 18,
    text: "你最喜欢的表达方式是：",
    options: [
      { text: "创作、设计、写作或表达观点", archetype: "Creator" },
      { text: "讲故事、制造气氛", archetype: "Jester" },
      { text: "建立亲密连接", archetype: "Lover" },
      { text: "提出清晰判断", archetype: "Sage" }
    ]
  },
  {
    id: 19,
    text: "你最容易吸引哪类人：",
    options: [
      { text: "需要鼓励和希望的人", archetype: "Innocent" },
      { text: "需要归属感的人", archetype: "Everyman" },
      { text: "需要保护和支持的人", archetype: "Caregiver" },
      { text: "需要方向和秩序的人", archetype: "Ruler" }
    ]
  },
  {
    id: 20,
    text: "你认为人生最重要的是：",
    options: [
      { text: "自由体验", archetype: "Explorer" },
      { text: "理解真相", archetype: "Sage" },
      { text: "创造价值", archetype: "Creator" },
      { text: "改变命运", archetype: "Magician" }
    ]
  },
  {
    id: 21,
    text: "当环境太稳定时，你会：",
    options: [
      { text: "感到无聊，想出去看看", archetype: "Explorer" },
      { text: "开始寻找新的变化", archetype: "Rebel" },
      { text: "想加入一些有趣的东西", archetype: "Jester" },
      { text: "继续维持稳定，因为稳定很重要", archetype: "Ruler" }
    ]
  },
  {
    id: 22,
    text: "你更相信：",
    options: [
      { text: "世界本来可以很美好", archetype: "Innocent" },
      { text: "普通人之间的真实连接最珍贵", archetype: "Everyman" },
      { text: "爱和美能改变人", archetype: "Lover" },
      { text: "幽默能化解很多问题", archetype: "Jester" }
    ]
  },
  {
    id: 23,
    text: "如果你要影响别人，你更倾向于：",
    options: [
      { text: "用勇气和行动带动别人", archetype: "Hero" },
      { text: "用关心和支持影响别人", archetype: "Caregiver" },
      { text: "用颠覆性的观点唤醒别人", archetype: "Rebel" },
      { text: "用愿景和信念改变别人", archetype: "Magician" }
    ]
  },
  {
    id: 24,
    text: "完成一件事后，你最在意：",
    options: [
      { text: "过程是否有趣", archetype: "Jester" },
      { text: "关系是否更亲近", archetype: "Lover" },
      { text: "作品是否独特", archetype: "Creator" },
      { text: "结果是否成功且可持续", archetype: "Ruler" }
    ]
  }
];
