"use client";

import Button from "@/components/ui/Button";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const user = useAuthStore((s) => s.user);
  const router = useRouter();

  if (user) return null;

  return (
    <>
      <Button radius="full" onClick={() => router.push("/login")}>
        로그인
      </Button>
      <Button radius="full" variant="secondary" onClick={() => router.push("/signUp")}>
        회원가입
      </Button>
    </>
  );
}
