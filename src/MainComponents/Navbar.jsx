import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Navbar() {
  return (
    <section className="h-20 w-full bg-secondary">
      <nav className="width flex h-full items-center justify-between">
        <h2 className="text-2xl font-bold tracking-widest">OMATECH</h2>
        <div>
          <FontAwesomeIcon className="cursor-pointer text-3xl" icon={faBars} />
        </div>
      </nav>
    </section>
  );
}

export default Navbar