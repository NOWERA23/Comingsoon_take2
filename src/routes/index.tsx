// src/routes/index.tsx
import { component$ } from '@builder.io/qwik';
import { A } from '~/components/A';
import { Go } from '~/components/Go';
import { LogoPage } from '~/components/LogoPage'; // <-- Import LogoPage
import { Soon } from '~/components/Soon';

export default component$(() => {
  return (
    <>
      {/* CSS to control visibility based on screen size */}
      <style>
        {`
          .mobile-only {
            display: none;
          }

          .desktop-only {
            display: none;
          }

          @media (max-width: 768px) {
            .mobile-only {
              display: block;
            }
          }

          @media (min-width: 769px) {
            .desktop-only {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              background-color: black;
              color: white;
              font-size: 1.5rem;
              text-align: center;
              padding: 20px;
            }
          }
        `}
      </style>

      {/* ✅ Desktop: Show LogoPage */}
      <div class="desktop-only">
        <LogoPage />
      </div>

      {/* ✅ Mobile: Show A, then background with Soon & Go */}
      <div class="mobile-only" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <div class="top-section">
          <A />
        </div>
        <div
          class="bg-cover-area"
          style={{
            backgroundImage: 'url(/Scanny.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: '100vh',
          }}
        >
          <Soon />
          <Go />
        </div>
      </div>
    </>
  );
});
