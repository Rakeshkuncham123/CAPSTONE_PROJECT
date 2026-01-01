export default function AuthCard({ title, children }) {
  return (
    <div className="
      w-full max-w-md
      bg-white/10 backdrop-blur-xl
      border border-white/20
      rounded-2xl
      p-8
      shadow-xl
    ">
      <h1 className="text-2xl font-bold text-white text-center mb-6">
        {title}
      </h1>
      {children}
    </div>
  );
}
