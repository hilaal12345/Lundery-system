import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function NewOrderForm() {
    const [servicesPrice, setServicesPrice] = useState({ washing: 0, ironing: 0, delivery: 0 });
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        district: "",
        neighborhood: "",
        washing: false,
        ironing: false,
        kg_washing: 0,
        kg_ironing: 0,
        delivery: "none"
    });
    const [totals, setTotals] = useState({ washing: 0, ironing: 0, delivery: 0, total: 0 });

    useEffect(() => {
        axios.get("http://localhost:3000/read/Newservices")
            .then(res => {
                const service = res.data[0];
                setServicesPrice({ washing: service.price_washing, ironing: service.price_ironing, delivery: service.delivery });
            })
            .catch(err => console.error("Error fetching service prices:", err));
    }, []);

    useEffect(() => {
        const washingTotal = form.washing ? form.kg_washing * servicesPrice.washing : 0;
        const ironingTotal = form.ironing ? form.kg_ironing * servicesPrice.ironing : 0;
        let deliveryTotal = 0;

        if (form.delivery === "pickup") deliveryTotal = servicesPrice.delivery;
        else if (form.delivery === "dropoff") deliveryTotal = servicesPrice.delivery;
        else if (form.delivery === "both") deliveryTotal = servicesPrice.delivery * 2;

        const total = washingTotal + ironingTotal + deliveryTotal;

        setTotals({ washing: washingTotal, ironing: ironingTotal, delivery: deliveryTotal, total });
    }, [form, servicesPrice]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setForm({ ...form, [name]: checked });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Confirm Order',
            html: `
                <p>Washing: $${totals.washing}</p>
                <p>Ironing: $${totals.ironing}</p>
                <p>Delivery: $${totals.delivery}</p>
                <p><strong>Total: $${totals.total}</strong></p>
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            try {
                const orderData = {
                    customer: {
                        name: form.name,
                        email: form.email,
                        number: form.number,
                        district: form.district,
                        neighborhood: form.neighborhood
                    },
                    services: {
                        washing: form.washing,
                        ironing: form.ironing,
                        kg_washing: Number(form.kg_washing),
                        kg_ironing: Number(form.kg_ironing)
                    },
                    delivery: form.delivery
                };

                await axios.post("http://localhost:3000/create/order", orderData);
                toast.success("Order created successfully! 🎉");

                setForm({
                    name: "",
                    email: "",
                    number: "",
                    district: "",
                    neighborhood: "",
                    washing: false,
                    ironing: false,
                    kg_washing: 0,
                    kg_ironing: 0,
                    delivery: "none"
                });
            } catch (error) {
                console.error(error);
                toast.error("Error creating order");
            }
        }
    };

    return (
        <div 
            className="max-w-lg mx-auto mt-10 p-6 rounded-xl shadow-md"
            style={{ backgroundColor: "#f8ffe5" }}
        >
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "#06D6A0" }}>
                Place Your Laundry Order
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded-lg">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
                <input type="text" name="number" value={form.number} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border rounded" required />
                <input type="text" name="district" value={form.district} onChange={handleChange} placeholder="District" className="w-full p-2 border rounded" required />
                <input type="text" name="neighborhood" value={form.neighborhood} onChange={handleChange} placeholder="Neighborhood" className="w-full p-2 border rounded" required />

                <div className="flex items-center space-x-4">
                    <label style={{ color: "#06D6A0" }}>
                        <input type="checkbox" name="washing" checked={form.washing} onChange={handleChange} /> Washing (${servicesPrice.washing}/kg)
                    </label>
                    {form.washing && <input type="number" name="kg_washing" value={form.kg_washing} onChange={handleChange} min="0" placeholder="kg" className="border p-1 rounded w-20" />}
                </div>

                <div className="flex items-center space-x-4">
                    <label style={{ color: "#06D6A0" }}>
                        <input type="checkbox" name="ironing" checked={form.ironing} onChange={handleChange} /> Ironing (${servicesPrice.ironing}/kg)
                    </label>
                    {form.ironing && <input type="number" name="kg_ironing" value={form.kg_ironing} onChange={handleChange} min="0" placeholder="kg" className="border p-1 rounded w-20" />}
                </div>

                <div>
                    <label className="font-medium" style={{ color: "#06D6A0" }}>Delivery:</label>
                    <select name="delivery" value={form.delivery} onChange={handleChange} className="border p-1 rounded w-full">
                        <option value="none">None</option>
                        <option value="pickup">Pickup (${servicesPrice.delivery})</option>
                        <option value="dropoff">Dropoff (${servicesPrice.delivery})</option>
                        <option value="both">Both (${servicesPrice.delivery * 2})</option>
                    </select>
                </div>

                <div className="text-lg font-semibold" style={{ color: "#06D6A0" }}>
                    <p>Washing: ${totals.washing}</p>
                    <p>Ironing: ${totals.ironing}</p>
                    <p>Delivery: ${totals.delivery}</p>
                    <p>Total Price: ${totals.total}</p>
                </div>

                <button type="submit" className="w-full bg-[#06D6A0] text-white py-2 px-4 rounded hover:bg-green-600 transition">
                    Submit Order
                </button>
            </form>

            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
}
