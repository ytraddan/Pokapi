export default function TypesRow({ types, selectedType, handleTypeToggle }) {
  console.log(types);
  return (
    <div className="my-2 flex flex-wrap justify-center gap-1">
      {types.map((type) => {
        const isSelected = type.name === selectedType;
        return (
          <button
            key={type.name}
            value={type.name}
            onClick={(e) => handleTypeToggle(e, type.name)}
            className={`rounded-full border ${type.color} px-3 py-1 text-zinc-200 transition-all hover:brightness-110 ${isSelected ? "brightness-120 scale-105 border-white shadow-lg" : "border-zinc-950"}`}
          >
            {type.emoji} {type.name}
          </button>
        );
      })}
    </div>
  );
}