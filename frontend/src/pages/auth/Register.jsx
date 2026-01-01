import AuthCard from "../../components/AuthCard";

export default function Register() {
  return (
    <div className="
      min-h-screen
      bg-slate-950
      flex items-center justify-center
      px-4
    ">
      <AuthCard title="Create Account">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="
              w-full px-4 py-3 rounded-xl
              bg-black/40 text-white
              border border-white/20
              focus:outline-none focus:border-emerald-400
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
              w-full px-4 py-3 rounded-xl
              bg-black/40 text-white
              border border-white/20
              focus:outline-none focus:border-emerald-400
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
              w-full px-4 py-3 rounded-xl
              bg-black/40 text-white
              border border-white/20
              focus:outline-none focus:border-emerald-400
            "
          />

          <select
            className="
              w-full px-4 py-3 rounded-xl
              bg-black/40 text-white
              border border-white/20
              focus:outline-none focus:border-emerald-400
            "
          >
            <option>Donor</option>
            <option>NGO</option>
            <option>Volunteer</option>
          </select>

          <button
            type="submit"
            className="
              w-full py-3 rounded-xl
              bg-emerald-400 text-black
              font-semibold
              hover:bg-emerald-300
              transition
            "
          >
            Register
          </button>
        </form>
      </AuthCard>
    </div>
  );
}
