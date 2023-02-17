import uniqid from 'uniqid';

export const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const title = formData.get('title');
  const year = formData.get('year');
  const rating = formData.get('rating');
  const images = formData.getAll('images');
  const actor = formData.get('actor');
  const role = formData.get('role');

  if (title === null || title instanceof File || title.length < 2) throw new Error('incorrect Title');
  if (year === null || year instanceof File || year.length < 1) throw new Error('incorrect year');
  if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
  if (actor === null || actor instanceof File || actor.length < 2) throw new Error('incorrect actor');
  if (role === null || role instanceof File || role.length < 2) throw new Error('incorrect role');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  });

  return {
    title,
    main_character: {
      actor,
      role,
    },
    images: images as string[],
    year,
    rating: Number(rating),
  };
};
