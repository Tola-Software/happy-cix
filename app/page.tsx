import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to dashboard page
  redirect("/dashboard");

  // The code below won't execute due to the redirect
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Rest of your component */}
      </main>
      {/* Footer */}
    </div>
  );
}
