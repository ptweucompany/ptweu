'use client';

// Shared form primitives for the admin dashboard. Utilitarian, light theme.

import React from 'react';

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

export function Field({
  label,
  value,
  onChange,
  multiline,
  placeholder,
  hint,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
  hint?: string;
  type?: 'text' | 'url' | 'email' | 'tel';
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1.5">{label}</span>
      {multiline ? (
        <textarea
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none min-h-[84px] resize-y"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type={type}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {hint && <span className="block text-xs text-gray-400 mt-1">{hint}</span>}
    </label>
  );
}

export function NumberField({
  label,
  value,
  onChange,
  placeholder,
  hint,
}: {
  label: string;
  value: number | null;
  onChange: (v: number | null) => void;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1.5">{label}</span>
      <input
        type="number"
        inputMode="decimal"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value === '' ? null : Number(e.target.value))}
      />
      {hint && <span className="block text-xs text-gray-400 mt-1">{hint}</span>}
    </label>
  );
}

/** ID / EN pair. */
export function Bilingual({
  label,
  valueId,
  valueEn,
  onId,
  onEn,
  multiline,
}: {
  label: string;
  valueId: string;
  valueEn: string;
  onId: (v: string) => void;
  onEn: (v: string) => void;
  multiline?: boolean;
}) {
  return (
    <div>
      <span className="block text-sm font-medium text-gray-700 mb-1.5">{label}</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1">
            Indonesia
          </span>
          {multiline ? (
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none min-h-[72px] resize-y"
              value={valueId}
              onChange={(e) => onId(e.target.value)}
            />
          ) : (
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
              value={valueId}
              onChange={(e) => onId(e.target.value)}
            />
          )}
        </div>
        <div>
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1">
            English
          </span>
          {multiline ? (
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none min-h-[72px] resize-y"
              value={valueEn}
              onChange={(e) => onEn(e.target.value)}
            />
          ) : (
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
              value={valueEn}
              onChange={(e) => onEn(e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled,
  type = 'button',
  size = 'md',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'danger' | 'gold';
  disabled?: boolean;
  type?: 'button' | 'submit';
  size?: 'sm' | 'md';
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  const sizes = { sm: 'text-xs px-3 py-1.5', md: 'text-sm px-4 py-2.5' };
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-[#0a1f52]',
    gold: 'bg-brand-gold text-brand-blue hover:bg-brand-gold-light',
    ghost: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

/** Sticky bottom bar shown while there are unsaved changes. */
export function SaveBar({
  dirty,
  saving,
  onSave,
  status,
}: {
  dirty: boolean;
  saving: boolean;
  onSave: () => void;
  status?: string;
}) {
  if (!dirty && !status) return null;
  return (
    <div className="sticky bottom-0 z-20 -mx-4 sm:-mx-6 mt-6 border-t border-gray-200 bg-white/95 backdrop-blur px-4 sm:px-6 py-3 flex items-center justify-between">
      <span className="text-sm text-gray-500">
        {status ? status : dirty ? 'Ada perubahan yang belum disimpan' : ''}
      </span>
      <Button onClick={onSave} disabled={!dirty || saving}>
        {saving ? 'Menyimpan…' : 'Simpan Perubahan'}
      </Button>
    </div>
  );
}

export function Callout({
  tone = 'info',
  children,
}: {
  tone?: 'info' | 'warn' | 'success';
  children: React.ReactNode;
}) {
  const tones = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warn: 'bg-amber-50 border-amber-200 text-amber-900',
    success: 'bg-green-50 border-green-200 text-green-800',
  };
  return (
    <div className={`rounded-lg border px-4 py-3 text-sm ${tones[tone]}`}>{children}</div>
  );
}

/** Generic string-array editor (one input per line + add/remove). */
export function StringList({
  label,
  items,
  onChange,
  placeholder,
}: {
  label: string;
  items: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <span className="block text-sm font-medium text-gray-700 mb-1.5">{label}</span>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={i} className="flex gap-2">
            <input
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
              value={it}
              placeholder={placeholder}
              onChange={(e) => {
                const next = [...items];
                next[i] = e.target.value;
                onChange(next);
              }}
            />
            <button
              type="button"
              onClick={() => onChange(items.filter((_, j) => j !== i))}
              className="px-2.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600 text-sm"
              aria-label="Hapus"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...items, ''])}
          className="text-sm font-medium text-brand-blue hover:underline"
        >
          + Tambah baris
        </button>
      </div>
    </div>
  );
}
