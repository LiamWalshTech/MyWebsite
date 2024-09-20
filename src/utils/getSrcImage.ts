export async function getSrcImage(imagePath: string) {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/images/**/*",
  );
  const hasMatchedImage = images[imagePath] ? true : false;

  if (!hasMatchedImage)
    throw new Error(
      `"${imagePath}" does not exist in glob: '/src/images/**/*'`,
    );

  const indexOfMatchedImage = Object.keys(images).findIndex(
    (image) => image === imagePath,
  );

  const resolvedImages = await Promise.all(
    Object.values(images).map((image) => image().then((mod) => mod.default)),
  );

  const matchedImage = resolvedImages[indexOfMatchedImage] as ImageMetadata;

  return matchedImage;
}
