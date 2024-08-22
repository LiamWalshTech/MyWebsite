interface Props {
  loading?: 'eager' | 'lazy'
}

const YouTubeTrailer = ({loading = 'lazy'}: Props) => (
  <iframe
    className="aspect-video w-full"
    src="https://www.youtube.com/embed/yVEbYFiLtKg?si=3jlAkdjkgOW1fIkD"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    loading={loading}
  ></iframe>
);

export default YouTubeTrailer;
