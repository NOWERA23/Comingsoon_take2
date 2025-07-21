import { component$ } from '@builder.io/qwik';

export const Soon = component$(() => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;s
        }
        html, body, #root {
          height: 100%;
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          color: #000;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 50vh;
          padding-top: 48px;
          text-align: center;
        }
        .logo {
          width: 80%;
          max-width: 300px;
          height: auto;
        }
      `}</style>

      <div class="container">
        <img
          src="soon.svg"
          alt="Coming Soon Logo"
          class="logo"
        />
      </div>
    </>
  );
});
