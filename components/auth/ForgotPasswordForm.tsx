import React, { useState } from 'react'
import AuthLayout from './AuthLayout'
import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react'

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e:React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
     setLoading(true);
    
    try {
      // await base44.auth.register({ email, password });
      setSent(true);
    } catch (err) {
      // setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };
  return (
   <AuthLayout
      icon={ <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            {/* <Swords className="w-5 h-5 text-slate-950" strokeWidth={2.5} /> */}
            <Mail className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        </Link>}
      title="Reset password"
      subtitle="We'll send you a link to reset it"
      footer={
        <Link href="/authentication/login" className="text-primary font-semibold hover:underline">
          <ArrowLeft className="w-3 h-3 inline mr-1" />Back to log in
        </Link>
      }
    >
      <>
      {sent ? (
        <p className="text-sm text-foreground text-center">
          If an account exists with that email, you'll receive a password reset link shortly.
        </p>
      ) :
         <Form className="flex sm:w-96 w-full flex-col gap-4" onSubmit={handleSubmit}>
                  <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                      }
                      return null;
                    }}
        
                  >
                    <Label className="font-semibold">Email</Label>
                    <Input placeholder="john@example.com" className={"ring-success pl-4 h-12 rounded-lg"} />
                    <FieldError />
                  </TextField>
              
                  <div className="flex gap-2">
                    <Button type="submit" className={"bg-success rounded-lg h-12 w-full font-semibold"}>
                      {/* <Check /> */}
                     Send reset link
                    </Button>
                    {/* <Button type="reset" variant="secondary">
                  Reset
                </Button> */}
                  </div>
                </Form>
      }
      </>
    </AuthLayout>
  )
}

export default ForgotPasswordForm