"use client"
import React, { useState } from 'react'
import AuthLayout from './AuthLayout'
import Link from 'next/link'
import { AlertTriangle, ArrowLeft, Loader2, Lock, Mail } from 'lucide-react'
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react'
import { useSearchParams } from 'next/navigation'

const ResetPasswordForm = () => {
    const searchParams = useSearchParams();
    const resetToken = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            // await base44.auth.register({ email, password });
            window.location.href = "/authentication/login";
        } catch (err) {
            // setError(err.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    if (!resetToken) {
        return (
            <AuthLayout
                icon={<Link href="/" className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-linear-to-br from-red-400 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                        {/* <Swords className="w-5 h-5 text-slate-950" strokeWidth={2.5} /> */}
                        <AlertTriangle className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                </Link>}
                title="Invalid reset link"
                subtitle="This password reset link is missing or invalid"
                footer={
                    <Link href="/authentication/forgot-password" className="text-primary font-semibold hover:underline ">
                        Request a new link
                    </Link>
                }
            >
                <p className="text-sm text-foreground text-center">
                    The link you used appears to be incomplete. Please request a new password reset email.
                </p>
            </AuthLayout>
        );
    }
    return (
        <AuthLayout
            icon={<Link href="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    {/* <Swords className="w-5 h-5 text-slate-950" strokeWidth={2.5} /> */}
                    <Lock className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
            </Link>}
            title="New password"
            subtitle="Enter your new password below"
            // footer={
            //     <Link href="/authentication/login" className="text-primary font-semibold hover:underline">
            //         <ArrowLeft className="w-3 h-3 inline mr-1" />Back to log in
            //     </Link>
            // }
        >
            <>
                {
                    <Form className="flex sm:w-96 w-full flex-col gap-4" onSubmit={handleSubmit}>
                        <TextField
                            isRequired
                            minLength={8}
                            name="new_password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label className="font-semibold">New Password</Label>
                            <Input placeholder="Enter your password" className={"ring-success pl-4 h-12 rounded-lg"} />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            minLength={8}
                            name="confirm_password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label className="font-semibold">Confirm Password</Label>
                            <Input placeholder="Enter your password" className={"ring-success pl-4 h-12 rounded-lg"} />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                        <div className="flex gap-2">
                            <Button type="submit" className={"bg-success rounded-lg h-12 w-full font-semibold"}>
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Resetting...
                                    </>
                                ) : (
                                    "Reset password"
                                )}
                            </Button>

                        </div>
                    </Form>
                }
            </>
        </AuthLayout>
    )
}

export default ResetPasswordForm