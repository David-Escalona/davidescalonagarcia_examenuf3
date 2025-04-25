import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  
    return (
      <>
        <header class="p-3 bg-black  ">
            <p class="text-white text-center">Alumno: David Escalona García</p>

            <nav class="d-flex justify-content-center">

                <button class="text-white text-center bg-info m-5">
                    <Link className="nav-link" to="/main">Home</Link>
                </button>

                <button class="text-white text-center bg-info m-5">
                    <Link className="nav-link" to="/usuarios">Usuarios</Link>
                </button>

                <button class="text-white text-center bg-info m-5">
                    <Link className="nav-link" to="/camareros">Camareros</Link>
                </button>
            </nav>
            
        </header>
      </>
    );
  }