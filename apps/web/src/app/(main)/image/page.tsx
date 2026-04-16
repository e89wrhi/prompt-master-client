import { ITEMS } from '@/content';
import { ImageGalleryClient } from './image-gallery-client';
import DetailWidthWrapper from '@/components/layout/detail-width-wrapper';

export default function ImagePromptsPage() {
  const imagePrompts = ITEMS.filter((p) => p.topicId === 'image');

  return (
    <div className="container mx-auto px-4 pb-12 pt-8">
      <DetailWidthWrapper>
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            Image Prompts
          </h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
            Discover a collection of beautiful image generation prompts in a
            stunning masonry layout.
          </p>
        </div>
        <ImageGalleryClient prompts={imagePrompts} />
      </DetailWidthWrapper>
    </div>
  );
}
