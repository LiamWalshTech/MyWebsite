interface Props {
  loading?: "eager" | "lazy";
}

const NewsletterForm = ({ loading = "lazy" }: Props) => (
  <div className="max-w-md">
    <iframe
      src="https://embeds.beehiiv.com/29f498bc-c783-4992-abfc-d5c2691af81c?slim=true"
      data-test-id="beehiiv-embed"
      title="Beehiiv Newsletter Signup form for Liam Walsh Tech"
      height="74"
      width="100%"
      style={{
        borderRadius: "0px !important",
        backgroundColor: "transparent",
        margin: 0,
        overflow: "hidden !important",
      }}
      loading={loading}
    ></iframe>
  </div>
);

export default NewsletterForm;
