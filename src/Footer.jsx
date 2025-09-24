import React from "react";
import './style1.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <p>Copyright @2025</p>
        </footer>
    );
}
export default Footer