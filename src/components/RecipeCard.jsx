export default function RecipeCard({ recipe, onClick }) {
  return (
    <button
      onClick={() => onClick(recipe)}
      className={`w-full text-left rounded-2xl border-2 ${recipe.borderColor} ${recipe.bgColor} p-5 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]`}
    >
      <div className="flex items-start gap-4">
        <div className={`text-4xl`}>{recipe.emoji}</div>
        <div className="flex-1 min-w-0">
          <h2 className={`text-xl font-bold ${recipe.textColor} mb-1`}>
            {recipe.name}
          </h2>
          <p className="text-xs text-gray-500 mb-2">{recipe.nameEn}</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {recipe.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 bg-white/70 rounded-full px-2 py-0.5 text-xs text-gray-600">
              🌡️ {recipe.temperature}℃
            </span>
            <span className="inline-flex items-center gap-1 bg-white/70 rounded-full px-2 py-0.5 text-xs text-gray-600">
              ⚙️ {recipe.grind}
            </span>
          </div>
        </div>
        <div className={`text-gray-400 mt-1`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
