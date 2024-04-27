import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [UserJob, setUserJob] = useState([]);

    useEffect(() => {
        const getUserJobsDetails = async () => {
            const userJobs = await fetch(
                `${import.meta.env.VITE_API_URL}/getJobs`
            );
            const resp = await userJobs.json();
            setUserJob(resp);
        };
        getUserJobsDetails();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

    return (
        <div>
            <div className="container">
                <nav>
                    <ul>
                        <li className="mt-10">
                            <img src="/workconnect_logo.png" alt="" />
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-home"></i>
                                <span className="nav-item">Home</span>
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <i className="fas fa-chart-bar"></i>
                                <span className="nav-item">Analytics</span>
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <i className="fas fa-question-circle"></i>
                                <span className="nav-item">Help</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="logout">
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="nav-item">Log out</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <section className="main mt-0">
                    {/* <div className="main-skills">
                        <div className="card">
                            <i className="fas fa-laptop-code"></i>
                            <h3>Web developemt</h3>
                            <p>Join Over 1 million Students.</p>
                            <button>Get Started</button>
                        </div>
                        <div className="card">
                            <i className="fab fa-wordpress"></i>
                            <h3>WordPress</h3>
                            <p>Join Over 3 million Students.</p>
                            <button>Get Started</button>
                        </div>
                        <div className="card">
                            <i className="fas fa-palette"></i>
                            <h3>graphic design</h3>
                            <p>Join Over 2 million Students.</p>
                            <button>Get Started</button>
                        </div>
                        <div className="card">
                            <i className="fab fa-app-store-ios"></i>
                            <h3>IOS dev</h3>
                            <p>Join Over 1 million Students.</p>
                            <button>Get Started</button>
                        </div>
                    </div> */}

                    <h1>WORKCONNECT ADMIN</h1>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Location
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Pincode
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {UserJob.map((item) => (
                                    <tr
                                        key={item._id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {item.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.location}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.number}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() =>
                                                    handleDelete(item._id)
                                                }
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            eer
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default App;
