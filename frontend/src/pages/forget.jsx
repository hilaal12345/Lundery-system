import { useState } from "react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

function ForgetPassword() {
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const handleReset = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/forget-password", {
        email,
        newPassword,
      })
      toast.success(res.data.message)
      setEmail("")
      setNewPassword("")
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full border rounded-xl px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              className="w-full border rounded-xl px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl"
          >
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ForgetPassword
