import { Banner, LoginForm } from "@/components";

export default function Login() {
    return (
        <main className="flex justify-between h-screen bg-gradient-to-r from-[--bg-light] to-[--bg-dark]">
            <Banner />
            <LoginForm />
        </main>
    );
}
