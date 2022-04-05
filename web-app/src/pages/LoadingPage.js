export default function LoadingPage() {
  const background = "https://images2.alphacoders.com/671/671306.jpg";
  return (
    <section
      className="min-h-screen bg-neutral-800 w-full flex justify-center items-center"
      style={{
        backgroundImage: `url( ${background} )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="text-center text-amber-100 text-lg">Loading....</h1>
      </div>
    </section>
  );
}
