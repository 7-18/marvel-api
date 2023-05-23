export default function Home() {
  return (
    <main className="flex justify-center px-20">
      <iframe
        width={560}
        height={500}
        src="https://www.youtube.com/embed/UhVjp48U2Oc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full border-gold shadow-progress"
        loading="lazy"
      />
    </main>
  );
}
