import { useState, useEffect } from "react";
import { formatTime } from "../data/recipes";

export default function BottomSheet({ recipe, onClose, onStart }) {
  const [beanAmount, setBeanAmount] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 280);
  };

  const displayAmount = beanAmount || 15;
  const displayData = recipe.amounts[displayAmount];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{ background: `rgba(0,0,0,${isVisible ? 0.3 : 0})` }}
      />

      {/* Sheet */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 max-w-sm mx-auto bg-white rounded-t-[28px] flex flex-col shadow-2xl transition-transform duration-[280ms] ease-out"
        style={{
          maxHeight: "90svh",
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full bg-stone-200" />
        </div>

        {/* Header */}
        <div className="px-6 pt-3 pb-4 shrink-0">
          <div className="flex items-start gap-3">
            <div
              className="w-1 rounded-full shrink-0 mt-1 self-stretch"
              style={{ background: recipe.accent }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] tracking-widest text-stone-400 uppercase mb-0.5">
                {recipe.nameEn}
              </p>
              <h2 className="font-serif-display text-2xl text-stone-900 leading-tight">
                {recipe.name}
              </h2>
              {recipe.subtitle && (
                <p className="text-[11px] text-stone-400 mt-0.5">{recipe.subtitle}</p>
              )}
            </div>
            <button
              onClick={handleClose}
              className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-stone-50 transition-colors shrink-0 mt-0.5"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-6">

          {/* Bean amount selector */}
          <div className="mb-6">
            <p className="text-[11px] tracking-[0.15em] text-stone-400 uppercase mb-3">
              豆の量
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[15, 20].map((amount) => {
                const d = recipe.amounts[amount];
                const isSelected = beanAmount === amount;
                return (
                  <button
                    key={amount}
                    onClick={() => setBeanAmount(amount)}
                    className="relative rounded-2xl border p-4 text-left transition-all"
                    style={{
                      borderColor: isSelected ? recipe.accent : "#E7E5E0",
                      background: isSelected ? "#FAFAF8" : "#FFFFFF",
                    }}
                  >
                    {isSelected && (
                      <span
                        className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full"
                        style={{ background: recipe.accent }}
                      />
                    )}
                    <div className="text-2xl font-light text-stone-900 mb-1 tracking-tight">
                      {amount}
                      <span className="text-sm ml-0.5 text-stone-400">g</span>
                    </div>
                    <div className="text-[12px] text-stone-500">
                      湯量 <span className="font-medium text-stone-700">{d.water} ml</span>
                    </div>
                    {d.ice != null && (
                      <div className="text-[12px] text-stone-500">
                        氷 <span className="font-medium text-stone-700">{d.ice} g</span>
                      </div>
                    )}
                    <div className="text-[11px] text-stone-300 mt-0.5">
                      1 : {(d.water / d.beans).toFixed(1)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recipe info */}
          <div className="mb-6">
            <p className="text-[11px] tracking-[0.15em] text-stone-400 uppercase mb-3">
              レシピ情報
            </p>
            {recipe.prep && (
              <div
                className="rounded-xl px-4 py-3 text-[12px] leading-relaxed mb-3"
                style={{ background: recipe.accent + "12", color: recipe.accent }}
              >
                準備: {recipe.prep}
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {[
                { label: "湯温", value: recipe.temperatureLabel },
                { label: "挽き目", value: recipe.grind },
                { label: "器具", value: recipe.equipment },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-baseline">
                  <span className="text-[12px] text-stone-400">{label}</span>
                  <span className="text-[13px] text-stone-700 font-medium text-right max-w-[60%]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="mb-6">
            <div className="flex items-baseline justify-between mb-3">
              <p className="text-[11px] tracking-[0.15em] text-stone-400 uppercase">
                全ステップ
              </p>
              {!beanAmount && (
                <p className="text-[10px] text-stone-300">15g 基準</p>
              )}
            </div>
            <div className="flex flex-col">
              {displayData.steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-2.5 border-b border-stone-50 last:border-0"
                >
                  <span className="text-[11px] text-stone-300 tabular-nums shrink-0 pt-0.5 w-8">
                    {formatTime(step.time)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] text-stone-700 font-medium leading-snug">
                      {step.action}
                    </p>
                    <p className="text-[11px] text-stone-400 leading-relaxed mt-0.5">
                      {step.instruction}
                    </p>
                  </div>
                  {step.water > 0 && (
                    <span
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 mt-0.5"
                      style={{ background: recipe.accent + "18", color: recipe.accent }}
                    >
                      {step.water}ml
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky start button */}
        <div className="px-6 pb-8 pt-3 shrink-0 border-t border-stone-100 bg-white">
          <button
            onClick={() => beanAmount && onStart(recipe, beanAmount)}
            className="w-full py-4 rounded-2xl text-[14px] font-medium tracking-wide transition-all"
            style={{
              background: beanAmount ? "#1A1A1A" : "#E7E5E0",
              color: beanAmount ? "#FFFFFF" : "#A8A5A0",
            }}
          >
            {beanAmount ? "タイマーをスタート" : "豆の量を選んでください"}
          </button>
        </div>
      </div>
    </>
  );
}
