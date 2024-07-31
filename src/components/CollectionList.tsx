import type { InferEntrySchema } from "astro:content";

interface Props {
  children: React.ReactNode;
  entries: Array<{
    id: "hope.mdx";
    slug: "hope";
    body: string;
    collection: "newsletter";
    data: InferEntrySchema<"newsletter">;
  }>;
}

const CollectionList = ({ children, entries }: Props) => (
  <ul>
    {entries.map((entry) => (
      <li>
        <EntryComponent {...{ entry }} />
      </li>
    ))}
  </ul>
);

export default CollectionList;
