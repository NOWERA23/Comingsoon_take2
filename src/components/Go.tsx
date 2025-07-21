// Go.tsx
import { $, component$ } from '@builder.io/qwik';

export const Go = component$(() => {
  const handleClick = $(() => {
    // Placeholder for future logic
    console.log('Install button clicked');
  });

  return (
    <div
      id="install-button"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-40px',
        width: '100%',
      }}
    >
      <img
        src="/Button.svg"
        alt="Install Number"
        onClick$={handleClick}
        style={{
          width: '279px',
          height: '60px',
          cursor: 'pointer',
        }}
        class="transition duration-300 ease-in-out hover:opacity-80 active:scale-95"
      />
    </div>
  );
});
