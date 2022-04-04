import { useAuth } from "../context/authContext";

export default function Home() {
  const { user, logout, loading } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-cl mb-4">
          Welcome {user.displayName || user.email}{" "}
        </h1>

        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black w-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
