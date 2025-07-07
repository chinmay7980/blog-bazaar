import Link from "next/link";
import './page.css'

export default function Footer() {
    return (
        <footer className="footer-blog">
            <div className="footer-container">
                <div className="footer-content">
                    <Link href='/' className="footer-title">Blog-Bazaar</Link>

                    <p className="footer-tagline">Your gateway to knowledge and inspiration ✨</p>

                    <div className="footer-links">
                    <Link href="/" className="footer-link">Home</Link>
                    <Link href="/about" className="footer-link">About</Link>
                    <Link href="/contact" className="footer-link">Contact</Link>
                    <Link href="/login" className="footer-link">Login</Link>
                    </div>

                    <p className="footer-end">© 2025 Blog-Bazaar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}