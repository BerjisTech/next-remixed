/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/next",
  // experimental: {
  //     esmExternals: "loose", // <-- add this
  //     serverComponentsExternalPackages: ["mongoose"] // <-- and this
  // },
  // webpack: (config) => {
  //     config.experiments = {
  //         topLevelAwait: true
  //     };
  //     return config;
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
      {
        protocol: "https",
        hostname: "cfcdn.proz.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "www.proz.com",
      },
      {
        protocol: "http",
        hostname: "www.proz.com",
      },
      {
        protocol: "https",
        hostname: "d30v1l0pe4hkha.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/invoicing",
        destination: "/invoicing/overview/home",
        permanent: true,
      },
      {
        source: "/opportunities",
        destination: "/opportunities/proz-opportunities",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/account/overview",
        permanent: true,
      },
      {
        source: "/profile/:id",
        destination: "/profile/:id/overview",
        permanent: true,
      },
      {
        source: "/courses",
        destination: "/learn",
        permanent: false,
      },
      {
        source: "/trainers",
        destination: "/learn/trainers",
        permanent: false,
      },
      {
        source: "/course/:id",
        destination: "/learn/course/:id",
        permanent: false,
      },
      {
        source: "/learn",
        destination: "/learn/courses",
        permanent: false,
      },
      {
        source: "/training",
        destination: "/learn/courses",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/admin/dashboard",
        permanent: false,
      },
      {
        source: "/reviews",
        destination: "/reviews/outsourcers",
        permanent: false,
      },
      {
        source: "/signin",
        destination: "/auth/signin",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/auth/registration",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
