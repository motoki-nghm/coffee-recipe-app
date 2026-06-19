export const RECIPES = [
  {
    id: "kasuya-immersion",
    name: "粕谷式 浸漬法",
    nameEn: "Kasuya Immersion",
    description:
      "粕谷哲さん考案の浸漬式レシピ。Clever Dripperなどのバルブ付きドリッパーを使用。豆をお湯に浸してからドリップすることで、均一な抽出を実現します。",
    accent: "#B5956A",
    index: "01",
    temperature: 93,
    grind: "中挽き（やや粗め）",
    equipment: "Clever Dripper（またはバルブ付き浸漬ドリッパー）",
    amounts: {
      15: {
        beans: 15,
        water: 225,
        steps: [
          {
            time: 0,
            duration: 45,
            action: "蒸らし注湯",
            water: 67,
            totalWater: 67,
            instruction:
              "67mlのお湯を全体に均一にかけ、豆を十分に湿らせます。バルブは閉じたまま。",
            icon: "💧",
          },
          {
            time: 45,
            duration: 120,
            action: "メイン注湯",
            water: 158,
            totalWater: 225,
            instruction:
              "残り158mlのお湯をゆっくり注ぎます。バルブは閉じたまま浸漬を続けます。",
            icon: "🫗",
          },
          {
            time: 165,
            duration: 45,
            action: "ドリップ開始",
            water: 0,
            totalWater: 225,
            instruction:
              "ドリッパーをサーバーの上に乗せ、バルブを開けてドリップを開始します。",
            icon: "⬇️",
          },
          {
            time: 210,
            duration: 0,
            action: "完成",
            water: 0,
            totalWater: 225,
            instruction:
              "ドリップが終わったら完成です。カップに注いでお楽しみください。",
            icon: "✅",
            isFinal: true,
          },
        ],
      },
      20: {
        beans: 20,
        water: 300,
        steps: [
          {
            time: 0,
            duration: 45,
            action: "蒸らし注湯",
            water: 90,
            totalWater: 90,
            instruction:
              "90mlのお湯を全体に均一にかけ、豆を十分に湿らせます。バルブは閉じたまま。",
            icon: "💧",
          },
          {
            time: 45,
            duration: 120,
            action: "メイン注湯",
            water: 210,
            totalWater: 300,
            instruction:
              "残り210mlのお湯をゆっくり注ぎます。バルブは閉じたまま浸漬を続けます。",
            icon: "🫗",
          },
          {
            time: 165,
            duration: 45,
            action: "ドリップ開始",
            water: 0,
            totalWater: 300,
            instruction:
              "ドリッパーをサーバーの上に乗せ、バルブを開けてドリップを開始します。",
            icon: "⬇️",
          },
          {
            time: 210,
            duration: 0,
            action: "完成",
            water: 0,
            totalWater: 300,
            instruction:
              "ドリップが終わったら完成です。カップに注いでお楽しみください。",
            icon: "✅",
            isFinal: true,
          },
        ],
      },
    },
  },
  {
    id: "devil-recipe",
    name: "悪魔のレシピ",
    nameEn: "Devil's Recipe",
    description:
      "短時間で濃厚なコーヒーを抽出する高強度レシピ。高温・短時間で一気に旨みを引き出します。細かい粒度と高温で、濃厚でパンチのある一杯に。",
    accent: "#8B3A3A",
    index: "02",
    temperature: 96,
    grind: "中細挽き",
    equipment: "フレンチプレス または Clever Dripper",
    amounts: {
      15: {
        beans: 15,
        water: 180,
        steps: [
          {
            time: 0,
            duration: 30,
            action: "全量注湯",
            water: 180,
            totalWater: 180,
            instruction:
              "96℃の高温のお湯180mlを30秒かけて一気に注ぎます。豆全体を確実に濡らしてください。",
            icon: "🔥",
          },
          {
            time: 60,
            duration: 30,
            action: "かき混ぜ",
            water: 0,
            totalWater: 180,
            instruction:
              "スプーンで10回しっかりとかき混ぜます。全ての豆がお湯に均一に触れるようにします。",
            icon: "🥄",
          },
          {
            time: 180,
            duration: 60,
            action: "浸漬・待機",
            water: 0,
            totalWater: 180,
            instruction:
              "触れずにそのまま浸漬します。この間に豆から旨みが最大限に抽出されます。",
            icon: "⏳",
          },
          {
            time: 240,
            duration: 30,
            action: "ドリップ開始",
            water: 0,
            totalWater: 180,
            instruction:
              "バルブを開けてドリップ開始、またはプランジャーをゆっくり押し下げます。",
            icon: "⬇️",
          },
          {
            time: 270,
            duration: 0,
            action: "完成",
            water: 0,
            totalWater: 180,
            instruction:
              "完成です！濃厚でパンチのある一杯をお楽しみください。ミルクを加えてラテにしても◎",
            icon: "😈",
            isFinal: true,
          },
        ],
      },
      20: {
        beans: 20,
        water: 240,
        steps: [
          {
            time: 0,
            duration: 30,
            action: "全量注湯",
            water: 240,
            totalWater: 240,
            instruction:
              "96℃の高温のお湯240mlを30秒かけて一気に注ぎます。豆全体を確実に濡らしてください。",
            icon: "🔥",
          },
          {
            time: 60,
            duration: 30,
            action: "かき混ぜ",
            water: 0,
            totalWater: 240,
            instruction:
              "スプーンで10回しっかりとかき混ぜます。全ての豆がお湯に均一に触れるようにします。",
            icon: "🥄",
          },
          {
            time: 180,
            duration: 60,
            action: "浸漬・待機",
            water: 0,
            totalWater: 240,
            instruction:
              "触れずにそのまま浸漬します。この間に豆から旨みが最大限に抽出されます。",
            icon: "⏳",
          },
          {
            time: 240,
            duration: 30,
            action: "ドリップ開始",
            water: 0,
            totalWater: 240,
            instruction:
              "バルブを開けてドリップ開始、またはプランジャーをゆっくり押し下げます。",
            icon: "⬇️",
          },
          {
            time: 270,
            duration: 0,
            action: "完成",
            water: 0,
            totalWater: 240,
            instruction:
              "完成です！濃厚でパンチのある一杯をお楽しみください。ミルクを加えてラテにしても◎",
            icon: "😈",
            isFinal: true,
          },
        ],
      },
    },
  },
  {
    id: "samo-bloom",
    name: "サモブルーム",
    nameEn: "Samo Bloom",
    description:
      "長めのブルーム（蒸らし）でガスを十分に抜いてから抽出するレシピ。豆の新鮮さを最大限に活かし、クリアで甘みのある味わいを引き出します。",
    accent: "#7A8C6E",
    index: "03",
    temperature: 91,
    grind: "中挽き",
    equipment: "ドリッパー（V60・Origami等）",
    amounts: {
      15: {
        beans: 15,
        water: 225,
        steps: [
          {
            time: 0,
            duration: 90,
            action: "ブルーム（蒸らし）",
            water: 45,
            totalWater: 45,
            instruction:
              "45mlのお湯を豆全体に優しくかけます。1分30秒間しっかり蒸らしてガスを放出させます。",
            icon: "🌸",
          },
          {
            time: 90,
            duration: 30,
            action: "1投目",
            water: 60,
            totalWater: 105,
            instruction:
              "60mlを中心から外側へ円を描くように注ぎます。30秒待ちます。",
            icon: "1️⃣",
          },
          {
            time: 120,
            duration: 30,
            action: "2投目",
            water: 60,
            totalWater: 165,
            instruction:
              "さらに60mlを同様に注ぎます。お湯の面をできるだけ一定に保つように。",
            icon: "2️⃣",
          },
          {
            time: 150,
            duration: 60,
            action: "3投目（最終）",
            water: 60,
            totalWater: 225,
            instruction:
              "残り60mlを注ぎます。全量225mlになったらドリップが完全に落ちきるまで待ちます。",
            icon: "3️⃣",
          },
          {
            time: 210,
            duration: 0,
            action: "完成",
            water: 0,
            totalWater: 225,
            instruction:
              "完成です！クリアで甘みのある風味をお楽しみください。",
            icon: "✅",
            isFinal: true,
          },
        ],
      },
      20: {
        beans: 20,
        water: 300,
        steps: [
          {
            time: 0,
            duration: 90,
            action: "ブルーム（蒸らし）",
            water: 60,
            totalWater: 60,
            instruction:
              "60mlのお湯を豆全体に優しくかけます。1分30秒間しっかり蒸らしてガスを放出させます。",
            icon: "🌸",
          },
          {
            time: 90,
            duration: 30,
            action: "1投目",
            water: 80,
            totalWater: 140,
            instruction:
              "80mlを中心から外側へ円を描くように注ぎます。30秒待ちます。",
            icon: "1️⃣",
          },
          {
            time: 120,
            duration: 30,
            action: "2投目",
            water: 80,
            totalWater: 220,
            instruction:
              "さらに80mlを同様に注ぎます。お湯の面をできるだけ一定に保つように。",
            icon: "2️⃣",
          },
          {
            time: 150,
            duration: 60,
            action: "3投目（最終）",
            water: 80,
            totalWater: 300,
            instruction:
              "残り80mlを注ぎます。全量300mlになったらドリップが完全に落ちきるまで待ちます。",
            icon: "3️⃣",
          },
          {
            time: 210,
            duration: 0,
            action: "完成",
            water: 0,
            totalWater: 300,
            instruction:
              "完成です！クリアで甘みのある風味をお楽しみください。",
            icon: "✅",
            isFinal: true,
          },
        ],
      },
    },
  },
];

export function getRecipeData(recipe, beanAmount) {
  return recipe.amounts[beanAmount];
}

export function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function getTotalDuration(steps) {
  const lastStep = steps[steps.length - 1];
  return lastStep.time + lastStep.duration;
}
