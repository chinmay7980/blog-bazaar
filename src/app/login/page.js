import { SignIn } from '@clerk/nextjs';
import './page.css';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function Login() {
    return (
        <div className='container'>
            <Navbar />

            <div className='login-content'>
                <div className='clerk-signin-wrapper'>
                    
                    <SignIn
                        routing="hash"
                        appearance={{
                            elements: {
                                formButtonPrimary: 'button',
                                card: 'clerk-card',
                                headerTitle: 'clerk-title',
                                formFieldInput: 'clerk-input'
                            }
                        }}
                        fallbackRedirectUrl="/"
                        forceRedirectUrl="/"
                    />
                </div>
            </div>

            <Footer />
        </div>
    )
}


     
    