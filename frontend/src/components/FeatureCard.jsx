export default function RoleCard({ title, desc }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-8
        shadow-lg
        relative
        overflow-hidden
        transition
        duration-300
        hover:-translate-y-3
        hover:scale-105
        hover:shadow-2xl
      "
    >
      {/* Gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-700 to-emerald-400" />

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm">
        {desc}
      </p>
    </div>
  );
}
