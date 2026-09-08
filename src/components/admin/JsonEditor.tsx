'use client';

// Generic recursive editor for the nested page-content JSON trees.
// Strings -> input/textarea, numbers -> number input, booleans -> checkbox,
// string arrays -> line list, object arrays -> card repeater (recurses),
// objects -> labeled sections (recurses).

import React from 'react';

type Json = unknown;

function labelize(key: string): string {
  return key
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^\w/, (c) => c.toUpperCase());
}

function isPlainObject(v: Json): v is Record<string, Json> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function ScalarField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string | number | boolean;
  onChange: (v: string | number | boolean) => void;
}) {
  if (typeof value === 'boolean') {
    return (
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
        {label}
      </label>
    );
  }
  if (typeof value === 'number') {
    return (
      <label className="block">
        <span className="block text-xs font-medium text-gray-600 mb-1">{label}</span>
        <input
          type="number"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
        />
      </label>
    );
  }
  const long = value.length > 70 || value.includes('\n');
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-600 mb-1">{label}</span>
      {long ? (
        <textarea
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none min-h-[72px] resize-y"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}

function StringLines({
  value,
  onChange,
}: {
  value: string[];
  onChange: (v: string[]) => void;
}) {
  return (
    <div className="space-y-2">
      {value.map((it, i) => (
        <div key={i} className="flex gap-2">
          <input
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
            value={it}
            onChange={(e) => {
              const next = [...value];
              next[i] = e.target.value;
              onChange(next);
            }}
          />
          <button
            type="button"
            onClick={() => onChange(value.filter((_, j) => j !== i))}
            className="px-2.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600 text-sm"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...value, ''])}
        className="text-sm font-medium text-brand-blue hover:underline"
      >
        + Tambah
      </button>
    </div>
  );
}

export function JsonNode({
  value,
  onChange,
  depth = 0,
}: {
  value: Json;
  onChange: (v: Json) => void;
  depth?: number;
}) {
  // string array
  if (Array.isArray(value) && value.every((v) => typeof v === 'string')) {
    return <StringLines value={value as string[]} onChange={(v) => onChange(v)} />;
  }

  // array of objects (or mixed) -> repeater
  if (Array.isArray(value)) {
    return (
      <div className="space-y-3">
        {value.map((item, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                #{i + 1}
              </span>
              <button
                type="button"
                className="text-xs text-red-600 hover:underline"
                onClick={() => onChange(value.filter((_, j) => j !== i))}
              >
                Hapus
              </button>
            </div>
            <JsonNode
              value={item}
              depth={depth + 1}
              onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))}
            />
          </div>
        ))}
        <button
          type="button"
          className="text-sm font-medium text-brand-blue hover:underline"
          onClick={() => {
            const template = isPlainObject(value[0])
              ? Object.fromEntries(Object.keys(value[0] as object).map((k) => [k, '']))
              : '';
            onChange([...value, template]);
          }}
        >
          + Tambah baris
        </button>
      </div>
    );
  }

  // object -> labeled sections; scalar children get their key as the label
  if (isPlainObject(value)) {
    return (
      <div className={depth === 0 ? 'space-y-5' : 'space-y-3'}>
        {Object.entries(value).map(([k, v]) => {
          const nested = isPlainObject(v) || Array.isArray(v);
          if (!nested) {
            return (
              <ScalarField
                key={k}
                label={labelize(k)}
                value={v as string | number | boolean}
                onChange={(nv) => onChange({ ...value, [k]: nv })}
              />
            );
          }
          return (
            <div key={k} className="rounded-lg border border-gray-100 bg-gray-50/60 p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
                {labelize(k)}
              </p>
              <JsonNode
                value={v}
                depth={depth + 1}
                onChange={(nv) => onChange({ ...value, [k]: nv })}
              />
            </div>
          );
        })}
      </div>
    );
  }

  // scalar (reached only for array items that are bare scalars)
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return <ScalarField label="Nilai" value={value} onChange={(v) => onChange(v)} />;
  }

  return <p className="text-xs text-gray-400">(kosong)</p>;
}

/** Top-level: an object whose keys become the scalar field labels. */
export function JsonEditor({
  value,
  onChange,
}: {
  value: Record<string, Json>;
  onChange: (v: Record<string, Json>) => void;
}) {
  return (
    <div className="space-y-5">
      {Object.entries(value).map(([k, v]) => {
        const nested = isPlainObject(v) || Array.isArray(v);
        return (
          <div key={k} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-sm font-bold text-gray-900 mb-3">{labelize(k)}</p>
            {nested ? (
              <JsonNode value={v} onChange={(nv) => onChange({ ...value, [k]: nv })} />
            ) : (
              <ScalarField
                label={labelize(k)}
                value={v as string | number | boolean}
                onChange={(nv) => onChange({ ...value, [k]: nv })}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
