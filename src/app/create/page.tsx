import { Banner, CreateUserForm } from "@/components";

export default function Create() {
    return (
        <main className="flex justify-between h-screen bg-gradient-to-r from-[--bg-light] to-[--bg-dark]">
            <Banner />
            <CreateUserForm />
        </main>
    );
}
