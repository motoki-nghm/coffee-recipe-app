// レシピの追加は RECIPES 配列にオブジェクトを追加するだけ。
// 必須フィールド: id, name, nameEn, description, accent, index, temperature,
//   temperatureLabel, grind, equipment, amounts: { 15: {...}, 20: {...} }
// amounts[n].steps の各ステップ: { time, duration, action, water, totalWater, instruction, temp?, isFinal? }

export const RECIPES = [
  {
    id: "devil-recipe",
    name: "悪魔のレシピ",
    nameEn: "Devil's Hybrid Method",
    description:
      "粕谷哲さん考案のハイブリッドメソッド。前半は透過式（スイッチ開・90℃）で酸味と甘みを引き出し、後半は浸漬式（スイッチ閉・70℃）でまろやかさを加える二刀流レシピ。HARIO Switchが必須です。",
    accent: "#8B3A3A",
    index: "01",
    temperature: 90,
    temperatureLabel: "90 → 70℃",
    grind: "中挽き〜やや粗挽き",
    equipment: "HARIO Switch（必須）",
    amounts: {
      15: {
        beans: 15,
        water: 210,
        steps: [
          {
            time: 0, duration: 30,
            action: "透過 1投目",
            water: 45, totalWater: 45,
            instruction: "スイッチを開いた状態（透過式）で45mlを注ぎます。コーヒーがドリッパーを素通りします。",
            temp: 90,
          },
          {
            time: 30, duration: 10,
            action: "透過 2投目",
            water: 45, totalWater: 90,
            instruction: "続けて45ml注ぎます（累計90ml）。",
            temp: 90,
          },
          {
            time: 40, duration: 35,
            action: "ケトル冷却",
            water: 0, totalWater: 90,
            instruction: "ケトルに少量の水を加えて湯温を70℃に下げます。この間も透過が進みます。",
          },
          {
            time: 75, duration: 30,
            action: "浸漬 注湯",
            water: 120, totalWater: 210,
            instruction: "スイッチを閉じてから、70℃のお湯で残り120mlを一気に注ぎます。低温で雑味を抑えてまろやかに仕上げます。",
            temp: 70,
          },
          {
            time: 105, duration: 105,
            action: "スイッチを開く・ドリップ待機",
            water: 0, totalWater: 210,
            instruction: "スイッチを開いてドリップを開始します。落ちきるまでそのまま待ちます。",
          },
          {
            time: 210, duration: 0,
            action: "完成",
            water: 0, totalWater: 210,
            instruction: "完成です。透過と浸漬の融合が生み出す複雑な味わいをお楽しみください。",
            isFinal: true,
          },
        ],
      },
      20: {
        beans: 20,
        water: 280,
        steps: [
          {
            time: 0, duration: 30,
            action: "透過 1投目",
            water: 60, totalWater: 60,
            instruction: "スイッチを開いた状態（透過式）で60mlを注ぎます。コーヒーがドリッパーを素通りします。",
            temp: 90,
          },
          {
            time: 30, duration: 10,
            action: "透過 2投目",
            water: 60, totalWater: 120,
            instruction: "続けて60ml注ぎます（累計120ml）。",
            temp: 90,
          },
          {
            time: 40, duration: 35,
            action: "ケトル冷却",
            water: 0, totalWater: 120,
            instruction: "ケトルに少量の水を加えて湯温を70℃に下げます。この間も透過が進みます。",
          },
          {
            time: 75, duration: 30,
            action: "浸漬 注湯",
            water: 160, totalWater: 280,
            instruction: "スイッチを閉じてから、70℃のお湯で残り160mlを一気に注ぎます。低温で雑味を抑えてまろやかに仕上げます。",
            temp: 70,
          },
          {
            time: 105, duration: 105,
            action: "スイッチを開く・ドリップ待機",
            water: 0, totalWater: 280,
            instruction: "スイッチを開いてドリップを開始します。落ちきるまでそのまま待ちます。",
          },
          {
            time: 210, duration: 0,
            action: "完成",
            water: 0, totalWater: 280,
            instruction: "完成です。透過と浸漬の融合が生み出す複雑な味わいをお楽しみください。",
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
      "コーヒー研究者 Samo Smrke の研究をもとに Lance Hendrick が広めた手法。常温水（約20℃）で2分間蒸らすことで、高温で逃げてしまう揮発性の香り成分をコーヒーに留めます。",
    accent: "#7A8C6E",
    index: "02",
    temperature: 94,
    temperatureLabel: "20℃ → 94℃",
    grind: "中挽き〜やや粗挽き",
    equipment: "V60 / Origami（ペーパードリップ）",
    amounts: {
      15: {
        beans: 15,
        water: 225,
        steps: [
          {
            time: 0, duration: 120,
            action: "常温水ブルーム",
            water: 45, totalWater: 45,
            instruction: "常温水（約20℃）を45ml注ぎ、2分間蒸らします。高温で揮発する香り成分をコーヒーに閉じ込めます。",
            temp: 20,
          },
          {
            time: 120, duration: 30,
            action: "1投目（熱湯）",
            water: 60, totalWater: 105,
            instruction: "94℃のお湯60mlを中心から外側へ円を描くように注ぎます。",
            temp: 94,
          },
          {
            time: 150, duration: 30,
            action: "2投目",
            water: 60, totalWater: 165,
            instruction: "さらに60ml注ぎます（累計165ml）。",
            temp: 94,
          },
          {
            time: 180, duration: 60,
            action: "3投目（最終）",
            water: 60, totalWater: 225,
            instruction: "残り60mlを注ぎます（累計225ml）。ドリップが落ちきるまで待ちます。",
            temp: 94,
          },
          {
            time: 240, duration: 0,
            action: "完成",
            water: 0, totalWater: 225,
            instruction: "完成です。常温ブルームが引き出した、クリアで香り豊かな一杯をお楽しみください。",
            isFinal: true,
          },
        ],
      },
      20: {
        beans: 20,
        water: 300,
        steps: [
          {
            time: 0, duration: 120,
            action: "常温水ブルーム",
            water: 60, totalWater: 60,
            instruction: "常温水（約20℃）を60ml注ぎ、2分間蒸らします。高温で揮発する香り成分をコーヒーに閉じ込めます。",
            temp: 20,
          },
          {
            time: 120, duration: 30,
            action: "1投目（熱湯）",
            water: 80, totalWater: 140,
            instruction: "94℃のお湯80mlを中心から外側へ円を描くように注ぎます。",
            temp: 94,
          },
          {
            time: 150, duration: 30,
            action: "2投目",
            water: 80, totalWater: 220,
            instruction: "さらに80ml注ぎます（累計220ml）。",
            temp: 94,
          },
          {
            time: 180, duration: 60,
            action: "3投目（最終）",
            water: 80, totalWater: 300,
            instruction: "残り80mlを注ぎます（累計300ml）。ドリップが落ちきるまで待ちます。",
            temp: 94,
          },
          {
            time: 240, duration: 0,
            action: "完成",
            water: 0, totalWater: 300,
            instruction: "完成です。常温ブルームが引き出した、クリアで香り豊かな一杯をお楽しみください。",
            isFinal: true,
          },
        ],
      },
    },
  },

  {
    id: "46method",
    name: "4:6メソッド",
    nameEn: "4:6 Method",
    description:
      "粕谷哲さんが2016年 World Brewers Cup で披露した革命的なV60レシピ。湯量の前40%で甘み・酸味を調整し、後60%で濃度を決める。5投均等注ぎで誰でも再現できます。",
    accent: "#5C7A96",
    index: "03",
    temperature: 93,
    temperatureLabel: "93℃",
    grind: "粗挽き",
    equipment: "HARIO V60 02",
    amounts: {
      15: {
        beans: 15,
        water: 225,
        steps: [
          {
            time: 0, duration: 45,
            action: "1投目（前半 1/2）",
            water: 45, totalWater: 45,
            instruction: "45mlを注ぎます。この2投で甘みと酸味のバランスを決めます。注湯量を増やすと甘み寄り、減らすと酸味寄りに調整できます。",
          },
          {
            time: 45, duration: 45,
            action: "2投目（前半 2/2）",
            water: 45, totalWater: 90,
            instruction: "45ml注ぎます（累計90ml = 前半40%完了）。",
          },
          {
            time: 90, duration: 45,
            action: "3投目（後半 1/3）",
            water: 45, totalWater: 135,
            instruction: "45ml注ぎます。この3投で濃度を決めます。注湯回数を増やすと薄め、減らすと濃いめになります。",
          },
          {
            time: 135, duration: 45,
            action: "4投目（後半 2/3）",
            water: 45, totalWater: 180,
            instruction: "45ml注ぎます（累計180ml）。",
          },
          {
            time: 180, duration: 60,
            action: "5投目（後半 3/3）",
            water: 45, totalWater: 225,
            instruction: "最後の45mlを注ぎます（累計225ml）。ドリップが落ちきるまで待ちます。",
          },
          {
            time: 240, duration: 0,
            action: "完成",
            water: 0, totalWater: 225,
            instruction: "完成です。均一でクリアな一杯をお楽しみください。",
            isFinal: true,
          },
        ],
      },
      20: {
        beans: 20,
        water: 300,
        steps: [
          {
            time: 0, duration: 45,
            action: "1投目（前半 1/2）",
            water: 60, totalWater: 60,
            instruction: "60mlを注ぎます。この2投で甘みと酸味のバランスを決めます。注湯量を増やすと甘み寄り、減らすと酸味寄りに調整できます。",
          },
          {
            time: 45, duration: 45,
            action: "2投目（前半 2/2）",
            water: 60, totalWater: 120,
            instruction: "60ml注ぎます（累計120ml = 前半40%完了）。",
          },
          {
            time: 90, duration: 45,
            action: "3投目（後半 1/3）",
            water: 60, totalWater: 180,
            instruction: "60ml注ぎます。この3投で濃度を決めます。注湯回数を増やすと薄め、減らすと濃いめになります。",
          },
          {
            time: 135, duration: 45,
            action: "4投目（後半 2/3）",
            water: 60, totalWater: 240,
            instruction: "60ml注ぎます（累計240ml）。",
          },
          {
            time: 180, duration: 60,
            action: "5投目（後半 3/3）",
            water: 60, totalWater: 300,
            instruction: "最後の60mlを注ぎます（累計300ml）。ドリップが落ちきるまで待ちます。",
          },
          {
            time: 240, duration: 0,
            action: "完成",
            water: 0, totalWater: 300,
            instruction: "完成です。均一でクリアな一杯をお楽しみください。",
            isFinal: true,
          },
        ],
      },
    },
  },
  {
    id: "ice-brew",
    name: "急冷式アイスコーヒー",
    nameEn: "Samo Bloom Flash Brew",
    description:
      "別容器で2分間サモブルームをしてから急冷するアイスコーヒーレシピ。外部蒸らしで香りを閉じ込めつつ、少量の熱湯で濃縮抽出。氷で急冷しクリアでフルーティーな味わいに。",
    accent: "#3D7EAA",
    index: "04",
    temperature: 91,
    temperatureLabel: "90〜92℃",
    grind: "中挽き〜やや細挽き（コマンダンテ 20クリック相当）",
    equipment: "ペーパードリッパー ＋ 蒸らし用の小容器",
    prep: "サーバーに氷を入れ、ペーパーフィルターを水道水でリンスしてドリッパーにセット",
    amounts: {
      15: {
        beans: 15,
        water: 110,
        steps: [
          {
            time: 0, duration: 120,
            action: "外部サモブルーム",
            water: 38, totalWater: 38,
            instruction: "別の小容器に粉15gを入れ、常温水38gを注ぎます。2分間じっくりそのまま蒸らします。",
            temp: 20,
          },
          {
            time: 120, duration: 20,
            action: "ドリッパーへ移送",
            water: 0, totalWater: 38,
            instruction: "蒸らした粉をドリッパーへ移します。水気が少し落ち着いたら注湯開始。",
          },
          {
            time: 140, duration: 15,
            action: "1投目（熱湯）",
            water: 50, totalWater: 88,
            instruction: "50gを注ぎます（スケール累計88g）。",
            temp: 91,
          },
          {
            time: 155, duration: 35,
            action: "待機",
            water: 0, totalWater: 88,
            instruction: "1投目から50秒たったら2投目へ。",
          },
          {
            time: 190, duration: 15,
            action: "2投目（熱湯）",
            water: 22, totalWater: 110,
            instruction: "スケール累計が110gになるまで注ぎます（+22g）。",
            temp: 91,
          },
          {
            time: 205, duration: 100,
            action: "落ち切り待ち",
            water: 0, totalWater: 110,
            instruction: "お湯を注ぎ始めてから2分45秒でドリッパーを外します（目安：4分45秒ごろ）。",
          },
          {
            time: 305, duration: 0,
            action: "完成",
            water: 0, totalWater: 110,
            instruction: "サーバーを軽くスワールして氷となじませ、氷を入れたグラスに注いでステアして完成。",
            isFinal: true,
          },
        ],
      },
      20: {
        beans: 20,
        water: 145,
        steps: [
          {
            time: 0, duration: 120,
            action: "外部サモブルーム",
            water: 50, totalWater: 50,
            instruction: "別の小容器に粉20gを入れ、常温水50gを注ぎます。2分間じっくりそのまま蒸らします。",
            temp: 20,
          },
          {
            time: 120, duration: 20,
            action: "ドリッパーへ移送",
            water: 0, totalWater: 50,
            instruction: "蒸らした粉をドリッパーへ移します。水気が少し落ち着いたら注湯開始。",
          },
          {
            time: 140, duration: 15,
            action: "1投目（熱湯）",
            water: 65, totalWater: 115,
            instruction: "65gを注ぎます（スケール累計115g）。",
            temp: 91,
          },
          {
            time: 155, duration: 35,
            action: "待機",
            water: 0, totalWater: 115,
            instruction: "1投目から50秒たったら2投目へ。",
          },
          {
            time: 190, duration: 15,
            action: "2投目（熱湯）",
            water: 30, totalWater: 145,
            instruction: "スケール累計が145gになるまで注ぎます（+30g）。",
            temp: 91,
          },
          {
            time: 205, duration: 100,
            action: "落ち切り待ち",
            water: 0, totalWater: 145,
            instruction: "お湯を注ぎ始めてから2分45秒でドリッパーを外します（目安：4分45秒ごろ）。",
          },
          {
            time: 305, duration: 0,
            action: "完成",
            water: 0, totalWater: 145,
            instruction: "サーバーを軽くスワールして氷となじませ、氷を入れたグラスに注いでステアして完成。",
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
