// 레이아웃을 정의해 Organisms를 배치
"use client";
import React from "react";
import LoginForm from "@/components/organisms/LoginForm";

const LoginTemplate: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          로그인
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginTemplate;
