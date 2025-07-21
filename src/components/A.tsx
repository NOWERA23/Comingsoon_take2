import { $, component$ } from '@builder.io/qwik';

export const A = component$(() => {
  const scrollToInstall = $(() => {
    const button = document.getElementById('install-button');
    if (button) {
      button.scrollIntoView({ behavior: 'smooth', block: 'center' });
      button.classList.remove('animate-bounce');
      void button.offsetWidth;
      button.classList.add('animate-bounce');
    }
  });

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce {
            animation: bounce 0.6s;
          }
        `}
      </style>

      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '375px', // match mobile width
          height: '40px', // status bar height
          backgroundColor: 'black',
          zIndex: '1000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '8px 24px',
          boxSizing: 'border-box',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '327px',
            height: '24px',
            gap: '170px',
          }}
        >
          {/* Logo (left-aligned) */}
          <div style={{ width: '92px', height: '16px' }}>
            <svg
              width="92"
              height="16"
              viewBox="0 0 92 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {<svg width="92" height="16" viewBox="0 0 92 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_89934_10443)">
<g opacity="0.99">
<path d="M6.21053 4.33984C9.24278 4.33984 12.4686 6.32876 12.5908 9.92108C12.6146 10.4396 12.5671 10.9377 12.4924 11.3232H3.42275C3.71477 12.4524 4.79117 13.1313 6.21053 13.1313C7.35823 13.1313 7.9219 12.7697 8.31239 12.4763L12.1019 12.5002C11.1239 14.5573 8.89983 16.0038 6.3056 16.0038C2.78778 16.0004 0 13.4008 0 10.1906C0 6.98036 2.6893 4.33984 6.21053 4.33984ZM9.19185 8.97268C8.70289 7.9117 7.52801 7.20893 6.3056 7.20893C4.88625 7.20893 3.90832 7.90829 3.41935 8.97268H9.18845H9.19185Z" fill="white"/>
<path d="M28.5333 0V15.8192H25.355L18.0206 5.37996V15.8192H14.8423V0H18.0206L25.355 10.4631V0H28.5333Z" fill="white"/>
<path d="M41.6605 4.52051V10.4634C41.6605 14.2604 39.4127 16.0003 36.2819 16.0003C33.1512 16.0003 30.9033 14.2604 30.9033 10.4634V4.52051H34.0816V10.4634C34.0816 12.2715 34.7166 13.1312 36.2819 13.1312C37.8473 13.1312 38.4823 12.2715 38.4823 10.4634V4.52051H41.6605Z" fill="white"/>
<path d="M63.1 9.87673V15.8196H59.9218V9.87673C59.9218 8.06863 59.1883 7.20893 57.5992 7.20893C56.01 7.20893 55.2766 8.06863 55.2766 9.87673V15.8196H52.0983V9.87673C52.0983 8.06863 51.3649 7.20893 49.7757 7.20893C48.1866 7.20893 47.4532 8.06863 47.4532 9.87673V15.8196H44.2749V9.87673C44.2749 6.07972 46.645 4.33984 49.7757 4.33984C51.3411 4.33984 52.7842 4.83792 53.6875 5.89891C54.5907 4.83792 56.0338 4.33984 57.5992 4.33984C60.7299 4.33984 63.1 6.07972 63.1 9.87673Z" fill="white"/>
<path d="M65.7148 0H68.9169V5.19574C69.7725 4.62942 70.7505 4.33603 71.9967 4.33603C75.4669 4.33603 78.3057 6.93561 78.3057 10.1663C78.3057 13.397 75.4703 15.9966 71.9967 15.9966C68.523 15.9966 65.7114 13.397 65.7114 10.1663V0H65.7148ZM68.8693 10.1697C68.8693 11.8414 70.214 13.1309 72.0238 13.1309C73.8337 13.1309 75.1308 11.8414 75.1308 10.1697C75.1308 8.49808 73.8337 7.20853 72.0238 7.20853C70.214 7.20853 68.8693 8.49808 68.8693 10.1697Z" fill="white"/>
<path d="M80.5566 9.87601C80.5566 6.14723 82.8045 4.47559 85.7892 4.47559H85.9352V7.34467H85.813C84.4208 7.34467 83.7349 8.11226 83.7349 9.87601V15.8189H80.5566V9.87601Z" fill="white"/>
</g>
<g opacity="0.99">
<path d="M88.302 13.2636H87.4463V15.7813H86.8283V13.2636H85.9727V12.7041H88.302V13.2636Z" fill="white"/>
<path d="M92 12.7041V15.7813H91.382V13.9971L90.5908 15.7813H90.0713L89.2801 13.9971V15.7813H88.6621V12.7041H89.2801L90.3327 14.9352L91.3786 12.7041H91.9966H92Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_89934_10443">
<rect width="92" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
}
              <g clip-Path="url(#clip0_89934_10443)">
                {/* Full logo content here */}
              </g>
              <defs>
                <clipPath id="clip0_89934_10443">
                  <rect width="92" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Hamburger Menu (right-aligned) */}
          <div
            onClick$={scrollToInstall}
            style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect y="5" width="24" height="2" fill="white" />
              <rect y="11" width="24" height="2" fill="white" />
              <rect y="17" width="24" height="2" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
});
