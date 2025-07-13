"use client"

import { SignIn } from '@clerk/nextjs';

export default function SignInForm() {
    return (
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
    );
}
