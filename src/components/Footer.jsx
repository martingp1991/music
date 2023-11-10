import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 bg-hero-inverted">
      <div className="mx-auto  px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-200 sm:text-5xl">
            Do you want to send us your music?
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-gray-300">
            Send in your original demo tracks for review. No remixes, no bootlegs.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full border border-zinc-600 px-12 py-3 text-sm text-zinc-400 hover:bg-zinc-600 hover:text-white focus:outline-none active:bg-zinc-500 font-bold"
          >
            E-MAIL
          </a>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <span className="text-gray-400 mr-0 font-bold flex flex-wrap justify-center gap-4 text-xs lg:justify-end">© Copyright 2023. Record Label | All Rights Reserved
          <br/>Designed by Martín Gómez Palacio</span>
          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <span className="text-gray-400 mr-0">Follow Us:</span>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-500 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-500 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-500 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-500 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
