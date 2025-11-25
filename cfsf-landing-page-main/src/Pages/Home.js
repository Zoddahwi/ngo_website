import React, { Suspense, lazy } from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

// Lazy-loaded legacy sections
const Intro = lazy(() => import('../components/Intro'));
const Service = lazy(() => import('../components/Service'));
const Article = lazy(() => import('../components/Article'));

const Loading = ({ message = 'Loading...' }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 120 }}>
    {message}
  </div>
);

export default function Home() {
  return (
    <main>
      <div id='home' />
      <a id='main' />
      {/* Modern hero and impact sections */}
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <Stats />
      </ErrorBoundary>

      <Suspense fallback={<Loading message='Loading hero section...' />}>
        <ErrorBoundary>
          <Intro />
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<Loading message='Loading services...' />}>
        <ErrorBoundary>
          <Service />
        </ErrorBoundary>
      </Suspense>

      {/* Donation section removed from Home; available on /Donate page */}

      <ErrorBoundary>
        <Testimonials />
      </ErrorBoundary>

      <ErrorBoundary>
        <CTA />
      </ErrorBoundary>

      <Suspense fallback={<Loading message='Loading articles...' />}>
        <ErrorBoundary>
          <Article />
        </ErrorBoundary>
      </Suspense>
    </main>
  );
}
