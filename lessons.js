// ─────────────────────────────────────────────────────────────
// Mandarin Ninja – lesson data
//
// HOW TO ADD A LESSON
//   1. Copy a whole lesson block (from `{` to `},`) and paste it below.
//   2. Give it a new unique `id` (the date works well) and a `title`.
//   3. Add words and sentences. Commit the file. That's it.
//
// WORDS:      { type:"word", zh:"菜單", py:"càidān", en:"menu" }
// SENTENCES:  { type:"sentence", zh:"...", py:"...", en:"...",
//               parts:[ {zh:"..", py:".."}, ... ] }
//     `parts` is the sentence cut into 3–5 chunks, in order.
//     It powers the word-order boss rounds. Leave it out and the
//     sentence becomes a "pick the meaning" round instead.
//
// OPTIONAL FIELDS
//   group:"pay"     items sharing a group are never used as wrong
//                   answers for each other (for near-identical meanings)
//   audio:"audio/caidan.mp3"   play this recording instead of the
//                   browser voice (put the file in the audio/ folder)
// ─────────────────────────────────────────────────────────────
window.LESSONS = [
  {
    id: "2026-11-09",
    title: "Restaurant & shop",
    items: [
      // ── words ──────────────────────────────────────────────
      { type: "word", zh: "先生", py: "xiānshēng", en: "sir / Mr" },
      { type: "word", zh: "小姐", py: "xiǎojiě", en: "miss / madam" },
      { type: "word", zh: "請問", py: "qǐngwèn", en: "may I ask / excuse me" },
      { type: "word", zh: "幾位", py: "jǐ wèi", en: "how many people (polite)", group: "howmany" },
      { type: "word", zh: "幾個", py: "jǐ ge", en: "how many (casual)", group: "howmany" },
      { type: "word", zh: "菜單", py: "càidān", en: "menu" },
      { type: "word", zh: "桌子", py: "zhuōzi", en: "table" },
      { type: "word", zh: "吃飽", py: "chī bǎo", en: "to eat until full" },
      { type: "word", zh: "結帳", py: "jiézhàng", en: "to settle the bill", group: "pay" },
      { type: "word", zh: "付錢", py: "fùqián", en: "to pay (money)", group: "pay" },
      { type: "word", zh: "先", py: "xiān", en: "first" },
      { type: "word", zh: "再", py: "zài", en: "then / only after" },
      { type: "word", zh: "拿", py: "ná", en: "to take / carry" },
      { type: "word", zh: "前面", py: "qiánmiàn", en: "the front" },
      { type: "word", zh: "小吃店", py: "xiǎochī diàn", en: "small-eats shop / snack restaurant" },
      { type: "word", zh: "需要", py: "xūyào", en: "to need" },
      { type: "word", zh: "現金", py: "xiànjīn", en: "cash" },
      { type: "word", zh: "信用卡", py: "xìnyòngkǎ", en: "credit card" },
      { type: "word", zh: "會員", py: "huìyuán", en: "member / membership" },
      { type: "word", zh: "要不要", py: "yào bú yào", en: "do you want (A-not-A question)" },
      { type: "word", zh: "加熱", py: "jiā rè", en: "to heat up" },
      { type: "word", zh: "放涼", py: "fàng liáng", en: "to leave to cool down" },
      { type: "word", zh: "寄", py: "jì", en: "to send / deposit", group: "send" },
      { type: "word", zh: "寄杯", py: "jìbēi", en: "stored drink (prepaid cup)" },
      { type: "word", zh: "行李", py: "xíngli", en: "luggage" },
      { type: "word", zh: "寄行李", py: "jì xíngli", en: "to send or leave luggage", group: "send" },

      // ── sentences ──────────────────────────────────────────
      { type: "sentence", zh: "先生你好", py: "Xiānshēng nǐ hǎo", en: "Hello sir" },
      { type: "sentence", zh: "請問幾位？", py: "Qǐngwèn jǐ wèi?", en: "How many people please?",
        parts: [ {zh:"請問", py:"qǐngwèn"}, {zh:"幾", py:"jǐ"}, {zh:"位", py:"wèi"} ] },
      { type: "sentence", zh: "菜單在桌上", py: "Càidān zài zhuō shàng", en: "The menu is on the table",
        parts: [ {zh:"菜單", py:"càidān"}, {zh:"在", py:"zài"}, {zh:"桌上", py:"zhuō shàng"} ] },
      { type: "sentence", zh: "吃飽了再結帳", py: "Chī bǎo le zài jiézhàng", en: "Pay after you have finished eating",
        parts: [ {zh:"吃飽了", py:"chī bǎo le"}, {zh:"再", py:"zài"}, {zh:"結帳", py:"jiézhàng"} ] },
      { type: "sentence", zh: "先拿菜單來前面結帳", py: "Xiān ná càidān lái qiánmiàn jiézhàng", en: "First bring the menu to the front and pay",
        parts: [ {zh:"先拿", py:"xiān ná"}, {zh:"菜單", py:"càidān"}, {zh:"來前面", py:"lái qiánmiàn"}, {zh:"結帳", py:"jiézhàng"} ] },
      { type: "sentence", zh: "我需要先結帳嗎？", py: "Wǒ xūyào xiān jiézhàng ma?", en: "Do I need to pay first?",
        parts: [ {zh:"我", py:"wǒ"}, {zh:"需要", py:"xūyào"}, {zh:"先", py:"xiān"}, {zh:"結帳", py:"jiézhàng"}, {zh:"嗎", py:"ma"} ] },
      { type: "sentence", zh: "要不要加熱？", py: "Yào bú yào jiā rè?", en: "Would you like it heated up?", group: "heat",
        parts: [ {zh:"要不要", py:"yào bú yào"}, {zh:"加", py:"jiā"}, {zh:"熱", py:"rè"} ] },
      { type: "sentence", zh: "需要加熱嗎？", py: "Xūyào jiā rè ma?", en: "Do you need it heated?", group: "heat",
        parts: [ {zh:"需要", py:"xūyào"}, {zh:"加熱", py:"jiā rè"}, {zh:"嗎", py:"ma"} ] },
      { type: "sentence", zh: "我有寄杯", py: "Wǒ yǒu jìbēi", en: "I have a stored drink (prepaid cup)",
        parts: [ {zh:"我", py:"wǒ"}, {zh:"有", py:"yǒu"}, {zh:"寄杯", py:"jìbēi"} ] }
    ]
  }
];
