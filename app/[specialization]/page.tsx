import HomePage from "../HomePage";

interface SpecializationPageProps {
  params: Promise<{
    specialization: string;
  }>;
}

export default async function SpecializationPage({
  params,
}: SpecializationPageProps) {
  const { specialization } = await params;
  return <HomePage specialization={specialization} />;
}
