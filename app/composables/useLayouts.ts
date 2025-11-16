import type { PageMeta } from '#app';

export type LayoutsType = {
  page: PageMeta;
};

export const useLayouts = (props: LayoutsType) => {
  definePageMeta({ ...props.page });
};
