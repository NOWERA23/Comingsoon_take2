// src/components/LogoPage.tsx
import { component$ } from '@builder.io/qwik';

export const LogoPage = component$(() => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#171717',
        overflow: 'hidden',
      }}
    >
      {/* Main Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '-24 px',
          position: 'absolute',
          width: '327px',
          height: '192px',
          left: 'calc(50% - 163.5px - 0.5px)', // 327 / 2
          top: 'calc(50% - 96px)', // 192 / 2
        }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: '232px',
            height: '64px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        />

        {/* Text Frame */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '56px',
            width: '409px',
            height: '96px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          {/* Text SubFrame */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '24px',
              width: '409px',
              height: '96px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            <h1
              style={{
                width: '409px',
                height: '96px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '32px',
                textAlign: 'center',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
              }}
            >
              Access is limited to smartphones
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
});
