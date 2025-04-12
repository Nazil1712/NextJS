import '../globals.css'

export const metadata = {
  title: {
    default : "Nazil - NextJS",
    // template : "ND | %s"
    template : "%s | ND"
  },
  description: "Generated by Next.js",
};

export default function NonAuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className='bg-blue-400 p-4'>
          <p>Header</p>
        </header>

        {children}

        <footer className='bg-amber-400 p-4'>
         <p>Footer</p>
        </footer>
        
      </body>
    </html>
  );
}


