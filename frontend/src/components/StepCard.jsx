export default function StepCard({ icon, title }) {
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
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-700 to-emerald-400" />

      {/* Icon */}
      <div className="text-emerald-700 text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>
    </div>
  );
}
