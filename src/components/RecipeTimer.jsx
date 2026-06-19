import { useState, useEffect, useRef, useCallback } from "react";
import { formatTime, getTotalDuration } from "../data/recipes";

export default function RecipeTimer({ recipe, beanAmount, onBack }) {
  const data = recipe.amounts[beanAmount];
  const steps = data.steps;
  const totalDuration = getTotalDuration(steps);

  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const pausedElapsedRef = useRef(0);

  const getCurrentStepIndex = useCallback(
    (time) => {
      for (let i = steps.length - 1; i >= 0; i--) {
        if (time >= steps[i].time) return i;
      }
      return 0;
    },
    [steps]
  );

  const currentStepIndex = getCurrentStepIndex(elapsed);
  const currentStep = steps[currentStepIndex];
  const nextStep = steps[currentStepIndex + 1];
  const overallProgress = Math.min((elapsed / totalDuration) * 100, 100);
  const stepProgress =
    currentStep.duration > 0
      ? Math.min(((elapsed - currentStep.time) / currentStep.duration) * 100, 100)
      : 100;
  const timeUntilNext = nextStep ? nextStep.time - elapsed : 0;

  useEffect(() => {
    if (elapsed >= totalDuration && isRunning) {
      setIsRunning(false);
      setIsFinished(true);
      clearInterval(intervalRef.current);
    }
  }, [elapsed, totalDuration, isRunning]);

  const startTimer = () => {
    startTimeRef.current = Date.now() - pausedElapsedRef.current * 1000;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 100);
  };

  const pauseTimer = () => {
    pausedElapsedRef.current = elapsed;
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    pausedElapsedRef.current = 0;
    setElapsed(0);
    setIsRunning(false);
    setIsFinished(false);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <div className="flex flex-col gap-7">

      {/* タイマー */}
      <div className="text-center pt-2 pb-4">
        <div
          className="font-serif-display text-[72px] leading-none tracking-tight text-stone-900 mb-1"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {formatTime(elapsed)}
        </div>
        <p className="text-[11px] text-stone-300 tracking-widest uppercase">
          / {formatTime(totalDuration)}
        </p>

        {/* プログレスライン */}
        <div className="mt-5 h-px bg-stone-100 relative overflow-hidden rounded-full">
          <div
            className="absolute inset-y-0 left-0 transition-all duration-300 rounded-full"
            style={{ width: `${overallProgress}%`, background: recipe.accent }}
          />
        </div>
      </div>

      {/* 現在ステップ */}
      <div>
        <div className="flex items-baseline justify-between mb-3">
          <p className="text-[11px] tracking-[0.15em] text-stone-400 uppercase">
            現在のステップ
          </p>
          <p className="text-[11px] text-stone-300">
            {currentStepIndex + 1} / {steps.length}
          </p>
        </div>

        <div className="rounded-2xl border border-stone-100 p-5" style={{ background: "#FAFAF8" }}>
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-serif-display text-xl text-stone-900 leading-snug">
              {currentStep.action}
            </h3>
            <div className="flex flex-col items-end gap-1 shrink-0">
              {currentStep.water > 0 && (
                <div
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                  style={{ background: recipe.accent + "18", color: recipe.accent }}
                >
                  {currentStep.water} ml
                </div>
              )}
              {currentStep.temp != null && (
                <div
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                  style={
                    currentStep.temp <= 30
                      ? { background: "#E8F4F8", color: "#4A8FA8" }
                      : currentStep.temp <= 75
                      ? { background: "#FFF3E0", color: "#E07B39" }
                      : { background: "#FDE8E8", color: "#C05050" }
                  }
                >
                  {currentStep.temp}℃
                </div>
              )}
            </div>
          </div>

          <p className="text-[13px] text-stone-500 leading-relaxed">
            {currentStep.instruction}
          </p>

          {currentStep.water > 0 && (
            <p className="mt-2 text-[11px] text-stone-400">
              累計 {currentStep.totalWater} ml / {data.water} ml
            </p>
          )}

          {/* ステップ内プログレス */}
          {currentStep.duration > 0 && !currentStep.isFinal && (
            <div className="mt-4 h-px bg-stone-200 relative overflow-hidden rounded-full">
              <div
                className="absolute inset-y-0 left-0 transition-all duration-300 rounded-full"
                style={{ width: `${stepProgress}%`, background: recipe.accent }}
              />
            </div>
          )}
        </div>
      </div>

      {/* 次のステップ */}
      {nextStep && !isFinished && (
        <div className="flex items-center justify-between py-3 border-t border-b border-stone-100">
          <div>
            <p className="text-[10px] tracking-widest text-stone-300 uppercase mb-0.5">Next</p>
            <p className="text-[13px] text-stone-600 font-medium">{nextStep.action}</p>
            {nextStep.water > 0 && (
              <p className="text-[11px] text-stone-400">{nextStep.water} ml</p>
            )}
          </div>
          <p className="text-[13px] font-light text-stone-400 tabular-nums">
            {timeUntilNext > 0 ? `${timeUntilNext}s` : "—"}
          </p>
        </div>
      )}

      {/* ステップ一覧 */}
      <div>
        <p className="text-[11px] tracking-[0.15em] text-stone-400 uppercase mb-3">
          全ステップ
        </p>
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const isPast = elapsed > step.time + (step.duration || 0) && i !== currentStepIndex;
            const isCurrent = i === currentStepIndex && !isFinished;
            return (
              <div
                key={i}
                className={`flex items-center gap-3 py-2.5 border-b border-stone-50 last:border-0`}
              >
                <div
                  className="w-1 h-1 rounded-full shrink-0 mt-0.5"
                  style={{
                    background: isCurrent
                      ? recipe.accent
                      : isPast
                      ? "#D0CEC9"
                      : "#E7E5E0",
                  }}
                />
                <span
                  className={`flex-1 text-[13px] transition-colors ${
                    isCurrent
                      ? "text-stone-900 font-medium"
                      : isPast
                      ? "text-stone-300 line-through"
                      : "text-stone-500"
                  }`}
                >
                  {step.action}
                </span>
                <span className="text-[11px] text-stone-300 font-light tabular-nums">
                  {formatTime(step.time)}
                </span>
                {step.water > 0 && (
                  <span className="text-[11px] text-stone-300 w-12 text-right tabular-nums">
                    {step.water}ml
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* コントロール */}
      <div className="flex gap-3 pt-2">
        {!isFinished ? (
          <>
            <button
              onClick={isRunning ? pauseTimer : startTimer}
              className="flex-1 py-4 rounded-2xl text-[14px] font-medium tracking-wide transition-all"
              style={{ background: "#1A1A1A", color: "#FFFFFF" }}
            >
              {isRunning ? "一時停止" : elapsed === 0 ? "スタート" : "再開"}
            </button>
            <button
              onClick={resetTimer}
              className="w-14 h-14 rounded-2xl border border-stone-200 text-stone-400 hover:bg-stone-50 transition-colors flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
          </>
        ) : (
          <button
            onClick={resetTimer}
            className="flex-1 py-4 rounded-2xl text-[14px] font-medium tracking-wide transition-all"
            style={{ background: "#1A1A1A", color: "#FFFFFF" }}
          >
            もう一杯淹れる
          </button>
        )}
      </div>

      <button
        onClick={onBack}
        className="text-[12px] text-stone-300 hover:text-stone-500 transition-colors py-1"
      >
        レシピ選択に戻る
      </button>
    </div>
  );
}
