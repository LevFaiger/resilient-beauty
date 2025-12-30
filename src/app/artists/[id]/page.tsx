import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { artists, getArtistById } from '@/data/artists';
import { ArtistDetailClient } from './ArtistDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const artist = getArtistById(id);

  if (!artist) {
    return {
      title: 'Artist Not Found',
    };
  }

  return {
    title: `${artist.name.en} | The Upcoming Spring Would Be Mine`,
    description: artist.biography.en.slice(0, 160),
    openGraph: {
      title: `${artist.name.en} | The Upcoming Spring Would Be Mine`,
      description: artist.biography.en.slice(0, 160),
      images: [artist.imageUrl],
    },
  };
}

export default async function ArtistDetailPage({ params }: PageProps) {
  const { id } = await params;
  const artist = getArtistById(id);

  if (!artist) {
    notFound();
  }

  return <ArtistDetailClient artist={artist} />;
}
