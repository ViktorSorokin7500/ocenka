import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen grid place-items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-50 to-slate-300">
			{children}
		</div>
	);
};

export default AuthLayout;
