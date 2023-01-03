export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  return <h1>Welcome in {params.slug} page</h1>;
}


// export default function GiveName({
//   params,
//   searchParams,
// }: {
//   params: { name: string };
//   searchParams: { id: string };
// }) {
//   return <div>My name is {params.name}.</div>;
// }
