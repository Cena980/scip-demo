import { useEffect, useRef, useState } from 'react';

const YouTubeVideoSection = () => {
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);

  // Load YouTube API and initialize player
  useEffect(() => {
    const createPlayer = () => {
      if (iframeRef.current && !player && window.YT && window.YT.Player) {
        const newPlayer = new window.YT.Player(iframeRef.current, {
          events: {
            onReady: () => setPlayer(newPlayer),
          },
        });
      }
    };

    // Assign API callback to window
    // eslint-disable-next-line no-undef
    window.onYouTubeIframeAPIReady = createPlayer;

    if (!window.YT || !window.YT.Player) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    } else {
      createPlayer();
    }
  }, [player]);

  // Auto-play when in viewport
  useEffect(() => {
    if (!player) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            player.playVideo();
          } else {
            player.pauseVideo();
          }
        });
      },
      { threshold: 0.5 }
    );

    const iframe = iframeRef.current;
    if (iframe) observer.observe(iframe);

    return () => {
      if (iframe) observer.unobserve(iframe);
    };
  }, [player]);

  return (
    <section className="w-full bg-black">
      <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
        <div
          ref={iframeRef}
          id="youtube-player"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </section>
  );
};

export default YouTubeVideoSection;
