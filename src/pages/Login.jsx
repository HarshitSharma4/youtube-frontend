import { LoginForm } from "../components/index";
function Login() {
  return (
    <div className="fixed h-screen w-screen p-7 flex justify-center items-center top-0 left-0 bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(100,43,234,0.4)]">
      <LoginForm />
    </div>
  );
}

export default Login;
