export default function Page() {
  return (
    <main
      style={{
        fontFamily: 'system-ui, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f3f4f6',
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          background: '#fff',
          padding: '2rem',
          borderRadius: 12,
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ fontSize: '2rem', margin: 0 }}>
          My One-Page Next.js Site
        </h1>
        <p style={{ color: '#4b5563' }}>
          A minimal static design — edit this and save to see changessng.
        </p>
        <a
          href="#"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '.6rem 1rem',
            borderRadius: 8,
            textDecoration: 'none',
            border: '1px solid #3b82f6',
            color: '#3b82f6',
          }}
        >
          Call to action
        </a>
      </div>
    </main>
  );
}

