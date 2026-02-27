import Term from "@/components/TermClient";

export const metadata = {
  title: "Terms and Conditions | SugarDegree",
  description:
    "Read the Terms and Conditions of SugarDegree. Learn about ordering policies, payments, refunds, intellectual property, and user responsibilities for our bento cake services in Delhi.",
  keywords: [
    "sugardegree terms and conditions",
    "bento cake terms",
    "cake order policy",
    "refund policy sugardegree",
    "custom cake terms",
    "sugardegree legal",
  ],
  openGraph: {
    title: "Terms and Conditions | SugarDegree",
    description:
      "Official Terms and Conditions of SugarDegree for ordering bento cakes and using our website.",
    url: "https://sugardegree.in/terms",
    images: ["/cake.png"],
    type: "website",
  },
  icons: {
    icon: "/cake.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <Term />
  );
}