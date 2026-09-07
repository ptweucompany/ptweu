'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSession, signIn } from '../../../src/lib/admin/cms';
import { Button } from '../../../src/components/admin/ui';

export const dynamic = 'force-static';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getSession().then((s) => {
      if (s) router.replace('/admin');
    });
  }, [router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    const { error } = await signIn(email.trim(), password);
    setBusy(false);
    if (error) {
      setError(error.message || 'Login gagal.');
      return;
    }
    router.replace('/admin');
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 p-8"
      >
        <h1 className="text-xl font-bold text-gray-900">Admin PT WEU</h1>
        <p className="text-sm text-gray-500 mt-1 mb-6">Masuk untuk mengelola konten website.</p>

        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700 mb-1.5">Email</span>
          <input
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
          />
        </label>

        <label className="block mb-6">
          <span className="block text-sm font-medium text-gray-700 mb-1.5">Password</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
          />
        </label>

        {error && (
          <p className="text-sm text-red-600 mb-4 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <Button type="submit" disabled={busy}>
          {busy ? 'Memproses…' : 'Masuk'}
        </Button>
      </form>
    </div>
  );
}
