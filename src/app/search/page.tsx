export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  // ~/search?q=사과
  // url 파라미터가 비동기로 들어옴
  const { q } = await searchParams;

  return <div>검색 페이지 : {q}</div>;
}
