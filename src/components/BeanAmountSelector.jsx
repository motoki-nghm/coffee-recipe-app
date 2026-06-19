export default function BeanAmountSelector({ recipe, selected, onSelect, onStart }) {
  const amounts = [15, 20];

  return (
    <div className="flex flex-col gap-8">

      {/* 豆量セレクター */}
      <div>
        <p className="text-[11px] tracking-[0.15em] text-stone-400 uppercase mb-4">
          豆の量
        </p>
        <div className="grid grid-cols-2 gap-3">
          {amounts.map((amount) => {
            const data = recipe.amounts[amount];
            const isSelected = selected === amount;
            return (
              <button
                key={amount}
                onClick={() => onSelect(amount)}
                className="relative rounded-2xl border p-5 text-left transition-all"
                style={{
                  borderColor: isSelected ? recipe.accent : "#E7E5E0",
                  background: isSelected ? "#FAFAF8" : "#FFFFFF",
                }}
              >
                {isSelected && (
                  <span
                    className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full"
                    style={{ background: recipe.accent }}
                  />
                )}
                <div className="text-3xl font-light text-stone-900 mb-2 tracking-tight">
                  {amount}
                  <span className="text-base ml-0.5 text-stone-400">g</span>
                </div>
                <div className="text-[12px] text-stone-500">
                  湯量 <span className="font-medium text-stone-700">{data.water} ml</span>
                </div>
                <div className="text-[11px] text-stone-300 mt-0.5">
                  1 : {(data.water / data.beans).toFixed(1)}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* レシピ詳細 */}
      {selected && (
        <div className="border-t border-stone-100 pt-6">
          <p className="text-[11px] tracking-[0.15em] text-stone-400 uppercase mb-4">
            レシピ詳細
          </p>
          <div className="flex flex-col gap-3">
            {[
              { label: "豆の量", value: `${selected} g` },
              { label: "湯量", value: `${recipe.amounts[selected].water} ml` },
              { label: "湯温", value: recipe.temperatureLabel },
              { label: "挽き目", value: recipe.grind },
              { label: "器具", value: recipe.equipment },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-baseline">
                <span className="text-[12px] text-stone-400">{label}</span>
                <span className="text-[13px] text-stone-700 font-medium text-right max-w-[60%]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* スタートボタン */}
      <button
        onClick={onStart}
        disabled={!selected}
        className="w-full py-4 rounded-2xl text-[14px] font-medium tracking-wide transition-all"
        style={{
          background: selected ? "#1A1A1A" : "#E7E5E0",
          color: selected ? "#FFFFFF" : "#A8A5A0",
        }}
      >
        {selected ? "はじめる" : "豆の量を選んでください"}
      </button>
    </div>
  );
}
