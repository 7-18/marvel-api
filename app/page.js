export default function Home() {
  return (
    <main className="flex justify-center px-20 pt-5">
      <iframe
        width={560}
        height={500}
        src="https://www.youtube.com/embed/UhVjp48U2Oc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="lg:w-full w-screen border-gold shadow-progress"
        loading="lazy"
      />
    </main>
  );
}
