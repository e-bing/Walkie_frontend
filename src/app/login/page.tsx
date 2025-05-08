"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center mt-10 font-bold text-2xl">
      <h1>Login</h1>
      <div className="flex flex-col items-center justify-center mt-10  text-xl">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => router.back()}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}
