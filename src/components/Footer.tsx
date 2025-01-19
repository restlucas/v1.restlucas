export function Footer() {
  return (
    <footer className="flex items-center justify-center h-[10vh] font-SFMono text-xs">
      <div className="flex items-center justify-center gap-2">
        <span>developed by</span>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/restlucas"
          className="font-semibold duration-300 hover:text-blue-vibrant"
        >
          restlucas
        </a>
      </div>
    </footer>
  );
}
