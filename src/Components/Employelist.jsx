import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "./table.css"

export default function Employelist() {
    const [list, setlist] = useState([])


    async function getlistdata() {
        const response = await fetch("http://localhost:8080/emp-get")
        const newresonse = await response.json();
        setlist(newresonse)
    }

    useEffect(() => {
        getlistdata();
    }, [])


    //delete-employe-api...............................
    const Deleteemloye = async (e) => {
        const response = await fetch(`http://localhost:8080/employee/${e}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const getdata = await response.json();
        toast.success(getdata.message)
        console.log(getdata)
    }

    return (
        <>
           
            {
                list.length>0?
                <>
                 <Navbar />
            <ToastContainer position="top-right" />
                 <div className="employe-list">
                <table className="styled-table"  border="2px">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                   
                            {
                                list.map((data) => {
                                    return (
                                        <>
                                        <tbody>
                                        <tr>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.number}</td>
                                                <td><button onClick={() => Deleteemloye(data._id)} className="dlt"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                                                <td><Link to={`/edit-employ?id=${data._id}`}><i class="fa-solid fa-user-pen"></i></Link></td>
                                            </tr>
                                        </tbody>
                                           
                                        </>
                                    )
                                })
                            }
                   
                </table>
            </div>
                </>
                :
                <>  <div className="loader">
                <img  src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="image" />
                <p>No registered Emloye..</p>
                <Link to="/register">ADD..</Link>
            </div>
            </>
            }
           

        </>
    )
}