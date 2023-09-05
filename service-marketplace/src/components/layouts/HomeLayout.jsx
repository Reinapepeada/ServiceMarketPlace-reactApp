import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li><a href="/"></a>Home</li>
                <li>Services</li>
                <li><a href="/about"></a>About</li>
                <li>Sign in</li>
                <li>Sign up</li>
            </ul>
        </nav>
      </header>
      <main>
        {children} {/* Aquí se renderizará el contenido de la página */}
      </main>
      <footer>
        <p>Service Marketplace</p>

        <p>© 2021 Service Marketplace</p>

        <p>Terms of Service | Privacy Policy</p>

      </footer>
    </div>
  );
};

export default Layout;
