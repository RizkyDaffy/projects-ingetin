import React from 'react'
import Link from 'next/link'
import { House, Plus } from 'lucide-react';

export default function bottomSection() {
  return (
     <> <footer>
          <Link className="linknavg" href="/"> <div className="nav-icon">
          <House />
           </div></Link>
           <Link className="linknavg nav-icon" href="/buat">
            <Plus />
           </Link>
       </footer></>
  );
}
