import { useState } from "react";
import { RECIPES } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import BeanAmountSelector from "./components/BeanAmountSelector";
import RecipeTimer from "./components/RecipeTimer";
import "./index.css";

const VIEWS = { HOME: "home", SETUP: "setup", TIMER: "timer" };

export default function App() {
  const [view, setView] = useState(VIEWS.HOME);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [beanAmount, setBeanAmount] = useState(null);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setBeanAmount(null);
    setView(VIEWS.SETUP);
  };

  const handleStartRecipe = () => {
    if (beanAmount) setView(VIEWS.TIMER);
  };

  const handleBackToHome = () => {
    setView(VIEWS.HOME);
    setSelectedRecipe(null);
    setBeanAmount(null);
  };

  const handleBackToSetup = () => setView(VIEWS.SETUP);

  return (
    <div className="min-h-svh" style={{ background: "#F5F3EF" }}>
      <div className="max-w-sm mx-auto min-h-svh bg-white flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.06)]">

        {/* ヘッダー */}
        <header className="px-6 pt-10 pb-6">
          {view === VIEWS.HOME ? (
            <div>
              <p className="text-[10px] tracking-[0.3em] text-stone-300 uppercase mb-3">
                Coffee Guide
              </p>
              <h1 className="font-serif-display text-[54px] leading-none" style={{ color: "#B8845A" }}>
                Brew
              </h1>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={view === VIEWS.TIMER ? handleBackToSetup : handleBackToHome}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:bg-stone-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {selectedRecipe && (
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-stone-400 uppercase">
                    {selectedRecipe.nameEn}
                  </p>
                  <p className="text-sm font-medium text-stone-700 leading-tight">
                    {selectedRecipe.name}
                  </p>
                </div>
              )}
            </div>
          )}
        </header>

        {/* コンテンツ */}
        <main className="flex-1 px-6 pb-10 overflow-y-auto">
          {view === VIEWS.HOME && (
            <div>
              <p className="text-[13px] text-stone-400 leading-relaxed mb-8">
                レシピを選んで、豆の量を決めるだけ。<br />タイマーがステップをガイドします。
              </p>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[10px] tracking-[0.25em] text-stone-300 uppercase shrink-0">Recipes</p>
                <div className="h-px flex-1 bg-stone-100" />
              </div>
              <div className="flex flex-col">
                {RECIPES.map((recipe, i) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isLast={i === RECIPES.length - 1}
                    onClick={handleSelectRecipe}
                  />
                ))}
              </div>
            </div>
          )}

          {view === VIEWS.SETUP && selectedRecipe && (
            <BeanAmountSelector
              recipe={selectedRecipe}
              selected={beanAmount}
              onSelect={setBeanAmount}
              onStart={handleStartRecipe}
            />
          )}

          {view === VIEWS.TIMER && selectedRecipe && beanAmount && (
            <RecipeTimer
              recipe={selectedRecipe}
              beanAmount={beanAmount}
              onBack={handleBackToSetup}
            />
          )}
        </main>
      </div>
    </div>
  );
}
