export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Academy Graduate - Cloud Architecting',
      issuer: 'Amazon Web Services (AWS)',
      date: '2025',
      credential: 'https://www.credly.com/badges/bcd90b3c-bb48-40f2-8f4f-bfd810a9c17a/public_url'
    },
    {
      title: 'AWS Academy Graduate - Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      date: '2025',
      credential: 'https://www.credly.com/badges/c9885b71-c8bc-45f5-b345-59d1a1a1d953/public_url'
    },
    {
      title: 'Linux Unhatched',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      credential: 'https://www.credly.com/badges/a5f7c4d0-914a-45be-ade6-87a3f8adf60e/public_url'
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-white dark:bg-black border-t border-black dark:border-white text-black dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">Certifications</h2>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border-l-2 border-black dark:border-white pl-6 pb-6"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm opacity-70 mb-2">{cert.issuer}</p>
              <p className="text-sm opacity-60 mb-3">{cert.date}</p>
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
