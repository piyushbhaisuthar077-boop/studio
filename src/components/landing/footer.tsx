export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-muted-foreground text-sm">
          &copy; {currentYear} KARMA ACCOUNTS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
