export default function ErrorPage() {
  const message = "404 Not Found";
  const info = "The site you' looking for is not here.";

  return (
    <>
      <h1>{message}</h1>
      <p>{info}</p>
    </>
  );
}
