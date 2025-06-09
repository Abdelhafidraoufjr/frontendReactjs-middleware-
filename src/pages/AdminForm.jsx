// AdminForm.jsx

const AdminForm = ({ password, setPassword, message }) => {
  return (
    <div className="space-y-4">
      <input
        type="password"
        name="adminPassword"
        placeholder="Mot de passe administrateur"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full rounded-md px-3 py-1.5 text-base bg-white text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
        required
      />
      {message && (
        <p
          className={`text-sm text-center font-semibold ${
            message.includes('✅') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default AdminForm;

