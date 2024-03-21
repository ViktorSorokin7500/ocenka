import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return <main className="mx-auto max-w-screen-xl">{children}</main>;
};

export default layout;
