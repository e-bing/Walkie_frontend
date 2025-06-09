// Molecules와 Atoms를 조합해 기능 단위를 이룬 컴포넌트
import React, { useState } from 'react';
import FormField from '../molecules/FormField';
import Button from '@/components/atoms/button/index';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 처리 로직
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto text-blue-600">
      <FormField
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">로그인</Button>
    </form>
  );
};

export default LoginForm;
