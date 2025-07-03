import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, CreditCard, Zap, TrendingUp, Users, Lock } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';
import TypewriterText from '../components/TypewriterText';
import CreditCardAnimation from '../components/CreditCardAnimation';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: 'ZK Identity + Reputation',
      description: 'Build your on-chain credit score using zero-knowledge proofs and DeFi history'
    },
    {
      icon: Lock,
      title: 'Collateralized Credit Vaults',
      description: 'Secure USDC loans backed by your crypto assets with transparent liquidation protection'
    },
    {
      icon: CreditCard,
      title: 'USDC Loans + MetaMask Card',
      description: 'Borrow USDC and spend instantly in the real world with MetaMask Card integration'
    },
    {
      icon: Zap,
      title: 'Cross-chain Repayment',
      description: 'Repay loans seamlessly across multiple chains using LI.FI bridge technology'
    },
    {
      icon: TrendingUp,
      title: 'Liquidation Protection',
      description: 'Advanced algorithms protect your collateral with early warning systems'
    },
    {
      icon: Users,
      title: 'Community Governance',
      description: 'Participate in protocol governance and earn rewards for active participation'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Connect Wallet + Create ZK ID',
      description: 'Link your wallet and establish your zero-knowledge identity'
    },
    {
      step: '02',
      title: 'Deposit ETH/MATIC',
      description: 'Secure your vault with crypto collateral'
    },
    {
      step: '03',
      title: 'Borrow USDC @ 70% LTV',
      description: 'Access USDC loans up to 70% of your collateral value'
    },
    {
      step: '04',
      title: 'Spend via MetaMask Card',
      description: 'Use your borrowed USDC for real-world purchases'
    },
    {
      step: '05',
      title: 'Repay + Boost Your Score',
      description: 'Repay loans to improve your ZK credit score'
    }
  ];

  const handleLaunchApp = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatedBackground />
      
      {/* Hero Section with extra spacing above and below */}
      <section
        className="hero-section"
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          paddingTop: '80px',
          marginBottom: '120px',
        }}
      >
        <div style={{ height: '40px' }} />
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ff7e5f, #feb47b, #a259ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}
        >
          CredX
        </h1>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
          Borrow Crypto. Spend IRL.
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#e5e7eb', marginBottom: '2rem', maxWidth: 600 }}>
          Use your crypto reputation and tokens to borrow USDC and spend with MetaMask Card.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '80px' }}>
          <button
            onClick={handleLaunchApp}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(90deg, #ff7e5f, #a259ff)',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            Launch App
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('how-it-works');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'rgba(255,255,255,0.05)',
              color: '#fff',
              border: '1px solid #a259ff',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            How it works
          </button>
        </div>
      </section>

      {/* 3D Credit Card Animation Section */}
      <CreditCardAnimation />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-glow to-neon-orange bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started with CredX in five simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-r from-neon-orange to-neon-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg shadow-neon-glow/25">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-neon-orange/50 to-transparent transform -translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-purple to-neon-glow bg-clip-text text-transparent">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced DeFi infrastructure for real-world credit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-glass-dark/50 backdrop-blur-md border border-glass-white rounded-xl p-6 hover:border-neon-orange/50 hover:shadow-lg hover:shadow-neon-glow/15 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-neon-glow mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section id="dashboard-section" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-orange to-neon-glow bg-clip-text text-transparent">
              Experience CredX
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Modern interface designed for seamless Web3 credit management
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-glass-dark/30 backdrop-blur-md border border-glass-white rounded-2xl p-8 mx-auto max-w-4xl hover:border-neon-orange/30 transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-neon-orange/20 to-neon-purple/20 rounded-xl p-8 text-center">
              <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <CreditCard className="w-16 h-16 text-neon-glow mx-auto mb-4" />
                  <p className="text-xl font-semibold text-white">Dashboard Preview</p>
                  <p className="text-gray-400">Coming Soon</p>
                </div>
              </div>
              <Link 
                to="/dashboard" 
                className="inline-block relative z-30"
                style={{ pointerEvents: 'auto' }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-neon-purple to-neon-glow px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-purple/25 transition-all cursor-pointer"
                  style={{ pointerEvents: 'auto' }}
                >
                  Try the App
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;