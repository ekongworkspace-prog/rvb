import React from "react";


interface AuthLayoutProps{ icon: React.ReactElement; title:string; subtitle:string; footer?:React.ReactElement; children:React.ReactElement }
const AuthLayout = ({ icon, title, subtitle, footer, children }:AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-black text-white rounded-2xl bg-primary mb-4">
           {icon} 
            {/* <Icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" /> */}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
        </div>
        <div className="bg-card rounded-2xl shadow-sm border border-border sm:p-8 p-4">
          {children}
        </div>
        {footer && (
          <p className="text-center text-sm text-muted-foreground mt-6">{footer}</p>
        )}
      </div>
    </div>
  );
}

export default AuthLayout