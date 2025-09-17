// import React, { useState } from "react";
// import axios from "axios";

import Header from "../components/header"
import CustomerDisplay from "../Dash/CustomerDisplay"
import CustomerOrder from "../user/order user"

// function ProfileForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//   });
//   const [pImage, setPImage] = useState(null);
//   const [message, setMessage] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       Object.keys(formData).forEach(key => data.append(key, formData[key]));
//       if (pImage) data.append("pImage", pImage);

//       const res = await axios.post("http://localhost:5000/create/profiles", data, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       setMessage(res.data.message);

//       // Clear form
//       setFormData({ name: "", bio: ""});
//       setPImage(null);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Server error");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-gray-100 rounded">
//       <h2 className="text-2xl font-bold mb-4">Create Profile</h2>
//       {message && <p className="mb-4 text-green-600">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded"/>
//         <input type="text" name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} required className="w-full p-2 border rounded"/>
//         {/* <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded"/>
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded"/>
//         <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded"/>
//         <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded"/> */}
//         <input type="file" onChange={e => setPImage(e.target.files[0])} className="w-full"/>
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Create Profile</button>
//       </form>
//     </div>
//   );
// }

// export default ProfileForm;





// import React, { useState } from "react";
// import axios from "axios";

// function ProfileForm() {
//   const [name, setName] = useState("");
//   const [bio, setBio] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [phone, setPhone] = useState("");
//   // const [address, setAddress] = useState("");
//   const [pImage, setPImage] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("bio", bio);
//       // formData.append("email", email);
//       // formData.append("password", password);
//       // formData.append("phone", phone);
//       // formData.append("address", address);
//       if (pImage) formData.append("pImage", pImage);

//       const res = await axios.post("http://localhost:5000/api/profiles", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setMessage(res.data.message);
//       // Clear form
//       setName(""); setBio(""); setPImage(null);
//     } catch (error) {
//       console.error(error);
//       setMessage(error.response?.data?.message || "Server error");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-gray-100 rounded">
//       <h2 className="text-2xl font-bold mb-4">Create Profile</h2>
//       {message && <p className="mb-4">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required className="w-full p-2 border rounded"/>
//         <input type="text" placeholder="Bio" value={bio} onChange={e => setBio(e.target.value)} required className="w-full p-2 border rounded"/>
//         {/* <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-2 border rounded"/>
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-2 border rounded"/>
//         <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-2 border rounded"/>
//         <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} className="w-full p-2 border rounded"/> */}
//         <input type="file" onChange={e => setPImage(e.target.files[0])} className="w-full"/>
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Create Profile</button>
//       </form>
//     </div>
//   );
// }



// export default ProfileForm;
// import CustomerOrder from "./user/order user"
// import CustomerOrder from "../user/order user"

function Profile(){
  return<>
  
   
  
  </>
  
}
export default Profile



