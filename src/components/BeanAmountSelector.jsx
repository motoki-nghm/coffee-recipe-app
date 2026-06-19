export default function BeanAmountSelector({ recipe, selected, onSelect, onStart }) {
  const amounts = [15, 20];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-base font-semibold text-gray-700 mb-3">
          コーヒー豆の量を選んでください
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {amounts.map((amount) => {
            const data = recipe.amounts[amount];
            const isSelected = selected === amount;
            return (
              <button
                key={amount}
                onClick={() => onSelect(amount)}
                className={`rounded-xl border-2 p-4 transition-all ${
                  isSelected
                    ? `${recipe.borderColor} ${recipe.bgColor} shadow-md scale-[1.02]`
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className={`text-3xl font-bold mb-1 ${isSelected ? recipe.textColor : "text-gray-700"}`}>
                  {amount}g
                </div>
                <div className="text-sm text-gray-500">
                  湯量: <span className="font-semibold text-gray-700">{data.water}ml</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  比率 1:{(data.water / data.beans).toFixed(1)}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selected && (
        <div className={`rounded-xl ${recipe.bgColor} border ${recipe.borderColor} p-4`}>
          <div className="text-sm font-medium text-gray-600 mb-2">レシピ概要</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">豆の量</span>
              <span className="font-semibold">{selected}g</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">湯量</span>
              <span className="font-semibold">{recipe.amounts[selected].water}ml</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">湯温</span>
              <span className="font-semibold">{recipe.temperature}℃</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">挽き目</span>
              <span className="font-semibold text-xs">{recipe.grind}</span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-white/50 text-xs text-gray-500">
            器具: {recipe.equipment}
          </div>
        </div>
      )}

      <button
        onClick={onStart}
        disabled={!selected}
        className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all ${
          selected
            ? `${recipe.buttonColor} shadow-md hover:shadow-lg active:scale-[0.98]`
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {selected ? `${recipe.emoji} レシピを開始する` : "豆の量を選んでください"}
      </button>
    </div>
  );
}
