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
          <h2 className="font-serif-display text-xl text-stone-900 leading-snug mb-1">
            {recipe.name}
          </h2>
          {recipe.subtitle && (
            <span
              className="inline-block text-[10px] tracking-wide border rounded-full px-2 py-0.5 mb-1"
              style={{ color: "#B8845A", borderColor: "#B8845A55" }}
            >
              {recipe.subtitle}
            </span>
          )}
          <div className="flex items-center gap-2 mb-3">
            <p className="text-[11px] tracking-widest text-stone-400 uppercase">
              {recipe.nameEn}
            </p>
            {recipe.category && (
              <span
                className="text-[9px] font-semibold tracking-widest uppercase px-1.5 py-0.5 rounded-full"
                style={
                  recipe.category === "ice"
                    ? { background: "#E8F4F8", color: "#4A8FA8" }
                    : { background: "#FDE8E8", color: "#C05050" }
                }
              >
                {recipe.category === "ice" ? "ICE" : "HOT"}
              </span>
            )}
          </div>
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
