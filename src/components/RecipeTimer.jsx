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

  const getCurrentStepIndex = useCallback((time) => {
    for (let i = steps.length - 1; i >= 0; i--) {
      if (time >= steps[i].time) return i;
    }
    return 0;
  }, [steps]);

  const currentStepIndex = getCurrentStepIndex(elapsed);
  const currentStep = steps[currentStepIndex];
  const nextStep = steps[currentStepIndex + 1];

  const stepProgress = currentStep.duration > 0
    ? Math.min(((elapsed - currentStep.time) / currentStep.duration) * 100, 100)
    : 100;

  const overallProgress = Math.min((elapsed / totalDuration) * 100, 100);

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
      const newElapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setElapsed(newElapsed);
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

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* タイマー表示 */}
      <div className={`rounded-2xl ${recipe.bgColor} border-2 ${recipe.borderColor} p-6 text-center`}>
        <div className={`text-6xl font-mono font-bold ${recipe.textColor} mb-2`}>
          {formatTime(elapsed)}
        </div>
        <div className="text-sm text-gray-500">
          総時間: {formatTime(totalDuration)}
        </div>

        {/* 全体プログレスバー */}
        <div className="mt-4 h-2 bg-white/50 rounded-full overflow-hidden">
          <div
            className={`h-full ${recipe.accentColor} rounded-full transition-all duration-300`}
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      {/* 現在のステップ */}
      <div className="rounded-2xl bg-white border-2 border-gray-100 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{currentStep.icon}</span>
          <div>
            <div className={`font-bold text-lg ${isFinished ? "text-green-600" : recipe.textColor}`}>
              {currentStep.action}
            </div>
            <div className="text-xs text-gray-400">
              ステップ {currentStepIndex + 1} / {steps.length}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {currentStep.instruction}
        </p>

        {currentStep.water > 0 && (
          <div className={`inline-flex items-center gap-2 ${recipe.bgColor} rounded-lg px-3 py-2 text-sm font-semibold ${recipe.textColor}`}>
            <span>💧</span>
            <span>
              {currentStep.water}ml 注湯
              <span className="text-xs font-normal ml-1 text-gray-500">
                （累計 {currentStep.totalWater}ml / {data.water}ml）
              </span>
            </span>
          </div>
        )}

        {/* ステップ内プログレス */}
        {currentStep.duration > 0 && !currentStep.isFinal && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>ステップ進捗</span>
              <span>{Math.round(stepProgress)}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${recipe.accentColor} rounded-full transition-all duration-300`}
                style={{ width: `${stepProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* 次のステップ */}
      {nextStep && !isFinished && (
        <div className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-base">{nextStep.icon}</span>
              <span>次: <span className="font-medium text-gray-700">{nextStep.action}</span></span>
            </div>
            <span className="text-sm font-mono text-gray-500">
              {timeUntilNext > 0 ? `${timeUntilNext}秒後` : "まもなく"}
            </span>
          </div>
          {nextStep.water > 0 && (
            <div className="text-xs text-gray-400 mt-1 ml-6">
              💧 {nextStep.water}ml
            </div>
          )}
        </div>
      )}

      {/* 全ステップ一覧 */}
      <div className="rounded-xl bg-white border border-gray-100 overflow-hidden">
        <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-500 border-b border-gray-100">
          全ステップ
        </div>
        {steps.map((step, i) => {
          const isPast = elapsed > step.time + (step.duration || 0);
          const isCurrent = i === currentStepIndex && !isFinished;
          return (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-2.5 border-b border-gray-50 last:border-0 transition-colors ${
                isCurrent ? `${recipe.bgColor}` : isPast ? "bg-gray-50/50" : "bg-white"
              }`}
            >
              <span className={`text-lg ${isPast && !isCurrent ? "opacity-40" : ""}`}>
                {isPast && !isCurrent ? "✅" : step.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium truncate ${isCurrent ? recipe.textColor : isPast ? "text-gray-400" : "text-gray-600"}`}>
                  {step.action}
                </div>
              </div>
              <div className="text-xs text-gray-400 font-mono shrink-0">
                {formatTime(step.time)}
                {step.water > 0 && <span className="ml-1 text-blue-400">{step.water}ml</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* コントロールボタン */}
      <div className="flex gap-3">
        {!isFinished ? (
          <>
            <button
              onClick={isRunning ? pauseTimer : startTimer}
              className={`flex-1 py-4 rounded-xl text-white font-bold text-lg transition-all shadow-md hover:shadow-lg active:scale-[0.98] ${recipe.buttonColor}`}
            >
              {isRunning ? "⏸ 一時停止" : elapsed === 0 ? "▶ スタート" : "▶ 再開"}
            </button>
            <button
              onClick={resetTimer}
              className="px-5 py-4 rounded-xl bg-gray-100 text-gray-600 font-bold transition-all hover:bg-gray-200 active:scale-[0.98]"
            >
              ↺
            </button>
          </>
        ) : (
          <button
            onClick={resetTimer}
            className={`flex-1 py-4 rounded-xl text-white font-bold text-lg transition-all shadow-md ${recipe.buttonColor}`}
          >
            {recipe.emoji} もう一杯淹れる
          </button>
        )}
      </div>

      <button
        onClick={onBack}
        className="w-full py-3 rounded-xl text-gray-500 text-sm font-medium hover:text-gray-700 hover:bg-gray-50 transition-colors"
      >
        ← レシピ選択に戻る
      </button>
    </div>
  );
}
