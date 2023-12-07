export const generatInitialCheckboxes = (itemsCount: number) => {
  const form = Array.from(Array(itemsCount), (_, idx) => ({
    [`Test #${idx + 1}`]: Boolean(Math.floor(Math.random() * 2))
  }));

  return form.reduce((acc, item) => ({ ...acc, ...item }), {});
};
