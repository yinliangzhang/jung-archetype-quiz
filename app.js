const archetypeOrder = [
  "innocent",
  "everyman",
  "hero",
  "caregiver",
  "explorer",
  "rebel",
  "lover",
  "creator",
  "ruler",
  "magician",
  "sage",
  "jester"
];

const scoreKeys = [
  "innocent",
  "everyman",
  "hero",
  "caregiver",
  "explorer",
  "rebel",
  "lover",
  "creator",
  "jester",
  "sage",
  "magician",
  "ruler",
];

const questions = [
  {
    "id": 1,
    "text": "面对一个全新的机会，你通常会：",
    "options": [
      {
        "label": "直接去尝试，看看会发生什么",
        "scores": {
          "explorer": 2
        }
      },
      {
        "label": "先收集资料，分析清楚再决定",
        "scores": {
          "sage": 2
        }
      },
      {
        "label": "思考如何做出自己的特色",
        "scores": {
          "creator": 2
        }
      },
      {
        "label": "判断它是否有实际价值和可控性",
        "scores": {
          "ruler": 2
        }
      }
    ]
  },
  {
    "id": 2,
    "text": "别人最常觉得你：",
    "options": [
      {
        "label": "乐观、简单、容易相信美好",
        "scores": {
          "innocent": 2
        }
      },
      {
        "label": "亲和、真实、没有距离感",
        "scores": {
          "everyman": 2
        }
      },
      {
        "label": "有担当，关键时刻能站出来",
        "scores": {
          "hero": 2
        }
      },
      {
        "label": "会照顾人，让人有安全感",
        "scores": {
          "caregiver": 2
        }
      }
    ]
  },
  {
    "id": 3,
    "text": "你最不能接受的是：",
    "options": [
      {
        "label": "被限制自由",
        "scores": {
          "explorer": 2
        }
      },
      {
        "label": "混乱和失控",
        "scores": {
          "ruler": 2
        }
      },
      {
        "label": "虚伪和不真实",
        "scores": {
          "everyman": 2
        }
      },
      {
        "label": "愚昧和不讲逻辑",
        "scores": {
          "sage": 2
        }
      }
    ]
  },
  {
    "id": 4,
    "text": "你理想中的自己更像：",
    "options": [
      {
        "label": "不断开拓的人",
        "scores": {
          "explorer": 2
        }
      },
      {
        "label": "看透问题本质的人",
        "scores": {
          "sage": 2
        }
      },
      {
        "label": "创造独特作品的人",
        "scores": {
          "creator": 2
        }
      },
      {
        "label": "掌控局面的人",
        "scores": {
          "ruler": 2
        }
      }
    ]
  },
  {
    "id": 5,
    "text": "团队遇到危机时，你更可能：",
    "options": [
      {
        "label": "挺身而出解决问题",
        "scores": {
          "hero": 2
        }
      },
      {
        "label": "安抚大家，照顾情绪",
        "scores": {
          "caregiver": 2
        }
      },
      {
        "label": "寻找新的突破方法",
        "scores": {
          "magician": 2
        }
      },
      {
        "label": "推翻旧规则，重新来过",
        "scores": {
          "rebel": 2
        }
      }
    ]
  },
  {
    "id": 6,
    "text": "你更喜欢哪种生活状态：",
    "options": [
      {
        "label": "简单、安心、没有太多复杂事",
        "scores": {
          "innocent": 2
        }
      },
      {
        "label": "和朋友、家人保持真实连接",
        "scores": {
          "everyman": 2
        }
      },
      {
        "label": "充满激情和情感体验",
        "scores": {
          "lover": 2
        }
      },
      {
        "label": "轻松有趣，享受当下",
        "scores": {
          "jester": 2
        }
      }
    ]
  },
  {
    "id": 7,
    "text": "做决定时，你最看重：",
    "options": [
      {
        "label": "是否让我更自由",
        "scores": {
          "explorer": 2
        }
      },
      {
        "label": "是否符合逻辑和事实",
        "scores": {
          "sage": 2
        }
      },
      {
        "label": "是否能带来改变",
        "scores": {
          "magician": 2
        }
      },
      {
        "label": "是否能建立秩序和成果",
        "scores": {
          "ruler": 2
        }
      }
    ]
  },
  {
    "id": 8,
    "text": "你最希望别人记住你：",
    "options": [
      {
        "label": "勇敢、强大、敢挑战",
        "scores": {
          "hero": 2
        }
      },
      {
        "label": "善良、可靠、愿意付出",
        "scores": {
          "caregiver": 2
        }
      },
      {
        "label": "独特、有创造力",
        "scores": {
          "creator": 2
        }
      },
      {
        "label": "有魅力、懂关系和情感",
        "scores": {
          "lover": 2
        }
      }
    ]
  },
  {
    "id": 9,
    "text": "你面对规则时通常会：",
    "options": [
      {
        "label": "遵守规则，让事情稳定运行",
        "scores": {
          "ruler": 2
        }
      },
      {
        "label": "理解规则背后的逻辑",
        "scores": {
          "sage": 2
        }
      },
      {
        "label": "如果规则不合理，就打破它",
        "scores": {
          "rebel": 2
        }
      },
      {
        "label": "看情况，不想太严肃",
        "scores": {
          "jester": 2
        }
      }
    ]
  },
  {
    "id": 10,
    "text": "你更容易被什么打动：",
    "options": [
      {
        "label": "纯粹和善意",
        "scores": {
          "innocent": 2
        }
      },
      {
        "label": "真实和平等",
        "scores": {
          "everyman": 2
        }
      },
      {
        "label": "爱与美",
        "scores": {
          "lover": 2
        }
      },
      {
        "label": "快乐和幽默",
        "scores": {
          "jester": 2
        }
      }
    ]
  },
  {
    "id": 11,
    "text": "面对压力时，你通常会：",
    "options": [
      {
        "label": "告诉自己坚持住，扛过去",
        "scores": {
          "hero": 2
        }
      },
      {
        "label": "先保护身边的人",
        "scores": {
          "caregiver": 2
        }
      },
      {
        "label": "重新设计解决方案",
        "scores": {
          "creator": 2
        }
      },
      {
        "label": "寻找一个彻底转变的办法",
        "scores": {
          "magician": 2
        }
      }
    ]
  },
  {
    "id": 12,
    "text": "你最害怕：",
    "options": [
      {
        "label": "失去希望",
        "scores": {
          "innocent": 2
        }
      },
      {
        "label": "被群体排斥",
        "scores": {
          "everyman": 2
        }
      },
      {
        "label": "失败和软弱",
        "scores": {
          "hero": 2
        }
      },
      {
        "label": "别人受到伤害",
        "scores": {
          "caregiver": 2
        }
      }
    ]
  },
  {
    "id": 13,
    "text": "你最享受的状态是：",
    "options": [
      {
        "label": "在路上，发现新东西",
        "scores": {
          "explorer": 2
        }
      },
      {
        "label": "安静研究，搞懂复杂问题",
        "scores": {
          "sage": 2
        }
      },
      {
        "label": "把想法变成作品",
        "scores": {
          "creator": 2
        }
      },
      {
        "label": "把混乱变成秩序",
        "scores": {
          "ruler": 2
        }
      }
    ]
  },
  {
    "id": 14,
    "text": "你更像哪一种角色：",
    "options": [
      {
        "label": "挑战者",
        "scores": {
          "hero": 2
        }
      },
      {
        "label": "守护者",
        "scores": {
          "caregiver": 2
        }
      },
      {
        "label": "变革者",
        "scores": {
          "rebel": 2
        }
      },
      {
        "label": "点燃可能性的人",
        "scores": {
          "magician": 2
        }
      }
    ]
  },
  {
    "id": 15,
    "text": "在人际关系中，你更重视：",
    "options": [
      {
        "label": "真诚自然",
        "scores": {
          "everyman": 2
        }
      },
      {
        "label": "亲密和吸引力",
        "scores": {
          "lover": 2
        }
      },
      {
        "label": "快乐轻松",
        "scores": {
          "jester": 2
        }
      },
      {
        "label": "彼此照顾",
        "scores": {
          "caregiver": 2
        }
      }
    ]
  },
  {
    "id": 16,
    "text": "你做事的动力更多来自：",
    "options": [
      {
        "label": "追求更好的世界",
        "scores": {
          "innocent": 2
        }
      },
      {
        "label": "证明自己的能力",
        "scores": {
          "hero": 2
        }
      },
      {
        "label": "表达内心的想法",
        "scores": {
          "creator": 2
        }
      },
      {
        "label": "建立影响力和掌控感",
        "scores": {
          "ruler": 2
        }
      }
    ]
  },
  {
    "id": 17,
    "text": "当别人说“不可能”时，你会：",
    "options": [
      {
        "label": "想办法证明可以做到",
        "scores": {
          "hero": 2
        }
      },
      {
        "label": "思考有没有新的路径",
        "scores": {
          "magician": 2
        }
      },
      {
        "label": "质疑这个限制本身",
        "scores": {
          "rebel": 2
        }
      },
      {
        "label": "先分析“不可能”的原因",
        "scores": {
          "sage": 2
        }
      }
    ]
  },
  {
    "id": 18,
    "text": "你最喜欢的表达方式是：",
    "options": [
      {
        "label": "创作、设计、写作或表达观点",
        "scores": {
          "creator": 2
        }
      },
      {
        "label": "讲故事、制造气氛",
        "scores": {
          "jester": 2
        }
      },
      {
        "label": "建立亲密连接",
        "scores": {
          "lover": 2
        }
      },
      {
        "label": "提出清晰判断",
        "scores": {
          "sage": 2
        }
      }
    ]
  },
  {
    "id": 19,
    "text": "你最容易吸引哪类人：",
    "options": [
      {
        "label": "需要鼓励和希望的人",
        "scores": {
          "innocent": 2
        }
      },
      {
        "label": "需要归属感的人",
        "scores": {
          "everyman": 2
        }
      },
      {
        "label": "需要保护和支持的人",
        "scores": {
          "caregiver": 2
        }
      },
      {
        "label": "需要方向和秩序的人",
        "scores": {
          "ruler": 2
        }
      }
    ]
  },
  {
    "id": 20,
    "text": "你认为人生最重要的是：",
    "options": [
      {
        "label": "自由体验",
        "scores": {
          "explorer": 2
        }
      },
      {
        "label": "理解真相",
        "scores": {
          "sage": 2
        }
      },
      {
        "label": "创造价值",
        "scores": {
          "creator": 2
        }
      },
      {
        "label": "改变命运",
        "scores": {
          "magician": 2
        }
      }
    ]
  },
  {
    "id": 21,
    "text": "当环境太稳定时，你会：",
    "options": [
      {
        "label": "感到无聊，想出去看看",
        "scores": {
          "explorer": 2
        }
      },
      {
        "label": "开始寻找新的变化",
        "scores": {
          "rebel": 2
        }
      },
      {
        "label": "想加入一些有趣的东西",
        "scores": {
          "jester": 2
        }
      },
      {
        "label": "继续维持稳定，因为稳定很重要",
        "scores": {
          "ruler": 2
        }
      }
    ]
  },
  {
    "id": 22,
    "text": "你更相信：",
    "options": [
      {
        "label": "世界本来可以很美好",
        "scores": {
          "innocent": 2
        }
      },
      {
        "label": "普通人之间的真实连接最珍贵",
        "scores": {
          "everyman": 2
        }
      },
      {
        "label": "爱和美能改变人",
        "scores": {
          "lover": 2
        }
      },
      {
        "label": "幽默能化解很多问题",
        "scores": {
          "jester": 2
        }
      }
    ]
  },
  {
    "id": 23,
    "text": "如果你要影响别人，你更倾向于：",
    "options": [
      {
        "label": "用勇气和行动带动别人",
        "scores": {
          "hero": 2
        }
      },
      {
        "label": "用关心和支持影响别人",
        "scores": {
          "caregiver": 2
        }
      },
      {
        "label": "用颠覆性的观点唤醒别人",
        "scores": {
          "rebel": 2
        }
      },
      {
        "label": "用愿景和信念改变别人",
        "scores": {
          "magician": 2
        }
      }
    ]
  },
  {
    "id": 24,
    "text": "完成一件事后，你最在意：",
    "options": [
      {
        "label": "过程是否有趣",
        "scores": {
          "jester": 2
        }
      },
      {
        "label": "关系是否更亲近",
        "scores": {
          "lover": 2
        }
      },
      {
        "label": "作品是否独特",
        "scores": {
          "creator": 2
        }
      },
      {
        "label": "结果是否成功且可持续",
        "scores": {
          "ruler": 2
        }
      }
    ]
  }
];

const archetypes = {
  innocent: {
    emoji: "🌱",
    name: "天真者",
    en: "The Innocent",
    percent: "8.5%",
    color: "#9FD8A0",
    core: "你内心始终保有一份难得的纯粹。你愿意相信美好，相信善意，相信事情终会往好的方向走。这不是天真无知，而是一种选择：在见过复杂之后，依然不愿让自己变得冷硬。你的存在本身就让周围的人安心、放松。",
    keywords: "纯粹 · 乐观 · 信任 · 向往美好",
    gift: "你有一种治愈他人的能力。在大家都焦虑、算计的时候，你能让人想起最初简单的快乐。你不轻易被负能量污染，这种定力比看起来更稀有。",
    shadow: "你可能不自觉地回避冲突和阴暗面，把头埋进沙子里假装问题不存在。过度的乐观有时会让你忽略真实的风险，或在该说不的时候说了好。",
    advice: "保护你的纯粹，但别用它逃避现实。真正的天真者不是没见过黑暗，而是见过之后依然选择光明。允许自己看见不美好，你的相信才更有力量。",
    relation: "最合拍 → 照顾者（一起守护温暖）｜最互补 → 智者（帮你看清现实）｜最易冲突 → 反叛者（你嫌他偏激，他嫌你太理想）",
    figures: "圣雄甘地式的赤子之心、《小王子》",
  },
  everyman: {
    emoji: "🤝",
    name: "凡人",
    en: "The Everyman",
    percent: "10.8%",
    color: "#C8B79E",
    core: "你脚踏实地，不爱张扬，却是最让人信任的那种人。你相信平等、相信踏实做事，不觉得自己比别人高一等。正因为真实、接地气，大家都愿意和你做朋友、和你共事。你身上有一种“自己人”的踏实感。",
    keywords: "真实 · 踏实 · 亲和 · 归属感",
    gift: "你有极强的共情和融入能力，能让任何群体都接纳你。你不端着，所以别人在你面前也能放松做自己。这种“让人舒服”的能力，是很多人一辈子学不会的。",
    shadow: "你可能太想合群，而压抑了自己的独特和野心。害怕出头、害怕与众不同，有时会让你停在“还行”的位置，不敢去够本可以够到的高度。",
    advice: "接地气是优点，但别用它当借口埋没自己。你可以既是“自己人”，又是出色的那一个。偶尔允许自己冒头一次，你会发现大家依然喜欢你。",
    relation: "最合拍 → 照顾者（彼此都重情）｜最互补 → 统治者（带你看见更大格局）｜最易冲突 → 反叛者（你求稳，他求变）",
    figures: "影视里那些“邻家好人”式的角色",
  },
  hero: {
    emoji: "⚔️",
    name: "英雄",
    en: "The Hero",
    percent: "7.6%",
    color: "#D9534F",
    core: "你天生不服输。面对困难，别人在犹豫，你已经在想怎么解决。你相信努力能改变结果，相信只要够拼就没有过不去的坎。你的勇气和行动力，常常成为身边人的主心骨：你冲在前面，大家就敢跟上。",
    keywords: "勇气 · 行动 · 担当 · 不服输",
    gift: "你有把意志转化为行动的强大能力，越是逆境越能激发你。你能扛事，关键时刻顶得上去，这让你天然具备领导和被信赖的气场。",
    shadow: "你可能把一切都当成“战斗”，硬扛到底，不肯示弱也不肯求助。过度证明自己会让你疲惫，甚至为了赢而忽略身边人的感受，或陷入“非赢不可”的执念。",
    advice: "真正的强大，也包括允许自己休息、允许自己脆弱。不是每件事都要靠死磕。学会分辨“哪些仗值得打”，把力气用在真正重要的地方，你会走得更远。",
    relation: "最合拍 → 统治者（一起成事）｜最互补 → 照顾者（提醒你照顾自己）｜最易冲突 → 弄臣（你嫌他不严肃，他嫌你太紧绷）",
    figures: "木兰、各种逆境翻盘的奋斗者",
  },
  caregiver: {
    emoji: "🤲",
    name: "照顾者",
    en: "The Caregiver",
    percent: "9.4%",
    color: "#E8A0A0",
    core: "你天生心软、也天生有力量去守护别人。看到有人需要帮助，你很难袖手旁观。你的温暖不是软弱，而是一种主动的给予：你愿意付出时间、精力、情感去照顾你在乎的人。有你在的地方，大家都觉得被接住了。",
    keywords: "温暖 · 给予 · 守护 · 共情",
    gift: "你有强大的共情力和奉献精神，能敏锐察觉别人的需要。你创造安全感的能力极强，是很多人心里“可以依靠”的那个人。",
    shadow: "你最容易陷入的，是过度付出、忽略自己。你习惯照顾所有人，却常常忘了照顾自己，甚至用“被需要”来确认自己的价值。久了会委屈、会耗竭，还可能不自觉地控制对方。",
    advice: "先把自己照顾好，你才有持续给予的能量。学会说“不”，不是自私，而是让你的爱更长久。记住：你的价值不取决于你为别人做了多少。",
    relation: "最合拍 → 情人（同样重情感连接）｜最互补 → 智者（帮你拉开距离看清边界）｜最易冲突 → 反叛者（你想照顾，他要独立）",
    figures: "特蕾莎修女式的奉献者",
  },
  explorer: {
    emoji: "🧭",
    name: "探险家",
    en: "The Explorer",
    percent: "8.1%",
    color: "#5BA8C4",
    core: "你骨子里渴望自由和新鲜。被困在一成不变的生活里会让你窒息，你总想看看远方还有什么、自己还能成为什么样子。你不太在意别人怎么走，你要走自己的路。这份对未知的好奇，让你的人生像一场永不停歇的旅程。",
    keywords: "自由 · 好奇 · 独立 · 不被定义",
    gift: "你适应力极强，敢于离开舒适区，能在别人不敢踏足的地方找到属于自己的天地。你的独立和勇气，让你的人生有别人羡慕不来的辽阔。",
    shadow: "你可能太爱“下一个”，而难以停下、难以承诺。逃避束缚有时会变成逃避责任和深度关系，让你看似自由，实则一直在漂、没有根。",
    advice: "自由不只是“离开”，也包括“敢于留下”。试着在某件事、某段关系里扎一次根：你会发现，深度也是一种没体验过的远方。",
    relation: "最合拍 → 反叛者（同样不被驯服）｜最互补 → 凡人（给你稳定的锚）｜最易冲突 → 统治者（你要自由，他要秩序）",
    figures: "各类探险家、说走就走的旅人",
  },
  rebel: {
    emoji: "🔥",
    name: "反叛者",
    en: "The Rebel",
    percent: "6.3%",
    color: "#8E5BC4",
    core: "你天生不信“本该如此”。规则、权威、惯例，在你眼里都不是不可挑战的。你敏锐地看到那些不合理、被大家默默忍受的东西，并且有勇气说出来、去打破它。你的存在让世界不至于一潭死水：改变，常常从像你这样的人开始。",
    keywords: "独立 · 颠覆 · 真实 · 不妥协",
    gift: "你有看穿虚伪、挑战现状的勇气和洞察力。你不被恐惧驯服，敢做别人不敢做的事。这种力量用对地方，就是推动变革的火种。",
    shadow: "你可能为了反对而反对，把“打破”本身当成了目的。愤怒和对抗如果失控，会让你伤人伤己，或陷入孤立：破坏容易，建设难。",
    advice: "最高级的反叛不是摧毁，而是创造更好的替代方案。把你的反叛能量，从“我反对什么”转向“我想建立什么”，你就从破坏者变成了真正的改变者。",
    relation: "最合拍 → 探险家（都追求自由）｜最互补 → 智者（给你的火加上方向）｜最易冲突 → 统治者（天生对立）",
    figures: "各类挑战旧秩序的革新者",
  },
  lover: {
    emoji: "💕",
    name: "情人",
    en: "The Lover",
    percent: "8.9%",
    color: "#E0607E",
    core: "你为情感和连接而活。爱、美、亲密、心动：这些对你来说不是点缀，而是人生的意义本身。你能全身心地投入一段关系、一种热爱，把寻常的日子过出温度和浪漫。和你在一起的人，会感到被深深地看见和珍视。",
    keywords: "热情 · 亲密 · 感受 · 懂得欣赏",
    gift: "你有极强的感受力和魅力，能与人建立深刻的情感连接。你懂得欣赏美、创造亲密，让生活和关系都更有质感。这种“会爱”的能力，本身就是天赋。",
    shadow: "你可能太依赖关系来确认自己，害怕被冷落、被抛弃。把全部重心放在某个人或某段感情上，会让你患得患失，甚至失去自我边界。",
    advice: "先成为自己最爱的人。当你不再需要从别人那里确认价值，你的爱会变得更自由、也更有力量。真正的亲密，是两个完整的人相遇，而不是彼此填补缺口。",
    relation: "最合拍 → 照顾者（情感同频）｜最互补 → 智者（帮你保有自我）｜最易冲突 → 反叛者（你要靠近，他要独立）",
    figures: "经典爱情故事里的深情角色",
  },
  creator: {
    emoji: "🎨",
    name: "创造者",
    en: "The Creator",
    percent: "7.9%",
    color: "#E6953D",
    core: "你脑子里总有“还能怎样”的念头。你不满足于现成的东西，想做出属于自己的、独一无二的作品。无论是艺术、产品、文字还是一个想法，创造的过程本身就让你着迷。你看世界的方式，是“它本可以变成什么样”。",
    keywords: "想象 · 原创 · 表达 · 追求独特",
    gift: "你有把想象变成现实的能力，能看到别人看不到的可能性。你的原创力和审美，让你天然能创造出有个人印记的东西。这个世界因为创造者而不断有新东西诞生。",
    shadow: "你可能陷入完美主义，因为“还不够好”而迟迟不肯完成或拿出来。也可能想法太多、落地太少，或过度认同作品，把批评当成对自己的否定。",
    advice: "完成比完美更重要。先做出来，再慢慢打磨：世界看不到你脑子里的杰作，只看得到你真正交付的东西。允许作品有瑕疵，正是瑕疵让它有人味。",
    relation: "最合拍 → 魔法师（都在创造新现实）｜最互补 → 凡人（帮你把想法落地）｜最易冲突 → 统治者（你要自由，他要规范）",
    figures: "达·芬奇、各领域的原创大师",
  },
  jester: {
    emoji: "🎭",
    name: "弄臣",
    en: "The Jester",
    percent: "6.7%",
    color: "#E8C84A",
    core: "你懂得一个很多人忘了的道理：人生不必那么严肃。你天生会让气氛活起来，能在沉闷里找到笑点，在困境里找到轻松。但你的“好玩”不是肤浅，恰恰相反，很多弄臣看得很透，只是选择用幽默去化解，而不是用沉重去对抗。",
    keywords: "幽默 · 当下 · 轻盈 · 看得开",
    gift: "你有让人快乐的天赋，能瞬间拉近距离、化解尴尬和紧张。你活在当下、不被沉重压垮，这种轻盈本身就是一种智慧，也让你成为人群中的开心果。",
    shadow: "你可能用玩笑来回避真正的情绪和问题，“一笑而过”有时是不想面对。过度追求轻松，也可能让你逃避该承担的责任，或不敢展露认真、脆弱的一面。",
    advice: "幽默是你的礼物，但别用它把所有人都挡在外面。允许自己偶尔严肃、偶尔脆弱：让别人看到笑容背后真实的你，关系才会真正变深。",
    relation: "最合拍 → 探险家（一起轻松玩耍）｜最互补 → 智者（给你的轻盈加上深度）｜最易冲突 → 英雄（你嫌他太紧绷，他嫌你不正经）",
    figures: "卓别林式的喜剧灵魂",
  },
  sage: {
    emoji: "🦉",
    name: "智者",
    en: "The Sage",
    percent: "9.2%",
    color: "#4A90C4",
    core: "你是那种本能地想“看清楚”的人。比起急着行动，你更想先理解：这件事的本质是什么、背后的逻辑是什么、它真的成立吗。你信任思考的力量，相信真相能让人自由。别人热闹时，你常常是那个稍微抽离、在旁边观察和琢磨的人。你不轻易下结论，但一旦想明白了，你说出来的话往往很有分量。",
    keywords: "求真 · 洞察 · 独立思考 · 不被轻易说服",
    gift: "你天生具备别人需要花很多年才能磨出来的东西：分辨真假的能力，和不轻易被情绪、潮流带走的定力。你能在一团乱麻里找到那根线，能在大家都激动的时候保持清醒。人们信任你的判断，因为你不为了讨好谁而说话。",
    shadow: "智者最容易陷入的，是想得太多、迟迟不肯行动。你可能会用“我还没完全想清楚”当作不踏出那一步的理由，结果被困在原地。有时你也会不自觉地站在高处看人，显得疏离，或因为太重视“对不对”，而忽略了“暖不暖”。",
    advice: "你不需要变得更聪明：你需要的是允许自己“在还没完全确定的时候，先动起来”。真相有时不是想出来的，而是做出来、撞出来的。试着偶尔把“我觉得”换成“我们一起试试看”，把一部分清醒留给自己，把一部分温度分给身边的人。智慧不只是看清世界，也是愿意走进它。",
    relation: "最合拍 → 魔法师（一样痴迷于看透本质）｜最互补 → 照顾者（用温度软化你的距离感）｜最易冲突 → 弄臣（你嫌他不正经，他嫌你太较真）",
    figures: "苏格拉底、达·芬奇、尤达大师",
  },
  magician: {
    emoji: "🔮",
    name: "魔法师",
    en: "The Magician",
    percent: "6.8%",
    color: "#7B5FC4",
    core: "你相信万物皆可转化。你不只想理解世界，更想改变它：把一种状态变成另一种，把问题变成机会，把平凡变成神奇。你着迷于事物运作的底层规律，并且有一种把“想法”变成“现实”的能力。在别人眼里，你常常能让看似不可能的事发生。",
    keywords: "转化 · 洞见 · 远见 · 化不可能为可能",
    gift: "你兼具洞察力和创造力，能看透本质，又能催化改变。你擅长在系统层面思考，找到那个“四两拨千斤”的支点。这种把愿景变成现实的能力，是真正稀缺的力量。",
    shadow: "魔法师最大的卡点是想改变一切却容易内耗。你看到太多可能性，反而可能陷入空想、操纵或对掌控的执念。当转化的力量向内反噬，就成了自我消耗。",
    advice: "再大的转化，也要从一个能落地的小行动开始。别让“格局”变成不行动的借口。把你的远见拆成具体的一步，先让一件小事真正发生：真正的魔法，是做出来的，不是想出来的。",
    relation: "最合拍 → 智者（一起探究本质）｜最互补 → 凡人（帮你把愿景接地）｜最易冲突 → 天真者（你求变，他求安稳）",
    figures: "尤达、各领域的远见型变革者",
  },
  ruler: {
    emoji: "👑",
    name: "统治者",
    en: "The Ruler",
    percent: "6.8%",
    color: "#B8860B",
    core: "你天生有一种掌控全局的气场。你善于组织、规划、让混乱变得有序。你在意结果，也愿意为结果负责。别人遇事慌乱时，你能稳住阵脚、做出决断。你追求的不只是个人成功，更是建立一个稳定、运转良好的秩序：无论是一个团队、一个家，还是一份事业。",
    keywords: "领导 · 秩序 · 责任 · 掌控全局",
    gift: "你有天生的领导力和组织力，能把一群人、一堆事拢到一起，朝一个方向推进。你敢做决定、扛得起责任，这让你天然成为别人愿意追随的人。",
    shadow: "统治者最容易陷入的，是太想掌控、反而把自己累垮。你可能不放心放权，事事都要管，或把“我说了算”凌驾于他人感受之上。对失控的恐惧，会让你变得专制或紧绷。",
    advice: "真正的掌控，是连“放手”也能掌控。学会信任和授权，你才能从“亲力亲为”升级为“成就他人”。最好的领导者不是最强的那个人，而是能让身边人都变强的那个人。",
    relation: "最合拍 → 英雄（一起成就大事）｜最互补 → 弄臣（帮你松弛下来）｜最易冲突 → 反叛者（天生对立）",
    figures: "各类卓越的组织者与领袖",
  },
};

const state = {
  view: "landing",
  current: 0,
  answers: Array(questions.length).fill(null),
  selectedNow: null,
  result: null,
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function getScores() {
  const scores = Object.fromEntries(scoreKeys.map((key) => [key, 0]));
  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const option = questions[questionIndex].options[answerIndex];
    Object.entries(option.scores).forEach(([key, value]) => {
      scores[key] += value;
    });
  });
  return scores;
}

function sortScores(scores) {
  return [...scoreKeys].sort((a, b) => {
    const diff = scores[b] - scores[a];
    if (diff !== 0) return diff;
    return archetypeOrder.indexOf(a) - archetypeOrder.indexOf(b);
  });
}

function calculateResult() {
  const scores = getScores();
  const sorted = sortScores(scores);
  return {
    primary: sorted[0],
    secondary: sorted[1],
    hidden: sorted[2],
    scores,
  };
}

function shareUrl(resultKey = state.result?.primary) {
  const url = new URL(window.location.href);
  url.search = "";
  if (resultKey) url.searchParams.set("result", resultKey);
  url.searchParams.set("from", "share");
  return url.toString();
}

function setView(view) {
  state.view = view;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderLanding() {
  app.innerHTML = `
    <section class="view landing">
      <span class="kicker">荣格 12 原型 · 24 题</span>
      <h1 class="hero-title">你的灵魂底色<br />是哪一种？</h1>
      <p class="hero-subtitle">
        从天真者、英雄、智者到魔法师，<br />
        12 种内在原型像一组古老的心理地图。<br />
        用 3 分钟回答 24 个情境选择，<br />
        看见你最自然的力量，也看见它背后的阴影。
      </p>
      <div class="hero-actions">
        <button class="button" data-action="start">开始测试 →</button>
        <span class="meta-note">约 24 题，3 分钟，结果免费可看</span>
      </div>
    </section>
  `;
}

function renderQuiz() {
  const question = questions[state.current];
  const progress = ((state.current + 1) / questions.length) * 100;
  app.innerHTML = `
    <section class="view quiz">
      <div class="topbar">
        <div class="progress-row">
          <button class="button ghost" data-action="back" ${state.current === 0 ? "disabled" : ""}>← 上一题</button>
          <span>第 ${state.current + 1} / ${questions.length} 题</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width: ${progress}%"></div></div>
      </div>
      <article class="question-card">
        <h1 class="question-title">${escapeHtml(question.text)}</h1>
        <div class="options">
          ${question.options
            .map(
              (option, index) => `
                <button class="option ${state.answers[state.current] === index ? "selected" : ""}" data-action="answer" data-index="${index}">
                  <span class="option-index">${String.fromCharCode(65 + index)}</span>
                  ${escapeHtml(option.label)}
                </button>
              `,
            )
            .join("")}
        </div>
      </article>
      <div class="quiz-footer">
        <span class="meta-note">选中后会自动进入下一题，你也可以返回修改。</span>
      </div>
    </section>
  `;
}

function renderAnalyzing() {
  app.innerHTML = `
    <section class="view analyzing">
      <div class="orb"></div>
      <h1 class="question-title">正在分析你的原型…</h1>
      <p class="hero-subtitle">把 24 个选择收束成一张内在地图。</p>
    </section>
  `;
}

function renderResult() {
  const key = state.result.primary;
  const item = archetypes[key];
  const secondary = state.result.secondary ? archetypes[state.result.secondary] : null;
  app.innerHTML = `
    <section class="view result" style="--archetype-color: ${item.color}">
      <article class="result-hero" id="result-card">
        <div class="result-eyebrow">
          <span>你的主原型</span>
          <span>约 ${item.percent} 的人拥有这种底色</span>
        </div>
        <div class="result-icon" aria-hidden="true">${item.emoji}</div>
        <div>
          <h1 class="result-name">${item.name}</h1>
          <div class="result-en">${item.en}</div>
        </div>
        <p class="result-core">${escapeHtml(item.core)}</p>
        <div class="keyword-strip">${escapeHtml(item.keywords)}</div>
        ${resultPersonaNote(state.result)}
      </article>

      <div class="result-grid">
        ${resultSection("你的天赋", item.gift)}
        ${resultSection("你的阴影面", item.shadow)}
        ${resultSection("给你的成长建议", item.advice, true)}
        ${resultSection("你和其他原型", item.relation)}
        ${resultSection("代表人物", item.figures)}
      </div>

      <div class="share-panel">
        <button class="button" data-action="share">分享给朋友测一测 →</button>
        <button class="button secondary" data-action="save-card">保存原型卡片图</button>
        <button class="button secondary" data-action="restart">重新测试</button>
      </div>

      <aside class="email-card">
        <div class="email-copy">
          <strong>想收藏你的完整原型报告？</strong>
          <span>留个邮箱我发给你（可跳过）。我们不会发送垃圾邮件。</span>
        </div>
        <form class="email-form" data-action="email">
          <input type="email" name="email" placeholder="your@email.com" aria-label="邮箱地址" />
          <button class="button secondary" type="submit">留存</button>
        </form>
      </aside>
    </section>
  `;
}

function resultPersonaNote(result) {
  const secondary = result.secondary ? archetypes[result.secondary] : null;
  const hidden = result.hidden ? archetypes[result.hidden] : null;
  if (!secondary && !hidden) return "";
  const secondaryText = secondary ? `你的副人格是 ${secondary.name} ${secondary.emoji}` : "";
  const hiddenText = hidden ? `隐藏人格是 ${hidden.name} ${hidden.emoji}` : "";
  return `<p class="meta-note">${[secondaryText, hiddenText].filter(Boolean).join("；")}。它们会为你的主原型增添另一层气质。</p>`;
}

function resultSection(title, text, full = false) {
  return `
    <article class="result-card ${full ? "full" : ""}">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(text)}</p>
    </article>
  `;
}

function render() {
  if (state.view === "landing") renderLanding();
  if (state.view === "quiz") renderQuiz();
  if (state.view === "analyzing") renderAnalyzing();
  if (state.view === "result") renderResult();
}

function answerQuestion(index) {
  state.answers[state.current] = index;
  renderQuiz();
  window.setTimeout(() => {
    if (state.current < questions.length - 1) {
      state.current += 1;
      renderQuiz();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    state.result = calculateResult();
    setView("analyzing");
    window.setTimeout(() => {
      const url = new URL(window.location.href);
      url.searchParams.set("result", state.result.primary);
      window.history.replaceState({}, "", url);
      setView("result");
    }, 1200);
  }, 260);
}

async function shareResult() {
  const item = archetypes[state.result.primary];
  const url = shareUrl(state.result.primary);
  const payload = {
    title: `我的荣格12人格原型是：${item.name}`,
    text: `我测出来是 ${item.name} ${item.emoji}。来看看你的灵魂底色是哪一种。`,
    url,
  };
  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await copyText(url);
  showToast("链接已复制，可以发给朋友了");
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const lines = [];
  let line = "";
  for (const char of text) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
      if (lines.length >= maxLines) break;
    } else {
      line = testLine;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  lines.forEach((content, index) => ctx.fillText(content, x, y + index * lineHeight));
  return y + lines.length * lineHeight;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function saveCardImage() {
  const key = state.result.primary;
  const item = archetypes[key];
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
  gradient.addColorStop(0, "#1A1B2E");
  gradient.addColorStop(0.58, "#111321");
  gradient.addColorStop(1, "#1A1825");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1920);

  ctx.globalAlpha = 0.34;
  ctx.fillStyle = item.color;
  ctx.beginPath();
  ctx.arc(860, 250, 310, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  drawRoundedRect(ctx, 84, 126, 912, 1400, 42);
  ctx.fillStyle = "rgba(245, 243, 238, 0.08)";
  ctx.fill();
  ctx.strokeStyle = "rgba(245, 243, 238, 0.2)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = "#A9A6B8";
  ctx.font = '32px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText("你的荣格 12 人格主原型", 136, 218);

  drawRoundedRect(ctx, 136, 286, 168, 168, 40);
  ctx.fillStyle = `${item.color}44`;
  ctx.fill();
  ctx.strokeStyle = item.color;
  ctx.stroke();

  ctx.font = '88px "Apple Color Emoji", "Segoe UI Emoji"';
  ctx.fillText(item.emoji, 176, 400);

  ctx.fillStyle = "#F5F3EE";
  ctx.font = '96px "Songti SC", "Noto Serif SC", serif';
  ctx.fillText(item.name, 136, 580);
  ctx.fillStyle = "#A9A6B8";
  ctx.font = "38px Georgia, serif";
  ctx.fillText(item.en, 140, 642);

  ctx.fillStyle = item.color;
  drawRoundedRect(ctx, 136, 710, 808, 86, 24);
  ctx.globalAlpha = 0.18;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = item.color;
  ctx.stroke();
  ctx.fillStyle = "#FFF5DC";
  ctx.font = '34px "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.fillText(item.keywords, 172, 764);

  ctx.fillStyle = "rgba(245, 243, 238, 0.9)";
  ctx.font = '36px "PingFang SC", "Microsoft YaHei", sans-serif';
  wrapText(ctx, item.core, 136, 890, 808, 62, 8);

  ctx.fillStyle = "#C9A227";
  ctx.font = '34px "Songti SC", serif';
  ctx.fillText("荣格12人格原型测试", 136, 1660);
  ctx.fillStyle = "#A9A6B8";
  ctx.font = '28px "PingFang SC", "Microsoft YaHei", sans-serif';
  wrapText(ctx, shareUrl(key), 136, 1714, 808, 42, 2);

  const link = document.createElement("a");
  link.download = `jung-${key}-card.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("原型卡片图已生成");
}

function restart() {
  state.current = 0;
  state.answers = Array(questions.length).fill(null);
  state.result = null;
  const url = new URL(window.location.href);
  url.search = "";
  window.history.replaceState({}, "", url);
  setView("landing");
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "start") {
    state.current = 0;
    setView("quiz");
  }

  if (action === "back" && state.current > 0) {
    state.current -= 1;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (action === "answer") {
    answerQuestion(Number(target.dataset.index));
  }

  if (action === "share") {
    shareResult();
  }

  if (action === "save-card") {
    saveCardImage();
  }

  if (action === "restart") {
    restart();
  }
});

app.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-action='email']");
  if (!form) return;
  event.preventDefault();
  const email = new FormData(form).get("email") || "";
  console.log("optional email:", email);
  form.reset();
  showToast(email ? "已记录到控制台，占位待接后端" : "已跳过，不影响查看结果");
});

function boot() {
  const params = new URLSearchParams(window.location.search);
  const resultKey = params.get("result");
  if (resultKey && archetypes[resultKey]) {
    state.result = { primary: resultKey, secondary: null, hidden: null, scores: null };
    state.view = "result";
  }
  render();
}

boot();
