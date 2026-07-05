export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto relative overflow-hidden py-10">
      {/* Centered gradient divider */}
      <div className="h-[1px] w-1/2 max-w-md bg-gradient-to-r from-transparent via-cyan-accent/40 to-transparent mx-auto mb-6" />
      
      <div className="container mx-auto px-4 flex items-center justify-center text-center">
        <p className="text-sm text-foreground/40 font-medium tracking-wide">
          &copy; {currentYear} <span className="text-gradient font-bold font-heading">Tisee</span>. Made with Passion &amp; Precision.
        </p>
      </div>
    </footer>
  );
}
