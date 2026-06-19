import { useState } from "react";
import { RECIPES } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
import BeanAmountSelector from "./components/BeanAmountSelector";
import RecipeTimer from "./components/RecipeTimer";
import "./index.css";

const VIEWS = {
  HOME: "home",
  SETUP: "setup",
  TIMER: "timer",
};

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
    if (beanAmount) {
      setView(VIEWS.TIMER);
    }
  };

  const handleBackToHome = () => {
    setView(VIEWS.HOME);
    setSelectedRecipe(null);
    setBeanAmount(null);
  };

  const handleBackToSetup = () => {
    setView(VIEWS.SETUP);
  };

  return (
    <div className="min-h-svh bg-gray-50">
      <div className="max-w-md mx-auto min-h-svh bg-white shadow-sm flex flex-col">
        {/* ヘッダー */}
        <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-4 py-3">
          <div className="flex items-center gap-2">
            {view !== VIEWS.HOME && (
              <button
                onClick={view === VIEWS.TIMER ? handleBackToSetup : handleBackToHome}
                className="p-1.5 -ml-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div>
              <h1 className="text-base font-bold text-gray-800 leading-tight">
                ☕ コーヒーレシピ
              </h1>
              {view !== VIEWS.HOME && selectedRecipe && (
                <p className="text-xs text-gray-400">{selectedRecipe.name}</p>
              )}
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="flex-1 px-4 py-5 overflow-y-auto">
          {view === VIEWS.HOME && (
            <div className="flex flex-col gap-4">
              <div className="mb-2">
                <p className="text-sm text-gray-500 leading-relaxed">
                  レシピを選んで、美味しいコーヒーを淹れましょう。
                  豆の量に合わせた湯量とタイマーでガイドします。
                </p>
              </div>
              {RECIPES.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={handleSelectRecipe}
                />
              ))}
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

        {/* フッター */}
        <footer className="px-4 py-3 border-t border-gray-50 text-center">
          <p className="text-xs text-gray-300">Coffee Recipe Timer</p>
        </footer>
      </div>
    </div>
  );
}
