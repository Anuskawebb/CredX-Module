import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Borrow', path: '/borrow' },
        { label: 'Repay', path: '/repay' },
        { label: 'MetaMask Card', path: '/card' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Smart Contract ABI', path: '#' },
        { label: 'Credit Score Guide', path: '#' },
        { label: 'Developer Docs', path: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '#' },
        { label: 'Terms of Use', path: '#' },
        { label: 'Collateral Risk Disclosure', path: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-glass-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-neon-orange to-neon-purple bg-clip-text text-transparent mb-4"
            >
              CredX
            </motion.div>
            <p className="text-gray-400 text-sm">
              On-Chain Credit Vaults With Real-World Spending Power
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-neon-glow transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-glass-white mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 CredX Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;