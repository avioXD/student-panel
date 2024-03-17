import Layout from "@/components/Layout";

const Page: React.FC<any> = ({ params }) => {
  const { id } = params;

  return (
    <Layout>
      <h1>Protected Learner Page</h1>
      <p>id: {id}</p>
    </Layout>
  );
};

export default Page;
