export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center rounded-sm text-white bg-red-600 uppercase text-sm">
      {children}
    </p>
  );
}
