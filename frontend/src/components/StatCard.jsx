export default function StatCard({ value, label }) {
  return (
    <div className="transform hover:scale-110 transition">
      <h3 className="text-4xl font-bold">{value}</h3>
      <p className="opacity-90 mt-2">{label}</p>
    </div>
  );
}
