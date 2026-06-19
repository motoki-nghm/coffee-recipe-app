export default function RecipeCard({ recipe, isLast, onClick }) {
  return (
    <button
      onClick={() => onClick(recipe)}
      className={`group w-full text-left py-6 transition-colors hover:bg-stone-50 -mx-2 px-2 rounded-lg ${
        !isLast ? "border-b border-stone-100" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className="text-[11px] font-medium tracking-widest mt-0.5 shrink-0"
          style={{ color: recipe.accent }}
        >
          {recipe.index}
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="font-serif-display text-xl text-stone-900 leading-snug mb-0.5">
            {recipe.name}
          </h2>
          <p className="text-[11px] tracking-widest text-stone-400 uppercase mb-3">
            {recipe.nameEn}
          </p>
          <p className="text-[13px] text-stone-500 leading-relaxed line-clamp-2">
            {recipe.description}
          </p>
          <div className="mt-3 flex gap-3">
            <span className="text-[11px] text-stone-400">
              {recipe.temperatureLabel} · {recipe.grind}
            </span>
          </div>
        </div>
        <div className="mt-1 text-stone-300 group-hover:text-stone-400 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
