const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-tr from-[#2A2D2F] to-[#9C2135]">
      {children}
    </div>
  );
};

export default AuthLayout;
