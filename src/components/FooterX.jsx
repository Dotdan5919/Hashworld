import React from 'react'
import { Footer } from 'flowbite-react';
import Logo from '../assets/logo.png';



const FooterX = () => {
  return (
    <div>
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="Hash World Logo"
            href="#"
            name="Hashworld"
            src={Logo}
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          by="Hashworld™"
          href="#"
          year={2023}
        />
      </div>
    </Footer>
    </div>
  )
}

export default FooterX
