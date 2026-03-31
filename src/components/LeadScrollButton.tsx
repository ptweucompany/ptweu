'use client';

interface LeadScrollButtonProps {
  label: string;
}

export default function LeadScrollButton({ label }: LeadScrollButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:border-[#C8A84B] transition-colors"
    >
      {label}
    </button>
  );
}
