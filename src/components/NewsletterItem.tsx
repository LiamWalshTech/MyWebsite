import { Image } from "astro:assets";
import { formattedPublishDate } from "../utils/formatPublishDate";
import type { InferEntrySchema } from "astro:content";

interface Props {
  slug: string;
  data: InferEntrySchema<"newsletter">;
}

const NewsletterItem = ({
  data: { edition, publishDate, thumbnail, title },
  slug,
}: Props): JSX.Element => (
  <>
    <Image src={thumbnail.src} alt={thumbnail.alt} inferSize={true} />
    <h2>
      <a href={`/newsletter/${slug}`}>{title}</a>
    </h2>
    <small>
      Edition {edition} -{" "}
      <time dateTime={publishDate.toISOString()}>
        {formattedPublishDate(publishDate)}
      </time>
    </small>
  </>
);

export default NewsletterItem;
