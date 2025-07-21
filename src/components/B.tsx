import { component$ } from '@builder.io/qwik';

export const B = component$(() => {
  return (
    <div
      style={{
        backgroundColor: 'black', // Full black base
        backgroundImage: 'url(/scanny.png)', // Ensure scanny.png is in /public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
    
    </div>
  );
});